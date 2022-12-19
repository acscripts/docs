---
title: Installation
sidebar_position: 2
---

# Installation

## Items
Add the following snippet to `ox_inventory/data/items.lua`.
```lua
['gift'] = {
    label = 'Gift',
    weight = 1,
    stack = false,
    close = false,
    consume = 0,
    server = {
        export = 'ac_gifts.unwrapGift',
    },
},

['empty_gift'] = {
    label = 'Gift box',
    weight = 1,
    stack = false,
    close = false,
    consume = 0,
    buttons = {{
        label = 'Wrap gift',
        action = function(slot)
            TriggerServerEvent('ac_gifts:wrapGift', slot)
        end,
    }}
},

['opened_gift'] = {
    label = 'Opened gift',
    weight = 1,
    stack = false,
    close = false,
    consume = 0,
},
```

Add the following snippet to `ox_inventory/module/items/server.lua`.
```lua
['empty_gift'] = {
    size = {3, 5000}
},
```

For more detailed steps, visit the official ["Creating items"](https://overextended.github.io/docs/ox_inventory/Guides/creatingItems) guide.

### Images
![Empty gift](https://i.imgur.com/Rl9XyrW.png)
![Gift](https://i.imgur.com/q9FqT0F.png)
![Opened gift](https://i.imgur.com/6dLX8Ib.png)



## Obtaining emtpty gifts

### Shop
```lua
GiftShop = {
    name = 'Gift shop',
    inventory = {
        { name = 'empty_gift', price = 1, metadata = { type = 'small' } },
        { name = 'empty_gift', price = 3, metadata = { type = 'medium' } },
        { name = 'empty_gift', price = 5, metadata = { type = 'large' } },
    }, locations = {
        vec3(1098.5988, -674.4120, 56.4850),
    },
},
```

### Inventory
```lua
exports.ox_inventory:AddItem(source, 'empty_gift', 1, 'small')
```

### Command
```lua
-- [size] = any predefined size (defaults to 'defaultSize' from config)
/giveitem me empty_gift 1 [size]

-- example
/giveitem me empty_gift 1 small
```
