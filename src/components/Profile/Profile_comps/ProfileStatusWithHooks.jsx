import React, {useEffect, useState} from "react";
import classes from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    let switchEditMode = () => {
        let activateEditMode = () => {
            setEditMode(true);
        }
        let deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status);
        }
        editMode ? deactivateEditMode() : activateEditMode();
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div className={`${classes.user__subtitle}`}>
            {!editMode && props.status
                ? <div>
                    <span onClick={switchEditMode}>{props.status}</span>
                </div>
                : <div>
                    <input onChange={onStatusChange} onBlur={switchEditMode} autoFocus={true} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;