## Purpose
Used to decorate form controls with a label, helpText, and messages (such as errors).

This component doesn't do much on it's own but is used to transform the basic form controls (like [Input](/#/Forms?id=input)) into decorated fields (like [InputField](/#/Forms?id=inputfield)).

You can also use this component to create your own custom fields or combo fields

## Examples
```jsx static

<Field
  label={props.label}
  helpText={props.helpText}
  className="custom-field"
>

  <div className="custom-field__element-wrapper">
    <Input className="custom-field__element1" placeholder="Custom" />
    <Input className="custom-field__element2" placeholder="field" />
  </div>

</Field>

```
