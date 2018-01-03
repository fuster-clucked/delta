// TODO: fixed-point and exponential notation for other bases (binary, etc)

// TODO: maybe [eE] is an infix operator that multiplies by a power of the number's base

module.exports = {

	whole: {
		given: '62.'
	},

	fraction: {
		given: '0.163'
	},

	mixed: {
		given: '7.32'
	},

	scored: {
		given: '12.782_910'
	},

	scient: {

		unsigned: {

			lower: {
				given: '7.98e47'
			},

			upper: {
				given: '2.05E94'
			}

		},

		positive: {
			given: '15e+58'
		},

		negative: {
			given: '68.2e-9'
		}

	},

	nan: {
		given: 'nan'
	},

	infinity: {
		given: 'infinity'
	}

}
