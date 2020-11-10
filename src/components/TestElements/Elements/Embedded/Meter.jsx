import TestElement from '../TestElement';

const Meter = () => {
  return (
    <TestElement id="embedded__meter" title="Meter">
      <meter value="2" min="0" max="10">
        2 out of 10
      </meter>
    </TestElement>
  );
};

export default Meter;
