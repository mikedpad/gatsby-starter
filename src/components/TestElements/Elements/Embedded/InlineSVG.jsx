import TestElement from '../TestElement';

const InlineSVG = () => {
  return (
    <TestElement id="embedded__svg" title="Inline SVG">
      <svg width="100px" height="100px">
        <circle cx="100" cy="100" r="100" fill="#1fa3ec" />
      </svg>
    </TestElement>
  );
};

export default InlineSVG;
