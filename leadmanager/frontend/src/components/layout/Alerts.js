import React, { Component, Fragment } from 'react'
import { withAlert } from "react-alert";
import {connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired

    }

    // componentDidMount(){
    //     this.props.alert.show('It works!');
    // }
    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
            // alert.error('There is an error');
            if(error.msg.name)
                alert.error(`Name: ${error.msg.name.join()}`); 
                //error가 array형태이므로 이걸 str으로 바꾸기 위해 join 사용
            if(error.msg.email)
                alert.error(`Email: ${error.msg.email.join()}`);
            if(error.msg.message)
                alert.error(`Message: ${error.msg.message.join()}`);
            if(error.msg.non_field_errors)
                alert.error(error.msg.non_field_errors.join());
            if(error.msg.username)
                alert.error(error.msg.username.join()); 
        }

        if(message !== prevProps.message){
            if(message.deleteLead)
                alert.success(message.deleteLead);
            if(message.addLead)
                alert.success(message.addLead);
            if(message.passwordNotMatch)
                alert.error(message.passwordNotMatch);
        }
    }

    render() {
        return <Fragment />; // 알림창으로 띄울 거기 때문에 ui render 안함
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});


export default connect(mapStateToProps)(withAlert()(Alerts));
