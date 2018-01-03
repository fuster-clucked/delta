let
	{ assign } = Object,
	{ compile } = require( 'moo' )

module.exports = symbols =>

	compile( assign( {

		space: {
			match: /\s+/,
			lineBreaks: true
		},

		'(': '(',
		')': ')',

		// FIXME: exceptional match to make sure "." doesn't prevent ".." tokens from being recognized
		'..': {
			match: '..',
			keywords: {
				oper: [ '..' ]
			}
		},

		// FIXME: exceptional match to make sure "-" doesn't prevent "->" tokens from being recognized
		'->': {
			match: '->',
			keywords: {
				oper: [ '->' ]
			}
		},

		// FIXME: exceptional match to make sure "?" doesn't prevent "?|" tokens from being recognized
		'?|': {
			match: '?|',
			keywords: {
				oper: [ '?|' ]
			}
		},

	},

	symbols.reduce( ( rules, [ type, text ] ) => {
		switch ( type ) {
		case 'ident':
			break
		case 'circumfix': {
			let [ text0, text1 ] = text
			rules[ text0 ] = text0
			rules[ text1 ] = text1
			break
		}
		default:
			rules[ text ] = text
		}
		return rules
	}, {} ),

	{

		time: {
			match: /\d{4}-\d{2}-\d{2}(?:[Tt]\d{2}:\d{2}(?::\d{2}(?:\.\d*)?)?)?(?:[Zz]|[+-]\d{2}:?\d{2})?/,
			value: text =>
				Date.parse( text )
		},

		binary: {
			match: /(?:0[Bb][01_]+[A-Za-z_]*)/,
			value: text =>
				parseInt( text.replace( /_/g, '' ).slice( 2 ), 2 )
		},

		octal: {
			match: /(?:0[Oo][0-7_]+[A-Za-z_]*)/,
			value: text =>
				parseInt( text.replace( /_/g, '' ).slice( 2 ), 8 )
		},

		hex: {
			match: /(?:0[Xx][A-Fa-f0-9_]+[A-Za-z_]*)/,
			value: text =>
				parseInt( text.replace( /_/g, '' ).slice( 2 ), 16 )
		},

		decimal: {
			match: /(?:\d[0-9_]*(?:\.[0-9_]*)?(?:[eE][+-]?\d+)?[A-Za-z_]*)/,
			value: text =>
				parseFloat( text.replace( /_/g, '' ) )
		},

		text: {
			match: /(?:'(?:\\(?:[\\'bfnrt]|u[A-Fa-f\d]{4})|[^\\'])*'|"(?:\\(?:[\\"bfnrt]|u[A-Fa-f\d]{4})|[^\\"])*")/,
			value: text =>
				// FIXME: replacements should occur left to right
				//       example '"\\"' should escape the backslash not the double quote
				text.slice( 1, -1 )
					.replace( /\\b/g, '\b' )
					.replace( /\\f/g, '\f' )
					.replace( /\\n/g, '\n' )
					.replace( /\\r/g, '\r' )
					.replace( /\\t/g, '\t' )
					.replace( /\\'/g, "'" )
					.replace( /\\"/g, '"' )
					.replace( /\\u([A-Fa-f\d]{4})/g, ( match, code ) =>
						String.fromCharCode( parseInt( code, 16 ) )
					)
					.replace( /\\\\/g, '\\' )
		},

		ident: {
			match: /[A-Za-z_]\w*/,
			value: text =>
				text.split( '_' ).map( ( part, i ) =>
					i > 0
						? part.charAt( 0 ).toUpperCase() + part.slice( 1 )
						: part
				).join( '' )
		},

		oper: {
			match: /[^\s\w()[\]{},:=]+/
		}

	} ) )
