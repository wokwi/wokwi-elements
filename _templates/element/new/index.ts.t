---
to: src/index.ts
inject: true
skip_if: <%= h.className(name) %>Element
append: true
---
export { <%= h.className(name) %>Element } from './<%= name %>-element';