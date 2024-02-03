import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import COLORS from '../../styles/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export type TaskType = {
  id: number;
  title: string;
  isChecked: boolean;
};

import {TaskContext} from '../../contexts/task';

export function Task({title, isChecked}: TaskType) {
  const [isCompleted, setIsCompleted] = useState(isChecked);

  function handleClickCheckbox() {
    setIsCompleted(!isCompleted);
  }

  return (
    <View style={styles(isChecked).container}>
      <BouncyCheckbox
        onPress={handleClickCheckbox}
        fillColor={isCompleted ? COLORS.darkPurple : COLORS.blue}
        innerIconStyle={{borderWidth: 2.5}}
        isChecked={isCompleted}
      />
      <Text style={styles(isCompleted).label}>{title}</Text>
      <TouchableOpacity>
        <Image
          style={styles(isCompleted).trashButton}
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
