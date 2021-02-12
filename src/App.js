import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

