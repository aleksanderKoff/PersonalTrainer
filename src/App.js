import './App.css';
import Customerlist from './components/Customerlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Trainingslist from './components/Trainingslist';
import TabApp from './components/TabApp';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
              Personal Trainer
            </Typography>
        </Toolbar>
      </AppBar>
      <TabApp/>
    </div>
  );
}

export default App;
