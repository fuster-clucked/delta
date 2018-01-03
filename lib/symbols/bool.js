module.exports = [

	[ 'ident', 'yes', function* () {
		yield 'true'
	} ],

	[ 'ident', 'on', function* () {
		yield 'true'
	} ],

	[ 'ident', 'no', function* () {
		yield 'false'
	} ],

	[ 'ident', 'off', function* () {
		yield 'false'
	} ],

	[ 'infix', 'or', function* ( $, args ) {
		yield '('
		yield* $( args[ 0 ] )
		yield ')'
		yield '||'
		yield '('
		yield* $( args[ 1 ] )
		yield ')'
	} ],

	[ 'prefix', 'not', function* ( $, args ) {
		yield '!'
		yield* $( args[ 0 ] )
	} ],

	[ 'infix', 'and', function* ( $, args ) {
		yield '('
		yield* $( args[ 0 ] )
		yield ')'
		yield '&&'
		yield '('
		yield* $( args[ 1 ] )
		yield ')'
	} ],

]
