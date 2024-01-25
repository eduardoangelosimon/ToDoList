import React from 'react';

import {Home} from './src/screens/Home';
import {StatusBar, View} from 'react-native';
import COLORS from './src/styles/colors';

import TaskProvider from './src/contexts/task';

function App(): React.JSX.Element {
  return (
    <TaskProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.gray[600],
        }}>
        <StatusBar
          backgroundColor="transparent"
          barStyle={'light-content'}
          translucent
        />
        <Home />
      </View>
    </TaskProvider>
  );
}

export default App;
