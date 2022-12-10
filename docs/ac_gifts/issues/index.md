---
title: Common issues
sidebar_position: 2
---

# Common issues

Didn't find your answer here? Visit the [Discord server](https://discord.gg/2ZezMw2xvR) for support.

## Latest version
Make sure you have the latest version of all required resources.

**Downloads**  
• [Latest version of ac_gifts](https://github.com/acscripts/ac_gifts/releases/latest)  
• [Latest version of ox_inventory](https://github.com/overextended/ox_inventory/releases/latest)

## Start order
ac_gifts must be started **AFTER** ox_inventory.

**Recommended order**
```yaml
ensure ox_inventory
ensure ac_gifts
```
