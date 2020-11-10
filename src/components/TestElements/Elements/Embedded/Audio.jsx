import React from 'react';
import TestElement from '../TestElement';

const Audio = () => {
  return (
    <TestElement id="embedded__audio" title="Audio">
      <audio controls="">
        <track kind="captions" />
        audio
      </audio>
    </TestElement>
  );
};

export default Audio;
