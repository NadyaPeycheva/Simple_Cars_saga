

export const changeCarApi=async(carData,userId,token)=>{
  console.log(carData);
  console.log(token);
    const request = await fetch(`http://161.35.202.170:8080/cars/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(carData),
  });
  return request;

}