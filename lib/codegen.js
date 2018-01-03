module.exports = symbols => {

	let

		{ idents, prefixes, postfixes, infixes, circumfixes } = symbols,

		$ = function* ( [ type, value, ...args ] ) {

			switch ( type ) {

			case 'time':
				yield 'new Date('
				yield value.toString()
				yield ')'
				break

			case 'number':
				yield value.toString()
				break

			case 'text':
				yield "'"
				yield value
					.replace( /\\/g, '\\\\' )
					.replace( /[\b]/g, '\\b' )
					.replace( /\f/g, '\\f' )
					.replace( /\n/g, '\\n' )
					.replace( /\r/g, '\\r' )
					.replace( /\t/g, '\\t' )
					.replace( /'/g, "\\'" )
					.replace( /"/g, '\\"' )
				yield "'"
				break

			case 'ident': {
				let ident = idents[ value ]
				if ( ident )
					yield* ident[ 2 ]()
				else
					// TODO: this should either check current scope or declare as import
					yield value
				break
			}

			case 'prefix':
				yield* prefixes[ value ][ 2 ]( $, args )
				break

			case 'postfix':
				yield* postfixes[ value ][ 2 ]( $, args )
				break

			case 'infix':
				yield* infixes[ value ][ 2 ]( $, args )
				break

			case 'circumfix':
				yield* circumfixes[ value ][ 2 ]( $, args )
				break

			case 'call':
				yield* $( args[ 0 ] )
				yield '('
				yield* $( args[ 1 ] )
				yield ')'
				break

			case 'slice': {
				let [ , value1, ...args1 ] = args[ 1 ]
				if ( value1 !== '..'  ) {
					yield* $( args[ 0 ] )
					yield '['
					yield* $( args[ 1 ] )
					yield ']'
				}
				else {
					yield* $( args[ 0 ] )
					yield '.slice('
					yield* $( args1[ 0 ] )
					yield ','
					yield* $( args1[ 1 ] )
					yield '+1)'
				}
				break
			}

			}

		}

	return $

}
