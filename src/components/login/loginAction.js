
export const loginAction=(userData)=>{
    return(
        {type:"LOGIN_USER",payload:userData}
    )
}

export const firstUserCheck=(user)=>{
    return{
        type:"FIRST_USER_CHECK",payload:user
    }
}

export const loginUserSuccess=(user)=>{
    return(
        {type:"LOGIN_USER_SUCCESS",payload:user}
    )
}
export const loginUserUnSuccess=()=>{
    return(
        {type:"ERROR",payload:'The user is not login. Please try with valid date !'}
    )
}

export const logoutUser=(userName)=>{
    return{
        type:"LOGOUT_USER",payload:userName
    }
}

export const logout=()=>{
    return{
        type:"LOGOUT"
    }
}