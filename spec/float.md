## float

### whole

input | output
--- | ---
`62.` | `62`

_tokens_

- `decimal 62`

_nodes_

- `number 62`

### fraction

input | output
--- | ---
`0.163` | `0.163`

_tokens_

- `decimal 0.163`

_nodes_

- `number 0.163`

### mixed

input | output
--- | ---
`7.32` | `7.32`

_tokens_

- `decimal 7.32`

_nodes_

- `number 7.32`

### scored

input | output
--- | ---
`12.782_910` | `12.78291`

_tokens_

- `decimal 12.78291`

_nodes_

- `number 12.78291`

### scient

#### unsigned

##### lower

input | output
--- | ---
`7.98e47` | `7.98e+47`

_tokens_

- `decimal 7.98e+47`

_nodes_

- `number 7.98e+47`

##### upper

input | output
--- | ---
`2.05E94` | `2.05e+94`

_tokens_

- `decimal 2.05e+94`

_nodes_

- `number 2.05e+94`

#### positive

input | output
--- | ---
`15e+58` | `1.5e+59`

_tokens_

- `decimal 1.5e+59`

_nodes_

- `number 1.5e+59`

#### negative

input | output
--- | ---
`68.2e-9` | `6.82e-8`

_tokens_

- `decimal 6.82e-8`

_nodes_

- `number 6.82e-8`

### nan

input | output
--- | ---
`nan` | `NaN`

_tokens_

- `ident "nan"`

_nodes_

- `ident "nan"`

### infinity

input | output
--- | ---
`infinity` | `Infinity`

_tokens_

- `ident "infinity"`

_nodes_

- `ident "infinity"`
