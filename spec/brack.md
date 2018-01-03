## brack

### paren

input | output
--- | ---
`( x )` | `x`

_tokens_

- `"(" "("`
  `space " "`
  `ident "x"`
  `space " "`
  `")" ")"`

_nodes_

- `ident "x"`

### list

input | output
--- | ---
`[ a0, a1 ]` | `[a0,a1]`

_tokens_

- `"[" "["`
  `space " "`
  `ident "a0"`
  `"," ","`
  `space " "`
  `ident "a1"`
  `space " "`
  `"]" "]"`

_nodes_

- `circumfix "[ ]"`
	- `infix ","`
		- `ident "a0"`
		- `ident "a1"`

### assoc

input | output
--- | ---
`{ k0: v0, k1: v1 }` | `({k0:v0,k1:v1})`

_tokens_

- `"{" "{"`
  `space " "`
  `ident "k0"`
  `":" ":"`
  `space " "`
  `ident "v0"`
  `"," ","`
  `space " "`
  `ident "k1"`
  `":" ":"`
  `space " "`
  `ident "v1"`
  `space " "`
  `"}" "}"`

_nodes_

- `circumfix "{ }"`
	- `infix ","`
		- `infix ":"`
			- `ident "k0"`
			- `ident "v0"`
		- `infix ":"`
			- `ident "k1"`
			- `ident "v1"`
