import React from 'react';
import FormElement from './FormElement';

const SelectMenu = () => {
  return (
    <FormElement id="forms__select" title="Select Menu">
      <p>
        <label htmlFor="select">
          Select
          <select id="select">
            <optgroup label="Option Group">
              <option>Option One</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </optgroup>
          </select>
        </label>
      </p>
    </FormElement>
  );
};

export default SelectMenu;
