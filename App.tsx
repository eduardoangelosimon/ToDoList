import React from 'react';

import {Home} from './src/screens/Home';
import {StatusBar, View} from 'react-native';
import COLORS from './src/styles/colors';

function App(): React.JSX.Element {
  return (
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
  );
}

export default App;
