## oper

### prefix

#### unspaced

input | output
--- | ---
`-a` | `-a`

_tokens_

- `"-" "-"`
  `ident "a"`

_nodes_

- `prefix "-"`
	- `ident "a"`

#### spaced

input | output
--- | ---
`- a` | `-a`

_tokens_

- `"-" "-"`
  `space " "`
  `ident "a"`

_nodes_

- `prefix "-"`
	- `ident "a"`

#### applied

input | output
--- | ---
`b -a` | `b(-a)`

_tokens_

- `ident "b"`
  `space " "`
  `"-" "-"`
  `ident "a"`

_nodes_

- `call "()"`
	- `ident "b"`
	- `prefix "-"`
		- `ident "a"`

### postfix

#### unspaced

input | output
--- | ---
`b%` | `0.01*(b)`

_tokens_

- `ident "b"`
  `"%" "%"`

_nodes_

- `postfix "%"`
	- `ident "b"`

#### spaced

input | output
--- | ---
`b %` | `0.01*(b)`

_tokens_

- `ident "b"`
  `space " "`
  `"%" "%"`

_nodes_

- `postfix "%"`
	- `ident "b"`

### infix

#### plain

##### unspaced

input | output
--- | ---
`b+a` | `(b)+(a)`

_tokens_

- `ident "b"`
  `"+" "+"`
  `ident "a"`

_nodes_

- `infix "+"`
	- `ident "b"`
	- `ident "a"`

##### spaced

input | output
--- | ---
`b + a` | `(b)+(a)`

_tokens_

- `ident "b"`
  `space " "`
  `"+" "+"`
  `space " "`
  `ident "a"`

_nodes_

- `infix "+"`
	- `ident "b"`
	- `ident "a"`

#### prefixed

##### unspaced

input | output
--- | ---
`-2 + m` | `(-2)+(m)`

_tokens_

- `"-" "-"`
  `decimal 2`
  `space " "`
  `"+" "+"`
  `space " "`
  `ident "m"`

_nodes_

- `infix "+"`
	- `prefix "-"`
		- `number 2`
	- `ident "m"`

##### spaced

input | output
--- | ---
`- 2 + m` | `(-2)+(m)`

_tokens_

- `"-" "-"`
  `space " "`
  `decimal 2`
  `space " "`
  `"+" "+"`
  `space " "`
  `ident "m"`

_nodes_

- `infix "+"`
	- `prefix "-"`
		- `number 2`
	- `ident "m"`

#### postfixed

##### unspaced

input | output
--- | ---
`2 + n%` | `(2)+(0.01*(n))`

_tokens_

- `decimal 2`
  `space " "`
  `"+" "+"`
  `space " "`
  `ident "n"`
  `"%" "%"`

_nodes_

- `infix "+"`
	- `number 2`
	- `postfix "%"`
		- `ident "n"`

##### spaced

input | output
--- | ---
`2 + n %` | `(2)+(0.01*(n))`

_tokens_

- `decimal 2`
  `space " "`
  `"+" "+"`
  `space " "`
  `ident "n"`
  `space " "`
  `"%" "%"`

_nodes_

- `infix "+"`
	- `number 2`
	- `postfix "%"`
		- `ident "n"`
