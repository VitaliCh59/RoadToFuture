import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/img1.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            ? <button disabled={props.followingInProgress.some(id=>id ===user.id)} onClick={() => {

                                props.toggleFollowingProgress(true, user.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "82fdcb69-fcd9-4679-b7df-51762d66e4a3"}
                                })
                                        .then(responce => {
                                            if (responce.data.resultCode == 0) {
                                            props.unfollow(user.id);
                                        }
                                            props.toggleFollowingProgress(false, user.id);
                                        });


                            }}> Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id=>id ===user.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, user.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "82fdcb69-fcd9-4679-b7df-51762d66e4a3"}
                                    })
                                        .then(responce => {
                                            if (responce.data.resultCode == 0) {
                                                props.follow(user.id);
                                            }
                                            props.toggleFollowingProgress(false, user.id);
                                        });
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