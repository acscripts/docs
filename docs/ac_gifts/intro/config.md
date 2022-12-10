---
title: Configuration
sidebar_position: 1
---

# Configuration

Here you can find detailed description of each config option.  

## sizes
Predefined gift sizes.

**Accepted values**  
```lua
{
    small = {1, 1000}, -- {slots, weight}
    medium = {3, 5000}, -- 3 slots, 5 kg
    large = {5, 15000},
    -- ... any other size you want
}
```



## defaultSize
Default gift size if no size is specified while obtaining the item.

**Accepted values**  
`string` = One of the sizes defined in [`sizes`](#sizes).




## items
Names of items you created in `ox_inventory/data/items.lua`.  
If you used the snippets in [Installation](./install) section, you don't have to change anything.

**Accepted values**  
```lua
{
    gift = 'gift', -- item name for packed gift
    emptyGift = 'empty_gift', -- item name for empty gift (the box)
    openedGift = 'opened_gift', -- item name for opened gift
}
```



## versionCheck
Whether to check for newer resource version and notify in server console.

**Accepted values**  
`true` = You will be notified in server console when a newer version of **ac_radio** is available.  
`false` = You will need to manually check for a newer version on GitHub 👎🏽
