let { stdout } = process

module.exports = ( compiler, source ) => {

	let translate = () => {
		for ( let text of compiler.translate() )
			stdout.write( text )
	}

	if( source.constructor === String ) {
		compiler.parse( source )
		translate()
		return
	}

	source.setEncoding( 'utf8' )

	source.on( 'data', text => {
		compiler.parse( text )
	} )

	source.on( 'end', translate )

}
