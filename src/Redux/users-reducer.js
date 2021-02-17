const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    usersData: [
        {
            id: 1,
            name: 'Ivan Starkov',
            status: 'Hello world!',
            location: {city: 'Saint-Petersburg', country: 'Russia'},
            avatar: 'https://sun9-29.userapi.com/impg/1t7Rn5JZBywfXiXV5ErJwxZMrq8SJvPNsEfBTw/BcfMZx1jV9o.jpg?size=1080x1080&quality=96&proxy=1&sign=af86d3b8be3d796411fbc39899ead623&type=album',
            followed: true,
        },
        {
            id: 2,
            name: 'Andrey Ten',
            status: 'King Kong!',
            location: {city: 'Saint-Petersburg', country: 'Russia'},
            avatar: 'https://sun9-58.userapi.com/impg/dyU8px7NgSx9JwKXf7b6lHFvBW8NA45KhakD4Q/vqJTY4I08A0.jpg?size=637x839&quality=96&proxy=1&sign=98a3b5b5ab2af2435555637c13d411b2&type=album',
            followed: true,
        },
        {
            id: 3,
            name: 'Sofia Protasova',
            status: 'Doctor!',
            location: {city: 'Khabarovsk', country: 'Russia'},
            avatar: 'https://sun9-37.userapi.com/impg/To82glkn4N-kvUn-1I4Rbmq8NaZnXqHFOX1Wlg/glE5PZ9ishI.jpg?size=900x900&quality=96&proxy=1&sign=4e1eb3cf42a0377feec07cfcf3a79a05&type=album',
            followed: false,
        },
        {
            id: 3,
            name: 'Alexander Maraktaev',
            status: 'Doctor!',
            location: {city: 'Khabarovsk', country: 'Russia'},
            avatar: 'https://sun9-15.userapi.com/impg/xLRVxu5UIAbjCzYvSddpux12mt0RrxcSt22iSw/ueKE_olFwyI.jpg?size=607x607&quality=96&proxy=1&sign=fac2b7ce254b635fba2a54fdb1f7036c&type=album',
            followed: false,
        },
    ],
}

const usersReducer = (state = initialState, action) => {



    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),

            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return{
                ...state,
                usersData: [...state.usersData, ...action.users],
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;