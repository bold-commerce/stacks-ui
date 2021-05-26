## Purpose
Display a prominent message banner to users for instructions or feedback.

## Examples
### Basic use
```jsx
<Message title="Hi I'm a message">
  <p>Here's the message content</p>
</Message>
```

### Dismissible
#### Default dismissType
```jsx
import Button from '../button/Button';

const [showMessage, setShowMessage] = React.useState(true);

showMessage ?
  <Message
    dismissible
    title="Hi, I'm a message"
    onDismiss={ e => setShowMessage(false)}
  >
    <p>Here's the message content</p>
  </Message>
:
  <Button onClick={ e => setShowMessage(true)}>Show Message</Button>
;
```

#### Icon dismissType
```jsx
import Button from '../button/Button';

const [showMessage, setShowMessage] = React.useState(true);

showMessage ?
  <Message
    dismissible
    dismissType = 'icon'
    title="Hi, I'm a message"
    onDismiss={ e => setShowMessage(false)}
  >
    <p>Here's the message content</p>
  </Message>
:
  <Button onClick={ e => setShowMessage(true)}>Show Message</Button>
;
```

### Alert message
```jsx
<Message title="Hi I'm an alert message" type="alert">
  <p>Here's the message content</p>
</Message>
```

### Warning message
```jsx
<Message title="Hi I'm a warning message" type="warning">
  <p>Here's the message content</p>
</Message>
```

### Info message
```jsx
<Message title="Hi I'm an info message" type="info">
  <p>Here's the message content</p>
</Message>
```

### Success message
```jsx
<Message title="Hi I'm a success message" type="success">
  <p>Here's the message content</p>
</Message>
```
