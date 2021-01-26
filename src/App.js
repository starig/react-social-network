import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = (props) => {




    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path='/profile' render={ () => <Profile postsData={props.postsData}/> }/>
                    <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

