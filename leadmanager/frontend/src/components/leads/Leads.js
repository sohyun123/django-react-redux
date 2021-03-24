import React, { Component, Fragment, ReactFragment } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads, deleteLead} from '../../actions/leads';

export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired

    };

    componentDidMount(){
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                {/* <h1>Leads List</h1> */}
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thread>
                        <tr>
                            {/* th : table heading */}
                            <th>ID</th> 
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th /> 
                        </tr>
                    </thread>
                    <tbody>
                        { this.props.leads.map(lead => (
                            <tr key ={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteLead.bind(this, lead.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

// mapState는 reducers/leads.js에 정의된 state를 의미
const mapStateToProps = (state) => ({
    leads: state.leads.leads,
  });
  
  export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
