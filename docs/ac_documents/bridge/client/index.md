---
title: Client
sidebar_position: 1
---

# Client bridge
The `bridge/client.lua` file must contain a function called `notify`.  
This function is used to display notifications to the player.

## Data table
The function receives a table with the following structure:
```ts
{
  title: string; // main text
  description?: string; // additional text
  duration: number; // duration in milliseconds
  type: 'error' | 'success'
}
```

## Pre-made bridges

### Default
```lua
function notify(data)
    BeginTextCommandThefeedPost('STRING')
    AddTextComponentSubstringPlayerName(data.title or data.description)
    ThefeedSetNextPostBackgroundColor(130)
    EndTextCommandThefeedPostTicker(false, true)
end
```

### ox_lib
```lua
function notify(data)
    exports.ox_lib:notify(data)
end
```

### qb-core
```lua
function notify(data)
    TriggerEvent('QBCore:Notify', data.title, data.type, data.duration)
end
```

### esx_notify
```lua
function notify(data)
    exports.esx_notify:Notify(data.type, data.duration, data.title)
end
```

### okokNotify
```lua
function notify(data)
    exports.okokNotify:Alert(data.title, data.description or '', data.duration, data.type)
end
```
