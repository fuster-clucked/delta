let
	{ keys, values } = Object,
	{ Parser } = require( 'nearley' ),
	Lexer = require( './lexer' )

module.exports = symbols => {

	let

		{ prefixes, postfixes, infixes, circumfixes } = symbols,

		rules = [],

		$ = ( name, ...choices ) =>
			choices.forEach( ( [ symbols, $ ] ) =>
				rules.push( {
					name,
					// FIXME: this may or may not be causing an array map call every time "symbols" is accessed
					get symbols() {
						if ( symbols.constructor === Function )
							symbols = symbols()
						return symbols.map( symbol =>
							symbol.constructor === String
								? { literal: symbol }
								: symbol.name || symbol
						)
					},
					postprocess: $ === undefined
						? $ = tokens =>
							tokens[ 0 ]
						: $
				} )
			) || { name },

		_ = $( '_', [
			[ { type: 'space' } ],
			null
		], [
			[],
			null
		] ),

		__ = $( '__', [
			[ { type: 'space' } ],
			null
		] ),

		ident = $( 'ident', [
			[ { type: 'ident' } ],
			( [ { value } ] ) =>
				[ 'ident', value ]
		] ),

		term = $( 'term', ...[ [
			[ { type: 'time' } ],
			( [ { value } ] ) =>
				[ 'time', value ]
		], [
			[ { type: 'binary' } ],
			( [ { value } ] ) =>
				[ 'number', value ]
		], [
			[ { type: 'octal' } ],
			( [ { value } ] ) =>
				[ 'number', value ]
		], [
			[ { type: 'hex' } ],
			( [ { value } ] ) =>
				[ 'number', value ]
		], [
			[ { type: 'decimal' } ],
			( [ { value } ] ) =>
				[ 'number', value ]
		], [
			[ { type: 'text' } ],
			( [ { value } ] ) =>
				[ 'text', value ]
		], [
			[ ident ]
		], [
			// TODO: this should be replaced by a rule somewhere that accepts only whitespace for "null value"
			[ '(', _, ')' ],
			() =>
				// TODO: can this simply be null to save memory?
				[ 'void' ]
		], [
			() =>
				[ '(', _, top, _, ')' ],
			( [ , , top, , ] ) =>
				top
		] ].concat( values( circumfixes ).map( ( [ , [ text0, text1 ] ] ) => [
			() =>
				[ text0, _, top, _, text1 ],
			( [ , , top, , ] ) =>
				// TODO: maybe symbols should just have surrogate keys
				[ 'circumfix', `${text0} ${text1}`, top ]
		] ) ) ),

		adfix0 = $( 'adfix0', ...keys( prefixes ).map( text => [
			() =>
				[ text, adfix0 ],
			( [ { value }, rhs ] ) =>
				[ 'prefix', value, rhs ]
		] ).concat( keys( postfixes ).map( text => [
			() =>
				[ adfix0, text ],
			( [ lhs, { value } ] ) =>
				[ 'postfix', value, lhs ]
		] ) ).concat( [ [
			() =>
				[ ident, __, adfix0 ],
			( [ lhs, , rhs ] ) =>
				[ 'call', '()', lhs, rhs ]
		], [
			() =>
				[ adfix0, _, '(', _, top, _, ')' ],
			( [ lhs, , , , rhs ] ) =>
				[ 'call', '()', lhs, rhs ]
		], [
			() =>
				[ adfix0, _, '[', _, top, _, ']' ],
			( [ lhs, , , , rhs ] ) =>
				[ 'slice', '[]', lhs, rhs ]
		], [
			[ term ]
		] ] ) ),

		adfix1 = $( 'adfix1', ...keys( prefixes ).map( text => [
			() =>
				[ text, __, adfix1 ],
			( [ { value }, , rhs ] ) =>
				[ 'prefix', value, rhs ]
		] ).concat( keys( postfixes ).map( text => [
			() =>
				[ adfix1, __, text ],
			( [ lhs, , { value } ] ) =>
				[ 'postfix', value, lhs ]
		] ) ).concat( [ [
			[ adfix0 ]
		] ] ) ),

		// TODO: only needed to support ".." infix operator for slices
		infix = $( 'infix', [
			() =>
				[ infix, { type: 'oper' }, adfix1 ],
			( [ lhs, { value }, rhs ] ) =>
				[ 'infix', value, lhs, rhs ]
		], [
			() =>
				[ infix, __, { type: 'oper' }, __, adfix1 ],
			( [ lhs, , { value }, , rhs ] ) =>
				[ 'infix', value, lhs, rhs ]
		], [
			[ adfix1 ]
		] ),

		id = 0,
		top = infix

	for ( let text of keys( infixes ) ) {

		let name = `_${id++}_`

		top = $( name, [
			[ { name }, _, text, _, top ],
			( [ lhs, , { value }, , rhs ] ) =>
				[ 'infix', value, lhs, rhs ]
		], [
			[ top ]
		] )

	}

	$( 'main', [
		[ _, top, _ ],
		( [ , top, ] ) =>
			top
	] )

	return new Parser( rules, 'main', { lexer: Lexer( symbols ) } )

}
