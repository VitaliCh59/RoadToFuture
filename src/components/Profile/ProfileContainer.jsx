import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)  {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push ('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
           <Profile {...this.props}
                    profile ={this.props.profile}
                    status = {this.props.status}
                    updateStatus = {this.props.updateStatus} />
           );
    };
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
/*

//  с помощью HOC создаем новую контейнерную комп. для выноса редиректа из компоненты
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// виз роутер отрисовывает новую компоненту как коннект, но добавляет данные из урла+стора


export default  connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
// коннект через запросы получает данные(коллбэки) из стора. Он отрисовывает новую компоненту  данными из стора
*/


// всё, что выше обернём в функцию компоус
export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    //withAuthRedirect
)(ProfileContainer);