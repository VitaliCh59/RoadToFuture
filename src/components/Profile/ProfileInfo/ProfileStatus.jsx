import React from "react";
import y from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
       this.setState({
           editMode: true
       })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState,snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
        <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}> {this.props.status || "Write you status here"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
            }
        </div>
    );
};
}
export default ProfileStatus;
