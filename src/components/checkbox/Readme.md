## Purpose
Used to indicate a boolean choice: yes/no, true/false, on/off, etc.

This component is the stand-alone checkbox input. If you're looking to have a label or helpText attached to the checkbox, you're better-off using the [CheckboxField](/#/Forms?id=checkboxfield) component instead.

## Examples
### Basic example
```jsx
initialState = {
  checked: false
};
<Checkbox
  checked={state.checked}
  onChange={ e => setState({ checked: !state.checked })}
/>
```

### Disabled
```jsx
initialState = {
  checked: false
};
<Checkbox
  disabled
  checked={state.checked}
  onChange={ e => setState({ checked: !state.checked })}
/>
```
