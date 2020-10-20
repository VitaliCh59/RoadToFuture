import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default  connect (mapStateToProps, {setUserProfile}) (ProfileContainer);
