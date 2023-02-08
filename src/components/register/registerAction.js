
const registerAction=(userData)=>{
    console.log('action');
    return(
        {
            type:"REGISTER_USER",
            payload:userData
        }
    )
}
export default registerAction;

export const registerSuccess=()=>{
    return({type:"REGISTER_USER_SUCCESS"})
}
export const registerUnSuccess=(error)=>{
    return({type:"REGISTER_USER_UNSUCCESS",payload:error})
}