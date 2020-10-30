import React from "react";
import y from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile /*props.profile == null || props.profile  Звучит, как если у нас нет профайла*/) {
        return <Preloader />
    }
  return (
    <div>
      <div>
        <img src={process.env.PUBLIC_URL + "/ducati.jpeg"} alt="ducati" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_6UP6TWFDTFZvLjcy6Rq8xnN130gpslTjww&usqp=CAU"></img>
      </div>
      <div className={y.descriptionBlock}>
          <img src = {props.profile.photos.small}/>

        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
