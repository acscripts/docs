---
title: Exports and events
sidebar_position: 4
---

# Exports and events
All available exports and event are listed below.


## Server exports

### givePaper
Gives paper to a player while respecting bridge and config settings.
```lua
-- preset name from "presets.lua"
local preset = 'MedicalReport'
local count = 1

exports.ac_documents:givePaper(source, preset, count)
```


### createDocument
```lua
-- preset name from item metadata or "presets.lua"
local preset = 'MedicalReport'

-- returns boolean (success)
exports.ac_documents:createDocument(source, preset)
```


### viewDocument
Client side version of this export has been deprecated and doesn't work anymore.  
Use this server side export instead.
```lua
-- document ID from item metadata or database
local documentId = 23

-- returns boolean (success)
exports.ac_documents:viewDocument(source, documentId)
```



## Networked events

### copyDocument
Creates a copy of document on the given slot and gives it to the player.
```lua
-- inventory slot
local slot = 1

TriggerServerEvent('ac_documents:copyDocument', slot)
```


### destroyDocument
Removes a documents on the given slot and gives player a crumpled paper (if enabled in config).
```lua
-- inventory slot
local slot = 1

TriggerServerEvent('ac_documents:destroyDocument', slot)
```
