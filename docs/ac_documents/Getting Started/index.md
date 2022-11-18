---
title: Getting started
sidebar_position: 1
slug: ./../
---

# Getting started

## Dependencies
- [OX Inventory (ox_inventory)](https://github.com/overextended/ox_inventory/releases/latest)
- [OX Library (ox_lib)](https://github.com/overextended/ox_lib/releases/latest)
- [OX MySQL (oxmysql)](https://github.com/overextended/oxmysql/releases/latest)



## Creating items
You can change the item names in `ac_documents/data/config.lua`.  
The following snippets are just recommended examples. You can change it however you want.

### Paper
```lua
['paper'] = {
    label = 'Paper',
    weight = 1,
    close = true,
    consume = 0,
    client = {
        export = 'ac_documents.createDocument',
    }
},
```
![Paper](https://i.imgur.com/SUE4W0Q.png)

### Document
```lua
['document'] = {
    label = 'Document',
    weight = 1,
    close = true,
    consume = 0,
    client = {
        export = 'ac_documents.viewDocument',
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
![Document](https://i.imgur.com/GcAGquG.png)

### Crumpled paper 
```lua
['crumpled_paper'] = {
    label = 'Crumpled paper',
    weight = 1,
},
```
![Crumpled paper](https://i.imgur.com/LbKlqh1.png)



## Obtaining paper
The preset is defined in the paper's `type` metadata.

### Shops
You can use ox_inventory's shops to *sell* paper with predefined preset.
```lua
-- ox_inventory/data/shops.lua
PoliceDocuments = {
    name = 'Police Documents',
    groups = shared.police,
    inventory = {
        { name = 'paper', price = 1, metadata = { type = 'MedicalReport' } },
        { name = 'paper', price = 1, metadata = { type = 'ArrestWarrant' } },
        { name = 'paper', price = 1, metadata = { type = 'CriminalRecord' } },
    }, locations = {
        vec3(443.59, -975.3, 30.68)
    }
},
```


### Custom
You can make your own system to get papers by adding the item to player's inventory.
```lua
local presetName = 'MedicalReport'
local count = 1

-- recommended (calls ox_inventory:AddItem internally)
exports.ac_documents:givePaper(source, presetName, count)

-- optional (same result)
exports.ox_inventory:AddItem(source, 'paper', count, presetName)
```
