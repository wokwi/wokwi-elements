---
to: src/react-types.ts
inject: true
before: \}\s+\}\s+\}
skip_if: 'wokwi-<%= name %>'
---
      'wokwi-<%= name %>': WokwiElement<<%= h.className(name) %>Element>;