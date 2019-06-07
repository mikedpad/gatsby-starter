import React from 'react';
import BackToTop from './BackToTop';

const FormElements = () => {
  return (
    <section id="forms">
      <header>
        <h1>Form elements</h1>
      </header>
      <form>
        <fieldset id="forms__input">
          <legend>Input fields</legend>
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
        </fieldset>
        <BackToTop />
        <fieldset id="forms__select">
          <legend>Select menus</legend>
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
        </fieldset>
        <BackToTop />
        <fieldset id="forms__checkbox">
          <legend>Checkboxes</legend>
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
        </fieldset>
        <BackToTop />
        <fieldset id="forms__radio">
          <legend>Radio buttons</legend>
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
        </fieldset>
        <BackToTop />
        <fieldset id="forms__textareas">
          <legend>Textareas</legend>
          <p>
            <label htmlFor="textarea">
              Textarea
              <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here" />
            </label>
          </p>
        </fieldset>
        <BackToTop />
        <fieldset id="forms__html5">
          <legend>HTML5 inputs</legend>
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
        </fieldset>
        <BackToTop />
        <fieldset id="forms__action">
          <legend>Action buttons</legend>
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
        </fieldset>
        <BackToTop />
      </form>
    </section>
  );
};

export default FormElements;
