import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {startApp, startOrder} from "../../store/app/actions";
import {selectUsers} from "../../store/app/selectors";
import {selectUser} from "../../store/order/actions";


class OrderUsersScreen extends React.Component {
    componentWillMount() {
        // this.props.dispatch(startApp());
    }
    render() {
        return <div>
            <h1>Users</h1>
            {this.props.users.map(({id, email}) => {
                return <div key={id} onClick={() => {
                    this.props.dispatch(selectUser(id))
                }}>{ email }</div>
            })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state)
    }
}

module.exports = connect(mapStateToProps)(OrderUsersScreen);