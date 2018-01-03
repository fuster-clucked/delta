## time

### date

input | output
--- | ---
`1995-11-22` | `new Date(816998400000)`

_tokens_

- `time 816998400000`

_nodes_

- `time 816998400000`

### minute

input | output
--- | ---
`2018-09-10T08:54` | `new Date(1536594840000)`

_tokens_

- `time 1536594840000`

_nodes_

- `time 1536594840000`

### second

input | output
--- | ---
`1938-12-22T18:58:43` | `new Date(-979074077000)`

_tokens_

- `time -979074077000`

_nodes_

- `time -979074077000`

### millisec

input | output
--- | ---
`1988-12-20T09:46:42.438` | `new Date(598643202438)`

_tokens_

- `time 598643202438`

_nodes_

- `time 598643202438`

### timezone

#### utc

##### lower

input | output
--- | ---
`1952-11-26t23:48z` | `new Date(-539482320000)`

_tokens_

- `time -539482320000`

_nodes_

- `time -539482320000`

##### upper

input | output
--- | ---
`2010-09-09T12:54Z` | `new Date(1284036840000)`

_tokens_

- `time 1284036840000`

_nodes_

- `time 1284036840000`

#### local

##### positive

input | output
--- | ---
`1947-04-04T13:10+0400` | `new Date(-717778200000)`

_tokens_

- `time -717778200000`

_nodes_

- `time -717778200000`

##### negative

input | output
--- | ---
`1960-03-23T11:20-03:30` | `new Date(-308481000000)`

_tokens_

- `time -308481000000`

_nodes_

- `time -308481000000`
