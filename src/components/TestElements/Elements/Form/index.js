import React from 'react';
import TestSection from '../TestSection';
import InputFields from './InputFields';
import SelectMenu from './SelectMenu';
import Checkboxes from './Checkboxes';
import RadioButtons from './RadioButtons';
import TextArea from './TextArea';
import HTML5Inputs from './HTML5Inputs';
import ActionButtons from './ActionButtons';

const Embedded = () => {
  return (
    <TestSection id="forms" title="Form Elements">
      <InputFields />
      <SelectMenu />
      <Checkboxes />
      <RadioButtons />
      <TextArea />
      <HTML5Inputs />
      <ActionButtons />
    </TestSection>
  );
};

export default Embedded;
