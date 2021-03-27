import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.count);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                : <Users totalUsersCount={60}
                         count={this.props.count}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         usersData={this.props.usersData}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}/>}

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    }),
)(UsersContainer);