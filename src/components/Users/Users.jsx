import React from "react";
import styles from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/img1.jpg'

let Users = (props) => {

    if (props.users.length === 0 ) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users' ).then(responce => {
        props.setUsers(responce.data.items);
        });

        /*props.setUsers([
                {
                    id: 1,
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'},
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGNKHFV3euovevbggudA4UNA3uV5w0uu85Zg&usqp=CAU'
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Vitaly',
                    status: 'I am a junior',
                    location: {city: 'Perm', country: 'Russia'},
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-oIdp6teN33B-XLFq-eR7XTNu9Zxe6Tvcrg&usqp=CAU'
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Evgen',
                    status: 'I am a java boss',
                    location: {city: 'SPB', country: 'Russia'},
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2MCg0O0m8O0kP_3Cfz4TAB-0B-uC86GcjNw&usqp=CAU'
                },
            ]
        )*/
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={ () => {props.unfollow(user.id)}} > Unfollow </button>
                            : <button onClick={ () => {props.follow(user.id)}}> Follow </button> }
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