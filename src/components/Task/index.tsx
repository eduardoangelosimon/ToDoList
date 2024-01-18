import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Svg from 'react-native-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../styles/colors';
Icon.loadFont();
export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClickCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <View style={styles(isChecked).container}>
      <Text style={styles(isChecked).label}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Text>
      <TouchableOpacity>
        <Icon name="add" size={20} color={COLORS.danger} />
      </TouchableOpacity>
    </View>
  );
}
