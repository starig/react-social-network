import classes from "./ProfileStatus.module.css";
import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,

    }

    switchEditMode = () => {
        let activateEditMode = () => {
            this.setState({
                editMode: true,
            });
        }
        let deactivateEditMode = () => {
            this.setState({
                editMode: false,
            });
        }
        this.state.editMode ? deactivateEditMode() : activateEditMode();
    }

    render() {
        return (
            //<div className={`${classes.user__subtitle}`}>{props.status}</div>
            <div className={`${classes.user__subtitle}`}>
                {!this.state.editMode
                    ? <div>
                        <span onClick={this.switchEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.switchEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;