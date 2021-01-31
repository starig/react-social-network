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
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage}
                                                                   addPost={props.addPost}
                                                                   newPostText={props.state.profilePage.newPostText}
                                                                   updateNewPostText={props.updateNewPostText}
                                                                   /> }/>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}
                                                                   sendMessage={props.sendMessage}
                                                                   newMessage={props.state.dialogsPage.newMessageText}
                                                                   updateNewMessage={props.updateNewMessage}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

