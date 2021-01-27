## Purpose
Used to allow users to pick one from many choices.

This component is the decorated options selection which includes a label and some helpful text. If you're looking for a stand-alone options selection, use the [Select](/#/Forms?id=select) component instead.

## Examples
### Using `<option>` children
```jsx
initialState = {
  selection: ''
};

<SelectField
  label="Choose an option"
  helpText="They're basically the same thing"
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
  <option value="Option 4">Option 4</option>
</SelectField>
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

<SelectField
  label="Choose an option"
  helpText="They're basically the same thing"
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

<SelectField
  label="Choose an option"
  helpText="They're basically the same thing"
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
  messageType="alert"
  messageText="There was an error"
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

<SelectField
  label="Choose an option"
  helpText="They're basically the same thing"
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
  messageType="warning"
  messageText="Hold on a second..."
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

<SelectField
  label="Choose an option"
  helpText="They're basically the same thing"
  placeholder="Select something"
  value={ state.selection }
  onChange={ e => setState({ selection: e.currentTarget.value })}
  options={options}
  messageType="success"
  messageText="You did it!"
/>
```
