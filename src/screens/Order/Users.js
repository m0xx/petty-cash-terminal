import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import {showScreen, startApp, startOrder} from "../../store/app/actions";
import {selectUsers} from "../../store/app/selectors";
import {selectUser} from "../../store/order/actions";
import Navbar from "../../Components/Navbar";
import UserList from "../../Components/UserList";
import {Screens} from "../../constants";


class OrderUsersScreen extends React.Component {
    render() {
        const {users} = this.props;
        return <div>
            <Navbar title="Choisir utilisateur" onNavigateBack={() => {
                this.props.dispatch(showScreen(Screens.HOME))
            }} />
            <UserList users={users} onSelect={(id) => {
                this.props.dispatch(selectUser(id));
            }} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state)
    }
}

module.exports = connect(mapStateToProps)(OrderUsersScreen);