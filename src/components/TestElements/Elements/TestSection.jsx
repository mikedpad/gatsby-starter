import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const Title = styled.h1`
  background-color: ${colors.bg.light};
  color: #fff;
  font-size: 3rem;
  padding: 1rem 2rem;
`;

const TestSection = ({ id, title, children }) => (
  <section id={id}>
    <header>
      <Title>{title}</Title>
    </header>
    {children}
  </section>
);

export default TestSection;

TestSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
