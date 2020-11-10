import styled from 'styled-components';
import TestElement from '../TestElement';

const PreCode = styled.pre`
  overflow-x: scroll;
`;

const Code = () => {
  return (
    <TestElement id="text__code" title="Code">
      <p>
        <strong>Keyboard input:</strong> <kbd>Cmd</kbd>
      </p>
      <p>
        <strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code>
      </p>
      <p>
        <strong>Sample output:</strong>
        {` `}
        <samp>This is sample output from a computer program.</samp>
      </p>
      <h2>Pre-formatted text</h2>
      <PreCode>
        {`
P R E F O R M A T T E D T E X T ! ' # $ % & ' ( ) * + ${` `} , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ [ \\ ] ^ _ \`
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~
                `}
      </PreCode>
    </TestElement>
  );
};

export default Code;
