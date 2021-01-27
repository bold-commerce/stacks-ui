## Purpose
Basic text input component for single line text input.

This component is the stand-alone text input. If you're looking to have a label or helpText attached to the input, you're better-off using the [InputField](/#/Forms?id=inputfield) component instead.

## Examples
### Basic Use
```jsx
<Input
  type="text"
  placeholder="Placeholder text"
/>
```

### Prefix and Suffix
Using the prefix and suffix props, you can add other, non-editable placeholder text into the field to help prompt users for proper input.
```jsx
<Input
  type="text"
  placeholder="your-subdomain-here"
  prefix="https://"
  suffix=".mydomain.com"
/>
```

### Alert Status
```jsx
<Input
  type="text"
  placeholder="Placeholder text"
  messageType="alert"
/>
```

### Warning Status
```jsx
<Input
  type="text"
  placeholder="Placeholder text"
  messageType="warning"
/>
```

### Success Status
```jsx
<Input
  type="text"
  placeholder="Placeholder text"
  messageType="success"
/>
```

### Disabled
```jsx
<Input
  type="text"
  placeholder="Placeholder text"
  disabled={true}
/>
```

### Read Only
```jsx
<Input
  type="text"
  placeholder="Placeholder text"
  readOnly={true}
  value="Read only"
/>
```
