import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
// перенесли в пагинатор для отдельной отрисовки кучи страниц
    /*  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
          pages.push(i);
      }
  */
    return <div>
        {/* <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>*/}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
         <div>
        {
            users.map(user => <User user={user}
                                    followingInProgress={props.followingInProgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                                    key={user.id}
            />)
            /* <div>

                 <span>
                     <div>
                         <NavLink to={'/profile/' + user.id}>
                             <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={styles.usersPhoto}/>
                         </NavLink>
                     </div>
                     <div>
                         {user.followed
                             ? <button disabled={props.followingInProgress.some(id=>id ===user.id)}
                                       onClick={() => {props.unfollow(user.id);
                                 /!*userAPI.unfollow(user.id)
                                /!* axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                     withCredentials: true,
                                     headers: {
                                         "API-KEY": "82fdcb69-fcd9-4679-b7df-51762d66e4a3"}
                                 })*!/
                                         .then(responce => {
                                             if (responce.data.resultCode == 0) {
                                             props.unfollow(user.id);
                                         }
                                             props.toggleFollowingProgress(false, user.id);
                                         });*!/


                             }}> Unfollow </button>
                             : <button disabled={props.followingInProgress.some(id=>id ===user.id)}
                                       onClick={() => {props.follow(user.id);
                                    /!* userAPI.follow(user.id)
                                    /!* axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                         withCredentials: true,
                                         headers: {
                                             "API-KEY": "82fdcb69-fcd9-4679-b7df-51762d66e4a3"}
                                     })*!/
                                         .then(responce => {
                                             if (responce.data.resultCode == 0) {
                                                 props.follow(user.id);
                                             }
                                             props.toggleFollowingProgress(false, user.id);
                                         });*!/
                             }}> Follow </button>}
                     </div>
                 </span>*/

        }
         </div>
    </div>
}

export default Users;