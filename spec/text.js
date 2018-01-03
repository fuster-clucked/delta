module.exports = {

	squoted: {

		plain: {
			given: "'plain'"
		},

		escaped: {

			backslash: {
				given: "'\"\\\\\"'"
			},

			squotes: {
				given: "'some \\'single quotes\\''"
			},

			control: {
				given: "'\\b\\f\\n\\r\\t'"
			},

			unicode: {
				given: "'\\u275Dheavy quotes\\u275E'"
			}

		}

	},

	dquoted: {

		plain: {
			given: '"plain"'
		},

		escaped: {

			backslash: {
				given: '"\'\\\\\'"'
			},

			dquotes: {
				given: '"some \\"double quotes\\""'
			},

			control: {
				given: '"\\b\\f\\n\\r\\t"'
			},

			unicode: {
				given: '"\\u275Dheavy quotes\\u275E"'
			}

		}

	}

}
