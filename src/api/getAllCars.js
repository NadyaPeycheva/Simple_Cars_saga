
export const getAllCarsAPI=async ()=>{
   const request=await fetch("http://161.35.202.170:8080/cars/all");
   const response=await request.json();
   return response;
}