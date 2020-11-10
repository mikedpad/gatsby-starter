import FormElement from './FormElement';

const ActionButtons = () => {
  return (
    <FormElement id="forms__action" title="Action Buttons">
      <p>
        <input type="submit" value="<input type=submit>" />
        <input type="button" value="<input type=button>" />
        <input type="reset" value="<input type=reset>" />
        <input type="submit" value="<input disabled>" disabled />
      </p>
      <p>
        <button type="submit">&lt;button type=submit&gt;</button>
        <button type="button">&lt;button type=button&gt;</button>
        <button type="reset">&lt;button type=reset&gt;</button>
        <button type="button" disabled>
          &lt;button disabled&gt;
        </button>
      </p>
    </FormElement>
  );
};

export default ActionButtons;
