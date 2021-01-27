## Purpose
Used to allow users to pick one from many choices.

This component is the stand-alone options selection. If you're looking to have a label or helpText attached to the options selection, you're better-off using the [SelectField](/#/Forms?id=selectfield) component instead.

## Examples
### Using `<option>` children
```jsx
initialState = {
  selection: ''
};

<Select
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
  <option value="Option 4">Option 4</option>
</Select>
```

### Using `options` prop

```jsx
initialState = {
  selection: ''
};

const options = [
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 },
  { name: 'Option 4', value: 4 }
];

<Select
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
/>
```

### Alert status
```jsx
initialState = {
  selection: ''
};

const options = [
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 },
  { name: 'Option 4', value: 4 }
];

<Select
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
  messageType="alert"
/>
```

### Warning status
```jsx
initialState = {
  selection: ''
};

const options = [
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 },
  { name: 'Option 4', value: 4 }
];

<Select
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
  messageType="warning"
/>
```

### Success status
```jsx
initialState = {
  selection: ''
};

const options = [
  { name: 'Option 1', value: 1 },
  { name: 'Option 2', value: 2 },
  { name: 'Option 3', value: 3 },
  { name: 'Option 4', value: 4 }
];

<Select
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
  messageType="success"
/>
```
