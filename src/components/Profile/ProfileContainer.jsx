import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }
// нужен чтоб при нажатии на профиль (если мы находимся на чужом профиле) появлялся свой профиль
    componentDidUpdate(prevProps, prevState, snapshot) {
       if (this.props.match.params.userId !== prevProps.match.params.userId ) {
           this.refreshProfile()
       }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner = {!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}/>
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
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, savePhoto, updateStatus, saveProfile}),
    withRouter
    //withAuthRedirect
)(ProfileContainer);