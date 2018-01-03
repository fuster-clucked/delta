let
	{ assign } = Object,
	bool = require( './bool' ),
	loop = require( './loop' )

let

	$param = function* ( $, node ) {

		let [ type, value, ...args ] = node

		switch ( type ) {
		case 'infix':
			switch ( value ) {
			case ',':
				yield* $param( $, args[ 0 ] )
				yield value
				yield* $param( $, args[ 1 ] )
				break
			case ':':
				yield* $( args[ 0 ] )
				yield '='
				yield* $( args[ 1 ] )
				break
			default:
				yield* $( node )
			}
			break
		default:
			yield* $( node )
		}

	},

	symbols = [

		[ 'ident', 'nan', function* () {
			yield 'NaN'
		} ],

		[ 'ident', 'infinity', function* () {
			yield 'Infinity'
		} ],

		[ 'circumfix', [ '[', ']' ], function* ( $, args  ) {
			yield '['
			yield* $( args[ 0 ] )
			yield ']'
		} ],

		[ 'circumfix', [ '{', '}' ], function* ( $, args ) {
			yield '({'
			yield* $( args[ 0 ] )
			yield '})'
		} ],

		[ 'postfix', '%', function* ( $, args ) {
			yield '0.01*('
			yield* $( args[ 0 ] )
			yield ')'
		} ],

		[ 'infix', '.', function* ( $, args ) {
			yield* $( args[ 0 ] )
			yield '.'
			yield* $( args[ 1 ] )
		} ],

		[ 'prefix', '-', function* ( $, args ) {
			yield '-'
			yield* $( args[ 0 ] )
		} ],

		[ 'infix', '+', function* ( $, args ) {
			yield '('
			yield* $( args[ 0 ] )
			yield ')+('
			yield* $( args[ 1 ] )
			yield ')'
		} ],

		[ 'infix', ':', function* ( $, args ) {
			yield* $( args[ 0 ] )
			yield ':'
			yield* $( args[ 1 ] )
		} ],

		[ 'infix', ',', function* ( $, args ) {
			yield* $( args[ 0 ] )
			yield ','
			yield* $( args[ 1 ] )
		} ],

		[ 'infix', '=', function* ( $, args ) {
			yield '('
			yield* $( args[ 0 ] )
			yield ')===('
			yield* $( args[ 1 ] )
			yield ')'
		} ],

		[ 'infix', 'else', function* ( $, args ) {
			yield* $( args[ 0 ] )
			yield '!=null?'
			yield* $( args[ 0 ] )
			yield ':'
			yield* $( args[ 1 ] )
		} ],

		[ 'infix', '?', function* ( $, args ) {
			{
				let [ , value1, ...args1 ] = args[ 1 ]
				switch ( value1 ) {
				case ':':
				case ',': {
					yield '({'
					yield* $( args[ 1 ] )
					yield '})['
					yield* $( args[ 0 ] )
					yield ']'
					break
				}
				case 'else': {
					let [ , value10 ] = args1[ 0 ]
					switch( value10 ) {
					case ':':
					case ',':
						yield '({'
						yield* $( args1[ 0 ] )
						yield '})['
						yield* $( args[ 0 ] )
						yield ']||'
						yield* $( args1[ 1 ] )
						break
					default:
						yield* $( args[ 0 ] )
						yield '?'
						yield* $( args1[ 0 ] )
						yield ':'
						yield* $( args1[ 1 ] )
					}
					break
				}
				default:
					yield* $( args[ 0 ] )
					yield '?'
					yield* $( args[ 1 ] )
					yield ':null'
				}
			}
		} ],

		[ 'infix', ';', function* ( $, args ) {
			yield '(function('
			yield* $param( $, args[ 0 ] )
			yield '){return '
			yield* $( args[ 1 ] )
			yield '})()'
		} ],

		[ 'infix', '->', function* ( $, args ) {
			yield '(function('
			yield* $param( $, args[ 0 ] )
			yield '){return '
			yield* $( args[ 1 ] )
			yield '})'
		} ]

	].concat( bool, loop ),

	idents = {},
	prefixes = {},
	postfixes = {},
	infixes = {},
	circumfixes = {}

for ( let symbol of symbols ) {
	let [ type, text ] = symbol
	switch ( type ) {
	case 'ident':
		idents[ text ] = symbol
		break
	case 'prefix':
		prefixes[ text ] = symbol
		break
	case 'postfix':
		postfixes[ text ] = symbol
		break
	case 'infix':
		infixes[ text ] = symbol
		break
	case 'circumfix': {
		let [ text0, text1 ] = text
		// TODO: maybe symbols should just have surrogate keys
		circumfixes[ `${text0} ${text1}` ] = symbol
		break
	} }
}

assign( symbols, {
	idents, prefixes, postfixes, infixes, circumfixes
} )

module.exports = symbols
