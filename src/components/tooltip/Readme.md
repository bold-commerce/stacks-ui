### Purpose
Give the user a tooltip that appears beneath an element being hovered over.

### Examples
#### Standard
```jsx
<React.Fragment>
  <Tooltip message="Count of created orders in the last 30 days.">
    <h3>30 Orders</h3>
  </Tooltip>
</React.Fragment>
```

#### With custom props
```jsx
<React.Fragment>
  <Tooltip
    message="Count of created orders in the last 30 days."
    className={'example__tooltip__order-count'}
  >
    <h3>30 Orders</h3>
  </Tooltip>
</React.Fragment>
```