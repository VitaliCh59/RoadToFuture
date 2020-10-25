import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component{

    //TODO: можно убрать кучу номеров страниц. ссылка:"https://jsfiddle.net/v2y50nsL/" и коммент в 55 уроке

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setToggleIsFetching(false);
            });
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
        />
</>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*// передает дочерние презентац компоненте через пропсы коллбэки, которые она может вызывать
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
}*/


//сократили запись вызова в 58 уроке
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching}) (UsersContainer);