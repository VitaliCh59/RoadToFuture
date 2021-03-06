import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/user-selectors";

class UsersContainer extends React.Component{

    //TODO: можно убрать кучу номеров страниц. ссылка:"https://jsfiddle.net/v2y50nsL/" и коммент в 55 уроке

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
       /* this.props.setToggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber);
        this.props.setCurrentPage(pageNumber);
        /*this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setToggleIsFetching(false);
            });*/
    }

    render(){

        return <>
            {this.props.isFetching ? <Preloader/> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}
        />
</>
    }
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*

let withRedirect = withAuthRedirect(UsersContainer)

/!*!// передает дочерние презентац компоненте через пропсы коллбэки, которые она может вызывать
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC (totalCount))
        },
        setToggleIsFetching: (isFetching) => {
            dispatch(setToggleIsFetchingAC (isFetching));
        }
    }
}*!/


//сократили запись вызова в 58 уроке
export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}) (withRedirect);
*/

// обернули в ф-ю компоус в 70ур.
export default compose (
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers}),
   // withAuthRedirect
)(UsersContainer)