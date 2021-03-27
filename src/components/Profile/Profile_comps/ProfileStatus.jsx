import classes from "./ProfileStatus.module.css";
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    switchEditMode = () => {
        let activateEditMode = () => {
            this.setState({
                editMode: true,
                status: this.props.status,
            });
        }
        let deactivateEditMode = () => {
            this.setState({
                editMode: false,
            });
            this.props.updateStatus(this.state.status);
        }
        this.state.editMode ? deactivateEditMode() : activateEditMode();
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div className={`${classes.user__subtitle}`}>
                {!this.state.editMode && this.props.status
                    ? <div>
                        <span onClick={this.switchEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.switchEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;