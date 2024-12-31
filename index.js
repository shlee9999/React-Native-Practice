import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'fast-text-encoding';
import 'react-native-url-polyfill/auto';

AppRegistry.registerComponent(appName, () => App);
