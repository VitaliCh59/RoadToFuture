import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)  {
            userId = 12053;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(responce => {
                this.props.setUserProfile(responce.data);

    })
    }

    render() {
        return (
           <Profile {...this.props} profile ={this.props.profile} />
           );
    };
}

// Когда ф-ия возвращает объект -ставим круглые скобки, иначе мы получим тело стрелочной ф-ии
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// виз роутер отрисовывает новую компоненту как коннект, но добавляет данные из урла+стора


export default  connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
// коннект через запросы получает данные(коллбэки) из стора. Он отрисовывает новую компоненту  данными из стора
