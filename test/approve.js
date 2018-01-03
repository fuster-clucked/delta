let
	{ entries } = Object,
	{ createWriteStream } = require( 'fs' )

module.exports = ( names, $case ) => {

	let $suite = function* ( spec, path = [] ) {
		if ( path.length > 0 )
			yield `\n${'#'.repeat( path.length + 2 )} ${path[ path.length - 1 ]}`
		let { given } = spec
		if( given )
			try {
				for ( let line of $case( given ) )
					yield line
			}
			catch ( x ) {
				yield x.stack
			}
		else
			for ( let [ name, subspec ] of entries( spec ) ) {
				path.push( name )
				yield* $suite( subspec, path )
				path.pop()
			}
	}

	for ( let name of names ) {
		let
			spec = require( `../spec/${name}` ),
			actual = createWriteStream( `spec/${name}.md` )
		actual.write( `## ${name}\n` )
		for ( let line of $suite( spec ) )
			actual.write( `${line}\n` )
	}

}
