---
title: Configuration
sidebar_position: 3
---

# Configuration

Here you can find detailed description of each config option.  

## locale
What supported language to use for notifications and UI.  
Locale name is the same as the file name in [locales](https://github.com/antond15/ac_radio/tree/main/locales) folder without the `.lua` extension (eg. **en**, **cs**).  

**Accepted values**  
`'en'` = Or any other locale.



## versionCheck
Whether to check for newer resource version and notify in server console.

**Accepted values**  
`true` = You will be notified in server console when a newer version of **ac_documents** is available.  
`false` = You will need to manually check for a newer version on [Keymaster](https://keymaster.fivem.net/asset-grants) 👎🏽



## items
Names of items you created in `ox_inventory/data/items.lua`.  
If you used the snippets in [Creating items](./#creating-items) section, you don't have to change anything.

**Accepted values**  
```lua
{
    paper = 'paper', -- item name for paper
    document = 'document', -- item name for document
    crumpled_paper = 'crumpled_paper', -- item name for crumpled paper
}
```
