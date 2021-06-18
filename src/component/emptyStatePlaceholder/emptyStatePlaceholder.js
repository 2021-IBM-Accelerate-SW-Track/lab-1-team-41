import React from 'react';
import { Paper, Typography } from '@material-ui/core';

export default function EmptyStatePlaceholder(props){
    return (
        <React.Fragment>
            <Paper id={props.elementId} className="empty-state-placeholder" component="div">
                <Typography className="empty-state-placeholder-message">{props.message}</Typography>
            </Paper>
        </React.Fragment>
    );
}