import { AppBar, Toolbar, Typography} from '@material-ui/core';

export default function Header(){
    return (
        <div>
            <AppBar id="navbar">
                <Toolbar style={{justifyContent: 'center'}}>
                    <Typography variant="h6">
                        IBM Accelerate 2021: Group 41 To-Do List
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}