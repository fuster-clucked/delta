## text

### squoted

#### plain

input | output
--- | ---
`'plain'` | `'plain'`

_tokens_

- `text "plain"`

_nodes_

- `text "plain"`

#### escaped

##### backslash

input | output
--- | ---
`'"\\"'` | `'\"\\\"'`

_tokens_

- `text "\"\\\""`

_nodes_

- `text "\"\\\""`

##### squotes

input | output
--- | ---
`'some \'single quotes\''` | `'some \'single quotes\''`

_tokens_

- `text "some 'single quotes'"`

_nodes_

- `text "some 'single quotes'"`

##### control

input | output
--- | ---
`'\b\f\n\r\t'` | `'\b\f\n\r\t'`

_tokens_

- `text "\b\f\n\r\t"`

_nodes_

- `text "\b\f\n\r\t"`

##### unicode

input | output
--- | ---
`'\u275Dheavy quotes\u275E'` | `'❝heavy quotes❞'`

_tokens_

- `text "❝heavy quotes❞"`

_nodes_

- `text "❝heavy quotes❞"`

### dquoted

#### plain

input | output
--- | ---
`"plain"` | `'plain'`

_tokens_

- `text "plain"`

_nodes_

- `text "plain"`

#### escaped

##### backslash

input | output
--- | ---
`"'\\'"` | `'\'\\\''`

_tokens_

- `text "'\\'"`

_nodes_

- `text "'\\'"`

##### dquotes

input | output
--- | ---
`"some \"double quotes\""` | `'some \"double quotes\"'`

_tokens_

- `text "some \"double quotes\""`

_nodes_

- `text "some \"double quotes\""`

##### control

input | output
--- | ---
`"\b\f\n\r\t"` | `'\b\f\n\r\t'`

_tokens_

- `text "\b\f\n\r\t"`

_nodes_

- `text "\b\f\n\r\t"`

##### unicode

input | output
--- | ---
`"\u275Dheavy quotes\u275E"` | `'❝heavy quotes❞'`

_tokens_

- `text "❝heavy quotes❞"`

_nodes_

- `text "❝heavy quotes❞"`
