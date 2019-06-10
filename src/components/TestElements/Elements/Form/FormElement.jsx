import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TestElement from '../TestElement';

const Fieldset = styled.fieldset`
  border: 1px solid $textColor;
`;

const Legend = styled.legend`
  padding: 0.5rem;
`;

const FormElement = ({ id, title, children }) => (
  <TestElement id={id} title={title}>
    <form>
      <Fieldset>
        <Legend>{title}</Legend>
        {children}
      </Fieldset>
    </form>
  </TestElement>
);

export default FormElement;

FormElement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
