import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/img1.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(user => <div key={user.id}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                className={styles.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                userAPI.followUsers(user).then(data => {
                                            if (data.resultCode == 0) {

                                            props.unfollow(user.id);
                                        }});


                            }}> Unfollow </button>
                            : <button onClick={() => {

                                    userAPI.followUsers(user).then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(user.id);
                                            }});
                            }}> Follow </button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;