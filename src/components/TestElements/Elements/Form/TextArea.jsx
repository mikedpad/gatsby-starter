import React from 'react';
import FormElement from './FormElement';

const TextArea = () => {
  return (
    <FormElement id="forms__textarea" title="TextArea">
      <p>
        <label htmlFor="textarea">
          Textarea
          <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here" />
        </label>
      </p>
    </FormElement>
  );
};

export default TextArea;
