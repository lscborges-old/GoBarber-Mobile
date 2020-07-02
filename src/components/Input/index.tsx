import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface Inputprops extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<Inputprops> = ({ name, icon, ...rest }) => (
  <Container>
    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;
