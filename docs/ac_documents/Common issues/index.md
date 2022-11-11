---
title: Common issues
sidebar_position: 2
---

# Common issues

Didn't find your answer here? Visit the [Discord server](https://discord.gg/2ZezMw2xvR) for support.

## Start order
ac_documents must be started **AFTER** ox_inventory.

**Recommended order**
```yaml
ensure ox_inventory
ensure ac_documents
```