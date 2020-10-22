import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

/*route следит за урлом в браузере, и при совпадении вызывыет render*/
const App = () => {
  return (
   <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
          <Route path="/dialogs" render={() => <DialogsContainer/>} />
          <Route path="/users" render={() => <UsersContainer/>}/>
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          {/* <Route path="/friends" render={() => <Friends state={props.state.sitebar}/>} /> */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
