import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import AppInner from './AppInner';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}

export default App;
