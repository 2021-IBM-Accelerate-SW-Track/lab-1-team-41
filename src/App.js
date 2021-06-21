import Header from "./component/header"
import Body from "./component/body/body.js"
import './App.css';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
