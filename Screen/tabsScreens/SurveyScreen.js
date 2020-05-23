import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SurveyScreenC from './screens/SurveyScreenC';

const stackNav = createStackNavigator({
    Survey: {
        screen: SurveyScreenC
    }
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;