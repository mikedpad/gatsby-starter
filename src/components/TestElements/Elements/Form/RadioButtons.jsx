import FormElement from './FormElement';

const RadioButtons = () => {
  return (
    <FormElement id="forms__radio" title="Radio Button">
      <ul>
        <li>
          <label htmlFor="radio1">
            <input id="radio1" name="radio" type="radio" defaultChecked /> Option 1
          </label>
        </li>
        <li>
          <label htmlFor="radio2">
            <input id="radio2" name="radio" type="radio" /> Option 2
          </label>
        </li>
        <li>
          <label htmlFor="radio3">
            <input id="radio3" name="radio" type="radio" /> Option 3
          </label>
        </li>
      </ul>
    </FormElement>
  );
};

export default RadioButtons;
