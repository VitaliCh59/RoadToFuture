import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/img1.jpg";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, ...props}) => {
    if (!profile /*props.profile == null || props.profile  Звучит, как если у нас нет профайла*/) {
        return <Preloader/>
    }
    //хватаемся за файл, который вставим в импут с помощью онЧендж
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img src={process.env.PUBLIC_URL + "/ducati.jpeg"} alt="ducati"/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;

// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_6UP6TWFDTFZvLjcy6Rq8xnN130gpslTjww&usqp=CAU"></img>