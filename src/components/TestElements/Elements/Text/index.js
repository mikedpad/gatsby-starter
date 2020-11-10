import TestSection from '../TestSection';
import Headings from './Headings';
import Paragraphs from './Paragraphs';
import Blockquotes from './Blockquotes';
import Lists from './Lists';
import HorizontalRule from './HorizontalRule';
import Tables from './Tables';
import Code from './Code';
import Inline from './Inline';

const Text = () => {
  return (
    <TestSection id="text" title="Text Elements">
      <Headings />
      <Paragraphs />
      <Blockquotes />
      <Lists />
      <HorizontalRule />
      <Tables />
      <Code />
      <Inline />
    </TestSection>
  );
};

export default Text;
