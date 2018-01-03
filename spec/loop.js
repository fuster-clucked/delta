// TODO: maybe loop operators should have higher precedence than function declarations?

// TODO: support all loop operators for associative arrays (requires type inference)?

module.exports = {

	map: {
		given: 's | f'
	},

	// TODO: maybe "?" should be the filter operator and not the conditional one
	filter: {
		given: 's ?| f'
	},

	reduce: {

		left: {

			uninit: {
				given: 's /| f'
			},

			init: {
				given: 's /| v0, f'
			}

		},

		right: {

			uninit: {
				given: 's \\| f'
			},

			init: {
				given: 's \\| v0, f'
			}

		}

	}

}
