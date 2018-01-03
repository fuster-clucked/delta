## proj

### slice

#### index

input | output
--- | ---
`v[0]` | `v[0]`

_tokens_

- `ident "v"`
  `"[" "["`
  `decimal 0`
  `"]" "]"`

_nodes_

- `slice "[]"`
	- `ident "v"`
	- `number 0`

#### range

input | output
--- | ---
`v[a..b]` | `v.slice(a,b+1)`

_tokens_

- `ident "v"`
  `"[" "["`
  `ident "a"`
  `oper ".."`
  `ident "b"`
  `"]" "]"`

_nodes_

- `slice "[]"`
	- `ident "v"`
	- `infix ".."`
		- `ident "a"`
		- `ident "b"`

### member

input | output
--- | ---
`a.b` | `a.b`

_tokens_

- `ident "a"`
  `"." "."`
  `ident "b"`

_nodes_

- `infix "."`
	- `ident "a"`
	- `ident "b"`
