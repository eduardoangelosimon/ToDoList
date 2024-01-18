import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import COLORS from '../../styles/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClickCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <View style={styles(isChecked).container}>
      <BouncyCheckbox
        onPress={handleClickCheckbox}
        fillColor={isChecked ? COLORS.darkPurple : COLORS.blue}
        innerIconStyle={{borderWidth: 2.5}}
      />
      <Text style={styles(isChecked).label}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </Text>
      <TouchableOpacity>
        <Image
          style={styles(isChecked).trashButton}
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
