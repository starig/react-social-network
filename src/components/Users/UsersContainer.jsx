import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.count).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                //this.props.setTotalUsersCount(data.totalCount);
                this.props.setTotalUsersCount(30);
            });
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.count).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/>
                : <Users totalUsersCount={30}
                         count={this.props.count}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         usersData={this.props.usersData}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         isFetching={this.props.isFetching}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}
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


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer);