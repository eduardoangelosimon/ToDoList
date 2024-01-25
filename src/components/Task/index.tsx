import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import COLORS from '../../styles/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type TaskType = {
  title: string;
  isChecked: boolean;
};

export function Task({title, isChecked}: TaskType) {
  return (
    <View style={styles(isChecked).container}>
      <BouncyCheckbox
        // onPress={handleClickCheckbox}
        fillColor={isChecked ? COLORS.darkPurple : COLORS.blue}
        innerIconStyle={{borderWidth: 2.5}}
      />
      <Text style={styles(isChecked).label}>{title}</Text>
      <TouchableOpacity>
        <Image
          style={styles(isChecked).trashButton}
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
