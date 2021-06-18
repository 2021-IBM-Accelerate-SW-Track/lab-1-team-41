import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export default function Header(){
    return (
        <div>
            <AppBar position='relative' style={{ marginBottom: '1rem'}}>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <Typography variant="h6" style={{justifySelf: 'flex-start'}}>
                        2021 IBM Accelerate Software Track: Group 41 To-Do List Application Test
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}