## func

### abstract

#### unary

##### plain

input | output
--- | ---
`x -> x` | `(function(x){return x})`

_tokens_

- `ident "x"`
  `space " "`
  `"->" "->"`
  `space " "`
  `ident "x"`

_nodes_

- `infix "->"`
	- `ident "x"`
	- `ident "x"`

##### defaulted

input | output
--- | ---
`u: 2 -> u` | `(function(u=2){return u})`

_tokens_

- `ident "u"`
  `":" ":"`
  `space " "`
  `decimal 2`
  `space " "`
  `"->" "->"`
  `space " "`
  `ident "u"`

_nodes_

- `infix "->"`
	- `infix ":"`
		- `ident "u"`
		- `number 2`
	- `ident "u"`

#### multary

##### plain

input | output
--- | ---
`x, y, z -> y` | `(function(x,y,z){return y})`

_tokens_

- `ident "x"`
  `"," ","`
  `space " "`
  `ident "y"`
  `"," ","`
  `space " "`
  `ident "z"`
  `space " "`
  `"->" "->"`
  `space " "`
  `ident "y"`

_nodes_

- `infix "->"`
	- `infix ","`
		- `infix ","`
			- `ident "x"`
			- `ident "y"`
		- `ident "z"`
	- `ident "y"`

##### defaulted

input | output
--- | ---
`u: 2, v: 9, w -> v` | `(function(u=2,v=9,w){return v})`

_tokens_

- `ident "u"`
  `":" ":"`
  `space " "`
  `decimal 2`
  `"," ","`
  `space " "`
  `ident "v"`
  `":" ":"`
  `space " "`
  `decimal 9`
  `"," ","`
  `space " "`
  `ident "w"`
  `space " "`
  `"->" "->"`
  `space " "`
  `ident "v"`

_nodes_

- `infix "->"`
	- `infix ","`
		- `infix ","`
			- `infix ":"`
				- `ident "u"`
				- `number 2`
			- `infix ":"`
				- `ident "v"`
				- `number 9`
		- `ident "w"`
	- `ident "v"`

### apply

#### nullary

input | output
--- | ---
`I ()` | `I()`

_tokens_

- `ident "I"`
  `space " "`
  `"(" "("`
  `")" ")"`

_nodes_

- `call "()"`
	- `ident "I"`
	- `void undefined`

#### unary

##### implied

input | output
--- | ---
`f x` | `f(x)`

_tokens_

- `ident "f"`
  `space " "`
  `ident "x"`

_nodes_

- `call "()"`
	- `ident "f"`
	- `ident "x"`

##### paren

input | output
--- | ---
`g( x )` | `g(x)`

_tokens_

- `ident "g"`
  `"(" "("`
  `space " "`
  `ident "x"`
  `space " "`
  `")" ")"`

_nodes_

- `call "()"`
	- `ident "g"`
	- `ident "x"`

#### multary

##### paren

input | output
--- | ---
`g( x, y, z )` | `g(x,y,z)`

_tokens_

- `ident "g"`
  `"(" "("`
  `space " "`
  `ident "x"`
  `"," ","`
  `space " "`
  `ident "y"`
  `"," ","`
  `space " "`
  `ident "z"`
  `space " "`
  `")" ")"`

_nodes_

- `call "()"`
	- `ident "g"`
	- `infix ","`
		- `infix ","`
			- `ident "x"`
			- `ident "y"`
		- `ident "z"`
