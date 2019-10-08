export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export const SET_FLDPATH = 'SET_FLDPATH';

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => { // set old to new
    return {
        type: SET_USERS,
        users
    }
}

export const setFldPath = (profile) => { // set old to new
    return {
        type: SET_FLDPATH,
        profile
    }
}
