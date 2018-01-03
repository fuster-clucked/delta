## int

### decimal

#### plain

input | output
--- | ---
`18` | `18`

_tokens_

- `decimal 18`

_nodes_

- `number 18`

#### scored

input | output
--- | ---
`1_176_867` | `1176867`

_tokens_

- `decimal 1176867`

_nodes_

- `number 1176867`

#### measured

input | output
--- | ---
`92_units` | `92`

_tokens_

- `decimal 92`

_nodes_

- `number 92`

### binary

#### lower

input | output
--- | ---
`0b1110` | `14`

_tokens_

- `binary 14`

_nodes_

- `number 14`

#### upper

input | output
--- | ---
`0B1011` | `11`

_tokens_

- `binary 11`

_nodes_

- `number 11`

#### scored

input | output
--- | ---
`0b1_01111111_00001110_01111100` | `25103996`

_tokens_

- `binary 25103996`

_nodes_

- `number 25103996`

### octal

#### lower

input | output
--- | ---
`0o57` | `47`

_tokens_

- `octal 47`

_nodes_

- `number 47`

#### upper

input | output
--- | ---
`0O64` | `52`

_tokens_

- `octal 52`

_nodes_

- `number 52`

#### scored

input | output
--- | ---
`0o3_362_024` | `910356`

_tokens_

- `octal 910356`

_nodes_

- `number 910356`

### hex

#### lower

input | output
--- | ---
`0x4b` | `75`

_tokens_

- `hex 75`

_nodes_

- `number 75`

#### upper

input | output
--- | ---
`0XB4` | `180`

_tokens_

- `hex 180`

_nodes_

- `number 180`

#### scored

input | output
--- | ---
`0x01_9B_EA` | `105450`

_tokens_

- `hex 105450`

_nodes_

- `number 105450`
