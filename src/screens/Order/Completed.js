import React from 'react';
import { connect } from 'react-redux';

import {
    isOrderSuccess
} from "../../store/order/selectors";
import Typography from "@material-ui/core/Typography/Typography";


class CompletedScreen extends React.Component {
    render() {
        return <div>
            {
                this.props.success
                    ? <Typography color="primary">Succès!</Typography>
                    : <Typography color="error">Oups!</Typography>
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        success: isOrderSuccess(state),
    }
}

module.exports = connect(mapStateToProps)(CompletedScreen);