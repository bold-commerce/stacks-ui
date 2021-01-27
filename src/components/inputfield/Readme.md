## Purpose
Basic text input component for single line text input.

This component is the decorated text input which includes a label and some helpful text. If you're looking for a stand-alone text input, use the [Input](/#/Forms?id=input) component instead.

## Examples
### Basic Use
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="Placeholder text"
/>
```

### Prefix and Suffix
Using the prefix and suffix props, you can add other, non-editable placeholder text into the field to help prompt users for proper input.
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="your-subdomain-here"
  prefix="https://"
  suffix=".mydomain.com"
/>
```

### Alert Status
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="Placeholder text"
  messageType="alert"
  messageText="There's an issue"
/>
```

### Warning Status
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="Placeholder text"
  messageType="warning"
  messageText="Woah... slow down"
/>
```

### Success Status
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="Placeholder text"
  messageType="success"
  messageText="Good job!"
/>
```

### Disabled
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="Placeholder text"
  disabled={true}
/>
```

### Read Only
```jsx
<InputField
  label="Field label"
  helpText="Helpful text hint"
  type="text"
  placeholder="Placeholder text"
  value="Read only"
  readOnly={true}
/>
```