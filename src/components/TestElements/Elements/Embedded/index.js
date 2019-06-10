import React from 'react';
import TestSection from '../TestSection';
import Images from './Images';
import Audio from './Audio';
import Video from './Video';
import Canvas from './Canvas';
import Meter from './Meter';
import Progress from './Progress';
import InlineSVG from './InlineSVG';
import IFrame from './IFrame';

const Embedded = () => {
  return (
    <TestSection id="embedded" title="Embedded Content">
      <Images />
      <Audio />
      <Video />
      <Canvas />
      <Meter />
      <Progress />
      <InlineSVG />
      <IFrame />
    </TestSection>
  );
};

export default Embedded;
