import Form from './form';
import {AppBar,Typography} from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar position = "static">
        <Typography variant="h2" bgcolor="purple"> Customer Feedback</Typography>
      </AppBar>
      <Form/>
    </div>
  );
}
export default App;
