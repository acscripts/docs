---
title: qb-inventory
sidebar_position: 1
---

# QB Inventory
:::danger
Using this inventory is on your own risk. It's **not secured** and lacks basic inventory functionality, such as metadata validation.  
You can use [OX Inventory 🐂](https://github.com/overextended/ox_inventory) which supports conversion from QB Inventory and is **daily maintained**.
:::

## Bridge
Replace **all** content in `editable/bridge/server.lua` with the following code:

```lua
local Inventory = exports['qb-inventory']

local function getPlayer(playerId)
    return playerId
end

-- doesn't validate metadata which causes item's stacking even with different metadata
local function addItem(player, item, count, metadata, slot)
    return Inventory:AddItem(player, item, count, slot, metadata)
end

-- doesn't support metadata checks
local function removeItem(player, item, count, metadata, slot)
    return Inventory:RemoveItem(player, item, count, slot)
end

-- it doesn't exist in QB Inventory aparently??
local function canSwapItem()
    return true
end

-- so far, this is the only QB Inventory function that seems to be working as it should
local function getSlot(player, slot)
    local item = Inventory:GetItemBySlot(player, slot)
    return {
        name = item?.name,
        metadata = item?.info,
    }
end

local metadata = {
    preset = 'type',
    id = 'id',
    title = 'description',
}

-- Create items
exports['qb-core']:AddItems({
    [ac.items.paper] = {
        name = ac.items.paper,
        label = 'Paper',
        weight = 1,
        type = 'item',
        image = 'paper.png',
        unique = false,
        useable = true,
        shouldClose = true,
    },
    [ac.items.document] = {
        name = ac.items.document,
        label = 'Document',
        weight = 1,
        type = 'item',
        image = 'document.png',
        unique = false,
        useable = true,
        shouldClose = true,
    },
})

if ac.addCrumpledPaper then
    exports['qb-core']:AddItem(ac.items.crumpled_paper, {
        name = ac.items.crumpled_paper,
        label = 'Crumpled Paper',
        weight = 1,
        type = 'item',
        image = 'crumpled_paper.png',
        unique = false,
        useable = true,
        shouldClose = true,
    })
end

-- Create usable items
Inventory:CreateUsableItem(ac.items.paper, function(source, item)
    exports.ac_documents:createDocument(source, item.info[metadata.preset])
end)

Inventory:CreateUsableItem(ac.items.document, function(source, item)
    exports.ac_documents:viewDocument(source, item.info[metadata.id])
end)



-- Return bridge
return {
    getPlayer = getPlayer,
    addItem = addItem,
    removeItem = removeItem,
    canSwapItem = canSwapItem,
    getSlot = getSlot,
    metadata = metadata,
}

```
