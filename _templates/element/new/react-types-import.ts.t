---
to: src/react-types.ts
inject: true
before: \ntype WokwiElement
skip_if: \{ <%= h.className(name) %>Element \}
---
import { <%= h.className(name) %>Element } from './<%= name %>-element';