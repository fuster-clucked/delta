// TODO: maybe time literals are just sexagesimal numbers which use decimal fractions

// TODO: maybe [tT] is an infix operator that adds a date to a time

module.exports = {

	date: {
		given: '1995-11-22'
	},

	minute: {
		given: '2018-09-10T08:54'
	},

	second: {
		given: '1938-12-22T18:58:43'
	},

	millisec: {
		given: '1988-12-20T09:46:42.438'
	},

	timezone: {

		utc: {

			lower: {
				given: '1952-11-26t23:48z'
			},

			upper: {
				given: '2010-09-09T12:54Z'
			}

		},

		local: {

			positive: {
				given: '1947-04-04T13:10+0400'
			},

			negative: {
				given: '1960-03-23T11:20-03:30'
			}

		}

	}

}
