---
title: Bridge
sidebar_position: 3
---

# Bridge
Bridge module gives you access to functions controlling player's inventory.  
Thanks to this, ac_documents is compatible with any inventory that supports item metadata.

## Pre-made bridges
- [OX Inventory](https://github.com/overextended/ox_inventory)

:::tip
You can create your own inventory bridge by following [**this**](bridge/server) guide.  
If you need help, you can ask on our [Discord](https://discord.gg/2ZezMw2xvR) in support ticket.
:::

## Can you provide more pre-made bridges?
Yes, we can. But there are some requirements that the inventory must meet:
- Secured without any known exploits
- Full metadata support
- Free **OR** well documented (if paid)

<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Inventory</th>
      <th>Secured</th>
      <th>Metadata</th>
      <th>Free / Docs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OX Inventory</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>QB Inventory *</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>ESX Inventory</td>
      <td>Somehow</td>
      <td>❌</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>QS Inventory **</td>
      <td>Unknown</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

\* This also aplies to LJ Inventory or other reskins.  
It is very exploitable. Metadata support is poorly written with lot of bugs.

\*\* We don't know how secured is it as we've never used / worked with it.  
However, it is a paid inventory and we don't have access to it.

:::note Don't forget
Even though we don't provide a pre-made bridge for it, you can still make your own!  
This is our opinion only. You can use any inventory (with metadata) you want.
:::
