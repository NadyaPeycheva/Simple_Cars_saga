
const registerAction=(userData)=>{
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
export const registerUnSuccess=()=>{
    return({type:"ERROR",payload:'This user can be already exists. Pleas try with another data.'})
}