---
title: Installation
sidebar_position: 2
---

# Installation
Here you can find guides on how to make your usable items work.

:::caution
If you are using [ox_inventory](https://github.com/overextended/ox_inventory) with ESX or QB Core, follow the [OX Inventory guide](#ox-inventory) only.
:::



## OX Inventory
Creating a new item in ox_inventory is really easy.  
Add the following snippet to `ox_inventory/data/items.lua`. The item image is already there by default.
```lua
['radio'] = {
	label = 'Radio',
	weight = 100,
	stack = true,
	close = true,
	client = {
		export = 'ac_radio.openRadio',
		remove = function(total)
			-- Disconnets a player from the radio when all his radio items are removed.
			if total < 1 and GetConvar('radio_noRadioDisconnect', 'true') == 'true' then
				exports.ac_radio:leaveRadio()
			end
		end
	}
},
```
For more detailed steps, visit the official ["Creating items"](https://overextended.dev/ox_inventory/Guides/creatingItems) guide.



## ESX
Create a new item in your database. You can run the following SQL command.  
Usable item will be created automatically after starting this resource.
```sql
INSERT INTO `items` (`name`, `label`, `weight`, `rare`, `can_remove`) VALUES ('radio', 'Radio', 1, 0, 1);
```
Add an image to your inventory which you can find [here](/assets/radio.png).



## QB Core
The radio item will be created automatically after starting this resource.  
Add an image to your inventory which you can find [here](/assets/radio.png).