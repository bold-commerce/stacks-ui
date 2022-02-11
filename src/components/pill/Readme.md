### Purpose
Give the user a brief (1 - 2 word) status message that can sit inline with other text or elements.

### Examples
#### Standard
```jsx
<React.Fragment>
  <Pill label="Alert" status="alert" />
  <Pill label="Warning" status="warning" />
  <Pill label="Success" status="success" />
  <Pill label="Info" status="info" />
  <Pill label="Default" />
</React.Fragment>
```
#### Filled
```jsx
<React.Fragment>
  <Pill filled label="Alert" status="alert" />
  <Pill filled label="Warning" status="warning" />
  <Pill filled label="Success" status="success" />
  <Pill filled label="Info" status="info" />
  <Pill filled label="Default" />
</React.Fragment>
```

#### Dismissibles
##### Default dismissType
```jsx
<React.Fragment>
  <Pill
    dismissible
    dismissText='dismiss'
    onDismiss={ e => myFunction() }
    label="Info"
    status="info" 
  />

  <Pill filled dismissible label="Default" />
</React.Fragment>
```

##### Icon dismissType
```jsx
<React.Fragment>
  <Pill
    dismissible
    dismissText='dismiss'
    dismissType='icon'
    onDismiss={ e => myFunction() }
    label="Warning"
    status="warning" 
  />

  <Pill filled dismissible label="Default" />
</React.Fragment>
```

#### Pills as status for something
These 5 status types can carry different meanings. If Pill is being used to show status, several different labels can be used with the same status type. For example, `warning` can refer to "In Progress" and "Incomplete" at the same time; basically anything that is proceeding with caution.

`success` should be reserved for status that is both complete and positive, and `alert` should be reserve for status that is both complete and negative.
