---
title: Creating presets
sidebar_position: 2
---

# Creating presets
Here you can find interface of the preset table.

:::note
Preset fields are written in TypeScript interface format as it provides much more flexibility and **clarity** than any other format.  
Question mark (`?`) means that the option is optional. You can find more information about TypeScript interfaces [here](https://www.typescriptlang.org/docs/handbook/2/objects.html).
:::

```ts
// preset name
[key: string]: {
  title?: string; // document title
  header?: Header; // document header (explained in #Header)
  inputs: Inputs[]; // array of document input groups (explained in #Inputs)
}
```



## Header
```ts
{
  text?: string; // header text
  image?: string; // header image url
  imageSize?: number; // overrides image size (in pixels) [default: 100]
}
```
<details className='dropdown'>
  <summary>Show image</summary>
  <img src='https://i.imgur.com/RWOuh15.png' alt='Header' />
</details>



## Inputs
```ts
{
  name: string; // header text
  title?: string; // header image url
  fields?: Fields[]; // array of input fields (explained in #Fields)
}
```



## Fields
All field types are listed [here](./presets/fields).
<details className='dropdown'>
  <summary>Show image</summary>
  <img src='https://i.imgur.com/spHDrQ3.png' alt='Inputs' />
</details>
