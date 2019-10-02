# Dropdown component

## Props

|      Props      |  Type  | Default value | Required | Description                             |
| :-------------: | :----: | :-----------: | :------: | --------------------------------------- |
|       id        | string |       -       |    ✓     | Id of the dropdown                      |
|      label      | string |      ""       |          | Fieldset label of the dropdown          |
| preferences \*  | array  | ["COLLECTED"] |          | Preferences to manage dropdown response |
|   response \*   | object |      {}       |          | Response concerned by the component     |
|   options \*    | array  |       -       |    ✓     | Options of the dropdown                 |
|  handleChange   |  func  |       -       |    ✓     | Handler of the dropdown                 |
|   placeholder   | string |      ""       |          | Placeholder of the dropdown             |
|    readOnly     |  bool  |     false     |          | Is the dropdown read only               |
|    writable     |  bool  |     false     |          | Is the dropdown writable                |
|    required     |  bool  |     false     |          | Is the dropdown required                |
|  labelPosition  | string |   "DEFAULT"   |          | Position of the dropdown label          |
| declarations \* | array  |      []       |          | Declarations of the dropdown            |
|     tooltip     |  bool  |     false     |          | Tooltip of the dropdown                 |
|      style      | object |      {}       |          | Style of the dropdown                   |

- `preferences` props has to be an ordered array of `COLLECTED`, `FORCED` or `EDITED`
- `response` props has to be a shape of `{name: string, valueState: object}`
- `options` props has to be an array made by objects with a shape of `{label: string, value: string}`
- `declarations` are documented in the `Declarations` component

## Styles

**Dropdown** component has for classes XXX