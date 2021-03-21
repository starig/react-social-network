import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
            <div className="app__wrapper">
                <HeaderContainer />
                <Nav/>
                <div className="content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/users' render={() => <UsersContainer />} />
                </div>
            </div>
    );
}

export default App;

