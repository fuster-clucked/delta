module.exports = {

	slice: {

		index: {
			given: 'v[0]'
		},

		// FIXME: does not work if start end of range is a number literal (since it is lexed as a float)
		range: {
			given: 'v[a..b]'
		},

	},

	member: {
		given: 'a.b'
	}

}
