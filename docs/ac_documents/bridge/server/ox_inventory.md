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
    local success = Inventory:AddItem(player, item, count, metadata, slot)
    return success
end

local function removeItem(player, item, count, metadata, slot)
    local success = Inventory:RemoveItem(player, item, count, metadata, slot)
    return success
end

local function canSwapItem(player, firstItem, firstItemCount, testItem, testItemCount)
    local success = Inventory:CanSwapItem(player, firstItem, firstItemCount, testItem, testItemCount)
    return success
end

local function getSlot(player, slot)
    local item = Inventory:GetSlot(player, slot)
    return {
        name = item.name,
        metadata = item.metadata,
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
