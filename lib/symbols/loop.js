module.exports = [

	[ 'infix', '|', function* ( $, args ) {
		yield* $( args[ 0 ] )
		yield '.map('
		yield* $( args[ 1 ] )
		yield ')'
	} ],

	[ 'infix', '?|', function* ( $, args ) {
		yield* $( args[ 0 ] )
		yield '.filter('
		yield* $( args[ 1 ] )
		yield ')'
	} ],

	[ 'infix', '/|', function* ( $, args ) {
		let [ , value1, ...args1 ] = args[ 1 ]
		yield* $( args[ 0 ] )
		yield '.reduce('
		if ( value1 === ',' ) {
			yield* $( args1[ 1 ] )
			yield value1
			yield* $( args1[ 0 ] )
		}
		else
			yield* $( args[ 1 ] )
		yield ')'
	} ],

	[ 'infix', '\\|', function* ( $, args ) {
		let [ , value1, ...args1 ] = args[ 1 ]
		yield* $( args[ 0 ] )
		yield '.reduceRight('
		if ( value1 === ',' ) {
			yield* $( args1[ 1 ] )
			yield value1
			yield* $( args1[ 0 ] )
		}
		else
			yield* $( args[ 1 ] )
		yield ')'
	} ]

]
