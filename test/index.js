let
	{ from } = Array,
	approve = require( './approve' ),
	symbols = require( '../lib/symbols' ),
	Lexer = require( '../lib/lexer' ),
	compiler = require( '../lib' )

let

	lexer = Lexer( symbols ),

	$token = ( type, value ) =>
		`\`${type.match( /^\w/ ) ? type : JSON.stringify( type )} ${JSON.stringify( value )}\``,

	$node = function* ( [ type, value, ...args ], depth = 0 ) {
		let indent = '\t'.repeat( depth )
		yield `${indent}- ${$token( type, value )}`
		for ( let arg of args )
			yield* $node( arg, depth + 1 )
	}

approve( [ 'lexer' ], function* ( given ) {
	yield ''
	lexer.reset( given )
	for ( let { type, value } of from( lexer ) )
		yield $token( type, value )
} )

approve( [
	'ident', 'oper',
	'bool', 'int', 'float', 'text', 'time', 'brack',
	'cond', 'func', 'loop', 'proj', 'misc'
], function* ( given ) {

	let
		lexer = compiler.lexer,
		tokens = []

	compiler.lexer = {
		next () {
			let token = lexer.next()
			if ( token )
				tokens.push( token )
			return token
		},
		save: lexer.save.bind( lexer ),
		reset: lexer.reset.bind( lexer )
	}

	compiler.reset()
	compiler.parse( given )

	let
		{ results } = compiler,
		warnings = results.length > 1 ? ' (ambiguous!)' : '',
		output = results.length ? from( compiler.translate() ).join( '' ) : ''

	given = given.replace( /\n/g, '\\n' ).replace( /\|/g, '\\|' )
	output = output.replace( /\n/g, '\\n' ).replace( /\|/g, '\\|' )

	yield ''
	yield 'input | output'
	yield '--- | ---'
	yield `\`${given}\` | \`${output}\``

	yield ''
	yield '_tokens_'
	yield ''

	let i = 0
	for ( let { type, value } of tokens ) {
		yield `${i ? ' ' : '-'} ${$token( type, value )}`
		i++
	}

	yield ''
	yield `_nodes${warnings}_`
	yield ''

	for ( let result of results )
		yield* $node( result )

} )
