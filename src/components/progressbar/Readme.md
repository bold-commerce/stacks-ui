## Purpose
Display progress for a process to show how much of the process is complete vs remaining.

## Examples
### Basic use
```jsx
<ProgressBar percentCompleted={45} />
```

### Using prefix and suffix
```jsx
<ProgressBar percentCompleted={45} prefix="Loading..." suffix="45% complete" />
```

#### Using different sizes
```jsx
<React.Fragment>
  <ProgressBar percentCompleted={25} size="small" suffix="Small" />
  <ProgressBar percentCompleted={25} suffix="Default" />
  <ProgressBar percentCompleted={25} size="large" suffix="Large" />
</React.Fragment>
```
