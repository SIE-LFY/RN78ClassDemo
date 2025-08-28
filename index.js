/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

const defaultErrorHandler = ErrorUtils.getGlobalHandler()
const ErrorHandler = (e, isFatal) => {
    // e: the error throwed
    // isFatal: if the error is fatal and will kill the app
    // define your code here...
    // after all, if you want to forward to default error handler
    // just call the variable we stored in the previous step
    // ErrorUtils.reportFatalError(e)
    // showErrorDialog({
    //   // componentStack: 'Home',
    //   error: e
    // })
    defaultErrorHandler(e, isFatal)
}
ErrorUtils.setGlobalHandler(ErrorHandler)

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.', 'source.uri should not be an empty string', 'Invalid props.style key'];
console.disableYellowBox = true // close all yellow warning

AppRegistry.registerComponent(appName, () => App);

