import {Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp, mapStateToProps} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app__wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);


