// TODO: "::" instead of "else" for defaulting operator?

module.exports = {

	abstract: {

		unary: {

			plain: {
				given: 'x -> x'
			},

			defaulted: {
				given: 'u: 2 -> u'
			}

		},

		multary: {

			plain: {
				given: 'x, y, z -> y'
			},

			defaulted: {
				given: 'u: 2, v: 9, w -> v'
			}

		},

	},

	apply: {

		nullary: {
			given: 'I ()'
		},

		unary: {

			implied: {
				given: 'f x'
			},

			paren: {
				given: 'g( x )'
			}

		},

		multary: {

			paren: {
				given: 'g( x, y, z )'
			}

		}

	}

}
