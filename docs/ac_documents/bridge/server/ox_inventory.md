---
title: ox_inventory
sidebar_position: 1
---

# OX Inventory
Replace **all** content in `editable/bridge/server.lua` with the following code:

```lua
local Inventory = exports.ox_inventory

local function getPlayer(playerId)
    return playerId
end

local function addItem(player, item, count, metadata, slot)
    return Inventory:AddItem(player, item, count, metadata, slot)
end

local function removeItem(player, item, count, metadata, slot)
    return Inventory:RemoveItem(player, item, count, metadata, slot)
end

local function canSwapItem(player, firstItem, firstItemCount, testItem, testItemCount)
    return Inventory:CanSwapItem(player, firstItem, firstItemCount, testItem, testItemCount)
end

local function getSlot(player, slot)
    local item = Inventory:GetSlot(player, slot)
    return {
        name = item?.name,
        metadata = item?.metadata,
    }
end

local metadata = {
    preset = 'type',
    id = 'id',
    title = 'description',
}

return {
    getPlayer = getPlayer,
    addItem = addItem,
    removeItem = removeItem,
    canSwapItem = canSwapItem,
    getSlot = getSlot,
    metadata = metadata,
}
```

## Creating items
Add the following code to `ox_inventory/data/items.lua`.

```lua
['paper'] = {
    label = 'Paper',
    weight = 1,
    close = true,
    consume = 0,
    server = {
        export = 'ac_documents.createDocument:ox',
    }
},

['crumpled_paper'] = {
    label = 'Crumpled paper',
    weight = 1,
},

['document'] = {
    label = 'Document',
    weight = 1,
    close = true,
    consume = 0,
    client = {
        export = 'ac_documents.viewDocument:ox',
    },
    buttons = {
        {
            label = 'Make a copy',
            action = function(slot)
                TriggerServerEvent('ac_documents:copyDocument', slot)
            end,
        },
        {
            label = 'Destroy',
            action = function(slot)
                TriggerServerEvent('ac_documents:destroyDocument', slot)
            end,
        }
    }
},
```
