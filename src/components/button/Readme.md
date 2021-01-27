## Purpose
The `Button` component is meant to allow users to take actions or perform functions in the application. In some cases the action is to go somewhere, so the `Button` is capable of working like a link.

## Examples
### Button styles
```jsx
<React.Fragment>
  <Button>Normal Button</Button>
  <Button primary>Primary Button</Button>
  <Button secondary>Secondary Button</Button>
</React.Fragment>
```

### Button as a link
```jsx
<Button href="/#/Actions">Button as link</Button>
```

### Disabled button
```jsx
<Button disabled>Disabled Button</Button>
```

### Sizes
```jsx
<Button size="small">Small Button</Button>
<Button size="large">Large Button</Button>
```

### Loading
```jsx
<Button loading>Loading...</Button>
```

### Block
```jsx
<Button block>Block Button</Button>
```
