import React from 'react';
import FormElement from './FormElement';

const InputFields = () => {
  return (
    <FormElement id="forms__input" title="Input Fields">
      <p>
        <label htmlFor="input__text">
          Text Input
          <input id="input__text" type="text" placeholder="Text Input" />
        </label>
      </p>
      <p>
        <label htmlFor="input__password">
          Password
          <input id="input__password" type="password" placeholder="Type your Password" />
        </label>
      </p>
      <p>
        <label htmlFor="input__webaddress">
          Web Address
          <input id="input__webaddress" type="url" placeholder="https://yoursite.com" />
        </label>
      </p>
      <p>
        <label htmlFor="input__emailaddress">
          Email Address
          <input id="input__emailaddress" type="email" placeholder="name@email.com" />
        </label>
      </p>
      <p>
        <label htmlFor="input__phone">
          Phone Number
          <input id="input__phone" type="tel" placeholder="(999) 999-9999" />
        </label>
      </p>
      <p>
        <label htmlFor="input__search">
          Search
          <input id="input__search" type="search" placeholder="Enter Search Term" />
        </label>
      </p>
      <p>
        <label htmlFor="input__text2">
          Number Input
          <input id="input__text2" type="number" placeholder="Enter a Number" />
        </label>
      </p>
      <p>
        <label htmlFor="input__text3">
          Error
          <input id="input__text3" type="text" placeholder="Text Input" />
        </label>
      </p>
      <p>
        <label htmlFor="input__text4">
          Valid
          <input id="input__text4" type="text" placeholder="Text Input" />
        </label>
      </p>
    </FormElement>
  );
};

export default InputFields;
