/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API",
  //todo: inspect/remove
  'RCTBridge required dispatch',
]);

AppRegistry.registerComponent(appName, () => App);
