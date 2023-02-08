
export const loginApi=async(userData)=>{
    const request=await fetch("http://161.35.202.170:8080/users/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    })
    const response=await request.json();
    return response;
}