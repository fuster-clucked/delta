## cond

### unary

input | output
--- | ---
`s else u` | `s!=null?s:u`

_tokens_

- `ident "s"`
  `space " "`
  `else "else"`
  `space " "`
  `ident "u"`

_nodes_

- `infix "else"`
	- `ident "s"`
	- `ident "u"`

### bool

#### plain

input | output
--- | ---
`r ? s` | `r?s:null`

_tokens_

- `ident "r"`
  `space " "`
  `"?" "?"`
  `space " "`
  `ident "s"`

_nodes_

- `infix "?"`
	- `ident "r"`
	- `ident "s"`

#### defaulted

input | output
--- | ---
`r ? s else u` | `r?s:u`

_tokens_

- `ident "r"`
  `space " "`
  `"?" "?"`
  `space " "`
  `ident "s"`
  `space " "`
  `else "else"`
  `space " "`
  `ident "u"`

_nodes_

- `infix "?"`
	- `ident "r"`
	- `infix "else"`
		- `ident "s"`
		- `ident "u"`

### enum

#### unary

##### plain

input | output
--- | ---
`r ? s0: t0` | `({s0:t0})[r]`

_tokens_

- `ident "r"`
  `space " "`
  `"?" "?"`
  `space " "`
  `ident "s0"`
  `":" ":"`
  `space " "`
  `ident "t0"`

_nodes_

- `infix "?"`
	- `ident "r"`
	- `infix ":"`
		- `ident "s0"`
		- `ident "t0"`

##### defaulted

input | output
--- | ---
`r ? s0: t0 else u` | `({s0:t0})[r]\|\|u`

_tokens_

- `ident "r"`
  `space " "`
  `"?" "?"`
  `space " "`
  `ident "s0"`
  `":" ":"`
  `space " "`
  `ident "t0"`
  `space " "`
  `else "else"`
  `space " "`
  `ident "u"`

_nodes_

- `infix "?"`
	- `ident "r"`
	- `infix "else"`
		- `infix ":"`
			- `ident "s0"`
			- `ident "t0"`
		- `ident "u"`

#### multary

##### plain

input | output
--- | ---
`r ? s0: t0, s1: t1` | `({s0:t0,s1:t1})[r]`

_tokens_

- `ident "r"`
  `space " "`
  `"?" "?"`
  `space " "`
  `ident "s0"`
  `":" ":"`
  `space " "`
  `ident "t0"`
  `"," ","`
  `space " "`
  `ident "s1"`
  `":" ":"`
  `space " "`
  `ident "t1"`

_nodes_

- `infix "?"`
	- `ident "r"`
	- `infix ","`
		- `infix ":"`
			- `ident "s0"`
			- `ident "t0"`
		- `infix ":"`
			- `ident "s1"`
			- `ident "t1"`

##### defaulted

input | output
--- | ---
`r ? s0: t0, s1: t1 else u` | `({s0:t0,s1:t1})[r]\|\|u`

_tokens_

- `ident "r"`
  `space " "`
  `"?" "?"`
  `space " "`
  `ident "s0"`
  `":" ":"`
  `space " "`
  `ident "t0"`
  `"," ","`
  `space " "`
  `ident "s1"`
  `":" ":"`
  `space " "`
  `ident "t1"`
  `space " "`
  `else "else"`
  `space " "`
  `ident "u"`

_nodes_

- `infix "?"`
	- `ident "r"`
	- `infix "else"`
		- `infix ","`
			- `infix ":"`
				- `ident "s0"`
				- `ident "t0"`
			- `infix ":"`
				- `ident "s1"`
				- `ident "t1"`
		- `ident "u"`
