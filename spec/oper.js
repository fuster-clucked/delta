// TODO: use postfix increment as example postfix operator?

module.exports = {

	prefix: {

		unspaced: {
			given: '-a'
		},

		spaced: {
			given: '- a'
		},

		applied: {
			given: 'b -a'
		}

	},

	postfix: {

		unspaced: {
			given: 'b%'
		},

		spaced: {
			given: 'b %'
		},

	},

	infix: {

		plain: {

			unspaced: {
				given: 'b+a'
			},

			spaced: {
				given: 'b + a'
			}

		},

		prefixed: {

			unspaced: {
				given: '-2 + m'
			},

			spaced: {
				given: '- 2 + m'
			}

		},

		postfixed: {

			unspaced: {
				given: '2 + n%'
			},

			spaced: {
				given: '2 + n %'
			}

		}

	}

}
