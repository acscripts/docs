---
title: Getting started
sidebar_position: 1
slug: ./../
---

# Getting started
Make sure to read this carefully before using the script.

## Dependencies
- [OX MySQL (oxmysql)](https://github.com/overextended/oxmysql/releases/latest)
- your inventory system \*

\* Support for custom inventories can be done by editing the inventory [bridge](./).  
The default inventory bridge is for [ox_inventory](https://github.com/overextended/ox_inventory).  
All available inventory bridges provided by us are listed [here](./), however you can create your own.



## Database
Before using the resource, you need to import the `documents.sql` file into your database.  



## Creating items
Make sure to create items called `paper`, `document` and `crumpled_paper` in your inventory.  
You can change the used item names in `ac_documents/editable/config.lua`.  
You can use the following images or make your own.

![Paper](https://i.imgur.com/SUE4W0Q.png)
![Document](https://i.imgur.com/GcAGquG.png)
![Crumpled paper](https://i.imgur.com/LbKlqh1.png)



## Obtaining paper
We provide snippets for some inventories or shops, however you can also create your own.  
If you want to make your own system to get papers, use the following export.
```lua
local preset = 'MedicalReport'
local count = 1

exports.ac_documents:givePaper(source, preset, count)
```
