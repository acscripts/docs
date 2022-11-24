---
title: Server
sidebar_position: 2
---

# Server bridge
The `bridge/server.lua` file must return a table with the following data:
```ts
return {
  getPlayer: function;
  addItem: function;
  removeItem: function;
  canSwapItem: function;
  getSlot: function;
  metadata: Metadata;
}
```



## Pre-made bridges
- [OX Inventory](./server/ox_inventory)

:::tip
You can create your own inventory bridge by following the guide below.  
If you need help, you can ask on our [Discord](https://discord.gg/2ZezMw2xvR) in support ticket.
:::



## Explanation
For better understanding, check the pre-made bridges for reference.

### getPlayer
Gets player object reference to be used in other functions.
```ts
// recieves
playerId: number; // aka "source"

// returns
return player: any; // this is then passed to other functions (later referred to as "Player" type)
```


### addItem
Adds item to player's inventory. Make sure to include metadata.
```ts
// recieves
player: Player; // player reference from getPlayer()
item: string; // item name
count: number; // count to be added
metadata?: table; // item metadata
slot?: number; // slot to add the item to

// returns
return success: boolean; // if the item was added successfully
```


### removeItem
Removes item from player's inventory. Make sure to include metadata.
```ts
// recieves
player: Player; // player reference from getPlayer()
item: string; // item name
count: number; // count to be added
metadata?: table; // remove item with matching metadata 
slot?: number; // slot to remove the item from

// returns
return success: boolean; // if the item was removed successfully
```


### canSwapItem
Checks whether item swap is possible based on the player's inventory limits (weight, slots, etc).  
This is similar to the typical "`canCarryItem`" checks.

`firstItem` is being removed, `testItem` is being added (in terms of test).
```ts
// recieves
player: Player; // player reference from getPlayer()
firstItem: string; // item name
firstItemCount: number;
testItem: string; // item name
testItemCount: number;

// returns
return isPossible: boolean; // if the item swap is possible
```


### getSlot
Gets item information about the item in specified slot.
```ts
// recieves
player: Player; // player reference from getPlayer()
slot: number; // slot to get item information from

// returns
return {
  name: string; // item name
  metadata: table; // item metadata
}: table;
```


### metadata
Table that contains metadata keys for storing the item metadata.
```ts
{
  preset: string; // metadata key used for storing preset name
  id: string; // metadata key used for storing document id
  title: string; // metadata key used for displaying document title
}
```

If `preset` is set to `'type'`, then the preset name will be saved in `metadata.type`.
```lua
metadata.type = 'MedicalReport'
```



## Example for `getPlayer`
```lua
local QB = exports['qb-core']:GetCoreObject()

-- return QbPlayer object
local function getPlayer(playerId)
    return QB.Functions.GetPlayer(playerId)
end

-- recieves QbPlayer object as "player"
local function addItem(player, item, count, metadata, slot)
    return player.Functions.AddItem(item, count, slot, metadata)
end
```
