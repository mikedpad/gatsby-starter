import TestElement from '../TestElement';

const Video = () => {
  return (
    <TestElement id="embedded__video" title="Video">
      <video controls="">
        <track kind="captions" />
        video
      </video>
    </TestElement>
  );
};

export default Video;
