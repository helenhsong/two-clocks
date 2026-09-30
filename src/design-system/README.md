# Primetime design system

Tokens, fonts and React components for Two Clocks, from the Primetime design
system (https://claude.ai/artifact/CkP7kkwW2hGr7LwKEsWeBs). Use these instead
of the shadcn components in `@helenhsong/ui`; only `ProjectHeader` still comes
from there.

- `tokens.json`: the tokens as the design system publishes them.
- `tokens.css`: every token as a `--pt-*` CSS variable, and the type styles as
  `.pt-display`, `.pt-heading-1`, … `.pt-caption`. The prefix keeps them clear
  of the shadcn variables `@helenhsong/ui` reads.
- `components/`: build project content inside `.project-page` from these.

```jsx
import { Button, Field, Input, Table, Th, Td } from './design-system/components/index.js'
```

| Component | Use |
| --- | --- |
| `Button` | `variant`: `primary` (the one main action), `secondary`, `ghost`, `danger`. `size`: `md`, `sm`. |
| `Field` | Wraps one control with a `label`, and a `hint` or `error`; wires up ids and `aria-invalid`. |
| `Input`, `Textarea`, `Select`, `Checkbox` | Form controls. `Select` is a native select; pass `<option>`s. `Checkbox` takes a `label`. |
| `Table`, `Th`, `Td` | Data tables with an optional `caption`; `numeric` right-aligns with tabular figures. |
| `Card` | A bordered `surface-000` panel with an optional `title`. |
| `Badge` | `tone`: `neutral`, `brand`, `accent` ("new"/"live" only), `success`, `danger`. |
