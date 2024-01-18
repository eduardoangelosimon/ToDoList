import {TextInput} from 'react-native';
import {styles} from './styles';
import COLORS from '../../styles/colors';
import {useState} from 'react';

export function Input() {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <>
      <TextInput
        style={styles(inputFocused).container}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={COLORS.gray[300]}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
    </>
  );
}
