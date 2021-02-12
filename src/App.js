import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
            <div className="app__wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                </div>
            </div>
    );
}

export default App;

