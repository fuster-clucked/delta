let
	{ from } = Array,
	repl = require( 'repl' )

module.exports = ( compiler ) => {

	repl.start( {

		eval: ( text, context, file, write ) => {
			compiler.reset()
			compiler.parse( text )

			write( null, eval(
				from( compiler.translate() ).join( '' )
			) )
		}

	} )

}
