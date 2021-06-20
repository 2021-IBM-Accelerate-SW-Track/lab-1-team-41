import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';

export default function EmptyStatePlaceholder(props){
    return (
        <React.Fragment>
            <Paper id={props.elementId} className="empty-state-placeholder" component="div">
                <WarningRounded className="empty-state-placeholder-icon" fontSize="large"/>
                <Typography className="empty-state-placeholder-message">{props.message}</Typography>
            </Paper>
        </React.Fragment>
    );
}