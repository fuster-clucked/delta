let
	symbols = require( '../lib/symbols' ),
	Parser = require( '../lib/parser' ),
	CodeGen = require( '../lib/codegen' )

let
	parser = Parser( symbols ),
	codegen = CodeGen( symbols ),
	start = parser.save()

module.exports = {

	get lexer () {
		return parser.lexer
	},

	set lexer ( lexer ) {
		parser.lexer = lexer
	},

	reset () {
		parser.restore( start )
	},

	parse ( text ) {
		parser.feed( text )
	},

	get results () {
		return parser.results
	},

	translate () {
		return codegen( parser.results[ 0 ] )
	}

}
