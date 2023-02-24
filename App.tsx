import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import Root from './src/screens/Root/Root';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './src/redux/Store/store';
import { Provider as PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <StoreProvider store={store}>{/* redux provider */}
      <PaperProvider>{/* react native paper provider */}
        <Root />
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
