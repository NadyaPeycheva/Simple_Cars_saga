
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
export const loginUserUnSuccess=(error)=>{
    return(
        {type:"LOGIN_USER_UNSUCCESS",payload:error}
    )
}