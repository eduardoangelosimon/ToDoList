import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../../components/Input';
import {styles} from './styles';

export function Header() {
  return (
    <>
      <View style={styles.superiorContainer}>
        <Image source={require('../../../assets/logo.png')} />

        <View style={styles.inputContainer}>
          <Input />
          <TouchableOpacity>
            <View style={styles.addButton}>
              <Image
                style={styles.addButtonIcon}
                source={require('../../../assets/plus.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inferiorContainer}>
        <View style={styles.numbersRow}>
          <View style={styles.row}>
            <Text style={styles.blueText}>Criadas</Text>
            <Text style={styles.number}>1</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.purpleText}>Concluídas</Text>
            <Text style={styles.number}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.line}>
        <Text> </Text>
      </View>
    </>
  );
}
