import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

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
        <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route path="/dialogs" render={() => <DialogsContainer/>}/>
              <Route path="/users" render={() => <UsersContainer/>}/>
              <Route path="/news" render={() => <News/>}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/settings" render={() => <Settings/>}/>
              <Route path="/login" render={() => <LoginPage/>}/>
              {/* <Route path="/friends" render={() => <Friends state={props.state.sitebar}/>} /> */}
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

// не стал применять withRouter  и compose 
export default   connect(mapStateToProps, {initializeApp})(App);