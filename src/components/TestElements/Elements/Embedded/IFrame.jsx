import TestElement from '../TestElement';

const IFrame = () => {
  return (
    <TestElement id="embedded__iframe" title="IFrames">
      <iframe src="/" height="300" title="Index" />
    </TestElement>
  );
};

export default IFrame;
