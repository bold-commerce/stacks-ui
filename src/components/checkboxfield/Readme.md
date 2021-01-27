## Purpose
Used to indicate a boolean choice: yes/no, true/false, on/off, etc.

This component is the decorated checkbox input which includes a label and some helpful text. If you're looking for a stand-alone checkbox, use the [Checkbox](/#/Forms?id=checkbox) component instead.

## Examples
### Basic use
```jsx
initialState = {
  checked: false
};
<CheckboxField
  checked={state.checked}
  onChange={ e => setState({ checked: !state.checked })}
  label="Do you want our newsletter?"
  helpText="It's entertaining, we promise."
/>
```

### Disabled
```jsx
initialState = {
  checked: false
};
<CheckboxField
  disabled
  checked={state.checked}
  onChange={ e => setState({ checked: !state.checked })}
  label="Do you want our newsletter?"
  helpText="You can't use this one... it's disabled"
/>
```
