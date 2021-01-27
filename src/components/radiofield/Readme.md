## Purpose
Used to allow users to pick one from many choices (usually 3–5).

This component is the decorated radio button which includes a label and some helpful text. If you're looking for a stand-alone radio button, use the [Radio](/#/Forms?id=radio) component instead.

## Examples
### Basic use
```jsx
initialState = {
  choice: ""
};
const handleChange = (e) => {
  setState({ choice: e.currentTarget.value });
};

<React.Fragment>
  <RadioField
    label="Option 1"
    helpText="Pick me"
    name="radio-group"
    value="1"
    checked={state.choice === "1"}
    onChange={ handleChange }
  />
  <RadioField
    label="Option 2"
    helpText="No, pick me"
    name="radio-group"
    value="2"
    checked={state.choice === "2"}
    onChange={ handleChange }
  />
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
  <RadioField
    disabled
    label="Option 1"
    helpText="Pick me"
    name="radio-group"
    value="1"
    checked={state.choice === "1"}
    onChange={ handleChange }
  />
  <RadioField
    disabled
    label="Option 2"
    helpText="No, pick me"
    name="radio-group"
    value="2"
    checked={state.choice === "2"}
    onChange={ handleChange }
  />
</React.Fragment>
```
