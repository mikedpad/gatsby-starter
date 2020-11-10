import FormElement from './FormElement';

const Checkboxes = () => {
  return (
    <FormElement id="forms__checkbox" title="Checkboxes">
      <ul>
        <li>
          <label htmlFor="checkbox1">
            <input id="checkbox1" name="checkbox" type="checkbox" defaultChecked /> Choice A
          </label>
        </li>
        <li>
          <label htmlFor="checkbox2">
            <input id="checkbox2" name="checkbox" type="checkbox" /> Choice B
          </label>
        </li>
        <li>
          <label htmlFor="checkbox3">
            <input id="checkbox3" name="checkbox" type="checkbox" /> Choice C
          </label>
        </li>
      </ul>
    </FormElement>
  );
};

export default Checkboxes;
