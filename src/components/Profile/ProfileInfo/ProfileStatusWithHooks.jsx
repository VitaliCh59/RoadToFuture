import React, {useState} from "react";
import y from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    //создаем массив и присваиваем для первого элемената первое значение (фалс), для второго -это функция, которая может менять это значение.
    let [editMode,setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || "Write you status here"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    );
}
export default ProfileStatusWithHooks;
