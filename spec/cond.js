// TODO: "::" instead of "else" for defaulting operator?

// TODO: enum conditionals with simple list for second operand
//       uses numeric monotonically increasing indexes?

// TODO: conditional without the first "control" expresion should become if-elseif-else

// TODO: maybe use "reverse index" notation for "enum conditions"
//       so "[r] s0: t0, s1: t1 else u" instead of "r ? s0: t0, s1: t1 else u"

// FIXME: "else" is probably higher precedence than "?" (as an operator over "nullables")

module.exports = {

	unary: {
		given: 's else u'
	},

	bool: {

		plain: {
			given: 'r ? s'
		},

		defaulted: {
			given: 'r ? s else u'
		}

	},

	enum: {

		unary: {

			// FIXME: evaluates to undefined instead of null when unmatched
			plain: {
				given: 'r ? s0: t0'
			},

			// FIXME: cases that select "falsey" values will evaluate to default value instead
			defaulted: {
				given: 'r ? s0: t0 else u'
			}

		},

		multary: {

			// FIXME: evaluates to undefined instead of null when unmatched
			plain: {
				given: 'r ? s0: t0, s1: t1'
			},

			// FIXME: cases that select "falsey" values will evaluate to default value instead
			defaulted: {
				given: 'r ? s0: t0, s1: t1 else u'
			}

		}

	}

}
