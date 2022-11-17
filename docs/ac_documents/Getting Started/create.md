---
title: Creating documents
sidebar_position: 1
---

# Creating documents

Here you can find detailed description of each field option.

:::note
Field options are written in TypeScript interface format as it provides much more flexibility and **clarity** than any other format.  
Question mark (`?`) means that the option is optional. You can find more information about TypeScript interfaces [here](https://www.typescriptlang.org/docs/handbook/2/objects.html).
:::

## Shared options
The following options are available and same for all field types.
Type specific options are supposed to be added among these.
```ts
[name: string]: {
  label: string; // input label
  placeholder?: string; // describes expected value
  required?: boolean; // whether the field is required
  span?: 1 | 2; // how many columns the field should take
}
```

#### Example (Lua)
This is how the options are written in your standard Lua table.
```lua
['firstName'] = {
  type = 'text',
  label = 'First name',
  placeholder = 'Enter your first name',
  required = true,
  span = 1,
}
```



## Text
```ts
{
  type: 'text';
  value?: string; // default value
  min?: number; // minimal number of characters
  max?: number; // maximum number of characters [default: 50]
}
```
For unlimited number of characters, set `max` to `-1` - although it's not recommended.



## Textarea
```ts
{
  type: 'textarea';
  value?: string; // default value
  minRows?: number; // minimal number of rows
  maxRows?: number; // maximum number of rows
  autosize?: boolean; // if true, textarea will grow with content until maxRows are reached
  min?: number; // minimal number of characters
  max?: number; // maximum number of characters [default: 100]
}
```
For unlimited number of characters, set `max` to `-1` - although it's not recommended.



## Number
```ts
{
  type: 'number';
  value?: number; // default value
  min?: number; // minimal possible value
  max?: number; // maximum possible value
  step?: number; // number by which value will be incremented/decremented
  precision?: number; // amount of digits after the decimal point
  separator?: string; // decimal separator (only visual, will return standard float)
  hideControls?: boolean; // hides increment/decrement controls
}
```



## Date
```ts
{
  type: 'date';
  value?: string; // default value (only MM.DD.YYYY or MM/DD/YYYY format)
  format?: string; // https://day.js.org/docs/en/display/format
  clearable?: boolean; // whether the user can clear the date value
}
```



## Signature
```ts
{
  type: 'signature';
  value?: string; // default value
}
```



## Select
```ts
{
  type: 'select';
  value?: string; // default value (must be one of the options value)
  searchable?: boolean; // whether the user can search in options
  clearable?: boolean; // whether the user can clear the selected value
  data: string[] | SelectItem[]; // available options (explained below)
}
```

Available options (`data`) can be either a simple array of strings
```ts
data: ['Bob', 'John', 'George']
```

or an array of objects with the following structure
```ts
{
  value: string; // value that will be returned as an user input
  label?: string; // label that will be displayed in the select dropdown
  disabled?: boolean; // whether the option is disabled
  group?: string; // group name 
}
```
```ts
data: [
  { value: 'bob', label: 'Bob', group: 'Friends' },
  { value: 'john', label: 'John', group: 'Friends', disabled: true },
  { value: 'george', label: 'George', group: 'Strangers' },
  { value: 'paul', label: 'Paul', group: 'Strangers' },
]
```
