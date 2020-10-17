import React from "react";
import styles from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/img1.jpg'

class Users extends React.Component{

    //TODO: можно убрать кучу номеров страниц. ссылка:"https://jsfiddle.net/v2y50nsL/" и коммент в 55 уроке

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count =${this.props.pageSize}`)
            .then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsersCount(responce.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count =${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
            });
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                        onClick={ (e) => {this.onPageChanged(p)}}>{p}</span>
                    })}

                </div>
                {
                    this.props.users.map(user => <div key={user.id}>

                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
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
    }

export default Users;