## loop

### map

input | output
--- | ---
`s \| f` | `s.map(f)`

_tokens_

- `ident "s"`
  `space " "`
  `"|" "|"`
  `space " "`
  `ident "f"`

_nodes_

- `infix "|"`
	- `ident "s"`
	- `ident "f"`

### filter

input | output
--- | ---
`s ?\| f` | `s.filter(f)`

_tokens_

- `ident "s"`
  `space " "`
  `"?|" "?|"`
  `space " "`
  `ident "f"`

_nodes_

- `infix "?|"`
	- `ident "s"`
	- `ident "f"`

### reduce

#### left

##### uninit

input | output
--- | ---
`s /\| f` | `s.reduce(f)`

_tokens_

- `ident "s"`
  `space " "`
  `"/|" "/|"`
  `space " "`
  `ident "f"`

_nodes_

- `infix "/|"`
	- `ident "s"`
	- `ident "f"`

##### init

input | output
--- | ---
`s /\| v0, f` | `s.reduce(f,v0)`

_tokens_

- `ident "s"`
  `space " "`
  `"/|" "/|"`
  `space " "`
  `ident "v0"`
  `"," ","`
  `space " "`
  `ident "f"`

_nodes_

- `infix "/|"`
	- `ident "s"`
	- `infix ","`
		- `ident "v0"`
		- `ident "f"`

#### right

##### uninit

input | output
--- | ---
`s \\| f` | `s.reduceRight(f)`

_tokens_

- `ident "s"`
  `space " "`
  `"\\|" "\\|"`
  `space " "`
  `ident "f"`

_nodes_

- `infix "\\|"`
	- `ident "s"`
	- `ident "f"`

##### init

input | output
--- | ---
`s \\| v0, f` | `s.reduceRight(f,v0)`

_tokens_

- `ident "s"`
  `space " "`
  `"\\|" "\\|"`
  `space " "`
  `ident "v0"`
  `"," ","`
  `space " "`
  `ident "f"`

_nodes_

- `infix "\\|"`
	- `ident "s"`
	- `infix ","`
		- `ident "v0"`
		- `ident "f"`
