## bool

### yes

input | output
--- | ---
`yes` | `true`

_tokens_

- `ident "yes"`

_nodes_

- `ident "yes"`

### no

input | output
--- | ---
`no` | `false`

_tokens_

- `ident "no"`

_nodes_

- `ident "no"`

### true

input | output
--- | ---
`true` | `true`

_tokens_

- `ident "true"`

_nodes_

- `ident "true"`

### false

input | output
--- | ---
`false` | `false`

_tokens_

- `ident "false"`

_nodes_

- `ident "false"`

### on

input | output
--- | ---
`on` | `true`

_tokens_

- `ident "on"`

_nodes_

- `ident "on"`

### off

input | output
--- | ---
`off` | `false`

_tokens_

- `ident "off"`

_nodes_

- `ident "off"`

### neg

input | output
--- | ---
`not p` | `!p`

_tokens_

- `not "not"`
  `space " "`
  `ident "p"`

_nodes_

- `prefix "not"`
	- `ident "p"`

### conj

input | output
--- | ---
`p and q` | `(p)&&(q)`

_tokens_

- `ident "p"`
  `space " "`
  `and "and"`
  `space " "`
  `ident "q"`

_nodes_

- `infix "and"`
	- `ident "p"`
	- `ident "q"`

### disj

input | output
--- | ---
`p or q` | `(p)\|\|(q)`

_tokens_

- `ident "p"`
  `space " "`
  `or "or"`
  `space " "`
  `ident "q"`

_nodes_

- `infix "or"`
	- `ident "p"`
	- `ident "q"`
