## Purpose
Used to allow users to pick one from many choices (usually 3–5).

This component is the stand-alone radio button input. If you're looking to have a label or helpText attached to the radio button, you're better-off using the [RadioField](/#/Forms?id=radiofield) component instead.

## Examples
### Basic use
```jsx
initialState = {
  choice: "1"
};
const handleChange = (e) => {
  setState({ choice: e.currentTarget.value });
};

<React.Fragment>
  <div>
    <Radio
      name="radio-group"
      value="1"
      checked={state.choice === "1"}
      onChange={ handleChange }
    />
  <em className="bv-text--muted"> A normal radio button</em>
  </div>
  <div>
    <Radio
      name="radio-group"
      value="2"
      checked={state.choice === "2"}
      onChange={ handleChange }
    />
    <em className="bv-text--muted"> Another normal radio button</em>
  </div>
</React.Fragment>
```

### Disabled
```jsx
initialState = {
  choice: ""
};
const handleChange = (e) => {
  setState({ choice: e.currentTarget.value });
};

<React.Fragment>
  <Radio
    disabled
    name="radio-group"
    value="1"
    checked={state.choice === "1"}
    onChange={ handleChange }
  />
  <em className="bv-text--muted"> A disabled radio button</em>
</React.Fragment>
```
