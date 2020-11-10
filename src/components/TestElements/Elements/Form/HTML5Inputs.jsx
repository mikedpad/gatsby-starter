import FormElement from './FormElement';

const HTML5Inputs = () => {
  return (
    <FormElement id="forms__html5" title="HTML5 Inputs">
      <p>
        <label htmlFor="ic">
          Color input
          <input type="color" id="ic" defaultValue="#ff0000" />
        </label>
      </p>
      <p>
        <label htmlFor="in">
          Number input
          <input type="number" id="in" min="0" max="10" defaultValue="5" />
        </label>
      </p>
      <p>
        <label htmlFor="ir">
          Range input
          <input type="range" id="ir" defaultValue="10" />
        </label>
      </p>
      <p>
        <label htmlFor="idd">
          Date input
          <input type="date" id="idd" defaultValue="1970-01-01" />
        </label>
      </p>
      <p>
        <label htmlFor="idm">
          Month input
          <input type="month" id="idm" defaultValue="1970-01" />
        </label>
      </p>
      <p>
        <label htmlFor="idw">
          Week input
          <input type="week" id="idw" defaultValue="1970-W01" />
        </label>
      </p>
      <p>
        <label htmlFor="idt">
          Datetime input
          <input type="datetime" id="idt" defaultValue="1970-01-01T00:00:00Z" />
        </label>
      </p>
      <p>
        <label htmlFor="idtl">
          Datetime-local input
          <input type="datetime-local" id="idtl" defaultValue="1970-01-01T00:00" />
        </label>
      </p>
    </FormElement>
  );
};

export default HTML5Inputs;
