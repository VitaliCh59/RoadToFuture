import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import loadable from '@loadable/component'
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = loadable(() => import(`./components/Dialogs/DialogsContainer`));
const ProfileContainer = loadable(() => import(`./components/Profile/ProfileContainer`));

/*route следит за урлом в браузере, и при совпадении вызывыет render*/
class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        // будем показывать всё, только когда прогрузится initialize  в апп редьюсер
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
                    <Route path="/dialogs" render={() =><DialogsContainer/>} />
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    {/* <Route path="/friends" render={() => <Friends state={props.state.sitebar}/>} /> */}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
// не стал применять withRouter  и compose
let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;