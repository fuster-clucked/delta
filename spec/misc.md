## misc

### newline

input | output
--- | ---
`\n` | ``

_tokens_

- `space "\n"`

_nodes_


### null

input | output
--- | ---
`null` | `null`

_tokens_

- `ident "null"`

_nodes_

- `ident "null"`

### percent

input | output
--- | ---
`n%` | `0.01*(n)`

_tokens_

- `ident "n"`
  `"%" "%"`

_nodes_

- `postfix "%"`
	- `ident "n"`

### equal

input | output
--- | ---
`y = 2` | `(y)===(2)`

_tokens_

- `ident "y"`
  `space " "`
  `"=" "="`
  `space " "`
  `decimal 2`

_nodes_

- `infix "="`
	- `ident "y"`
	- `number 2`

### scope

input | output
--- | ---
`m: 5, n: 2; m` | `(function(m=5,n=2){return m})()`

_tokens_

- `ident "m"`
  `":" ":"`
  `space " "`
  `decimal 5`
  `"," ","`
  `space " "`
  `ident "n"`
  `":" ":"`
  `space " "`
  `decimal 2`
  `";" ";"`
  `space " "`
  `ident "m"`

_nodes_

- `infix ";"`
	- `infix ","`
		- `infix ":"`
			- `ident "m"`
			- `number 5`
		- `infix ":"`
			- `ident "n"`
			- `number 2`
	- `ident "m"`

### prec

input | output
--- | ---
`a, b -> a = f( b ) + 1` | `(function(a,b){return (a)===((f(b))+(1))})`

_tokens_

- `ident "a"`
  `"," ","`
  `space " "`
  `ident "b"`
  `space " "`
  `"->" "->"`
  `space " "`
  `ident "a"`
  `space " "`
  `"=" "="`
  `space " "`
  `ident "f"`
  `"(" "("`
  `space " "`
  `ident "b"`
  `space " "`
  `")" ")"`
  `space " "`
  `"+" "+"`
  `space " "`
  `decimal 1`

_nodes_

- `infix "->"`
	- `infix ","`
		- `ident "a"`
		- `ident "b"`
	- `infix "="`
		- `ident "a"`
		- `infix "+"`
			- `call "()"`
				- `ident "f"`
				- `ident "b"`
			- `number 1`
