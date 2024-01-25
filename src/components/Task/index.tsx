import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../styles/colors';
Icon.loadFont();

type TaskType = {
  title: string;
  isChecked: boolean;
};

export function Task({title, isChecked}: TaskType) {
  return (
    <View style={styles(isChecked).container}>
      <Text style={styles(isChecked).label}>{title}</Text>
      <TouchableOpacity>
        <Icon name="add" size={20} color={COLORS.danger} />
      </TouchableOpacity>
    </View>
  );
}
