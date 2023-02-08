
export const getCars=()=>{
 return(
    {
        type:'GET_ALL_CARS'
    }
 )
}

export const getCarsSuccess=(allCars)=>{
    return{
        type:'GET_ALL_CARS_SUCCESS',
        payload:allCars
    }
}
export const getCarsUnSuccess=(error)=>{
    return{
        type:'GET_ALL_CARS_UNSUCCESS',
        payload:error
    }
}

export const getAllCarsUnsuccess=(errorMessage)=>{
    return{
        type:'GET_ALL_CARS_UNSUCCESS',
        payload:errorMessage
    }
}

export const addCar=(carData,userToken)=>{
    return({type:'ADD_CAR',payload:{car:carData,token:userToken}})
}

export const addCarSuccess=(createdCar)=>{
    return({type:'ADD_CAR_SUCCESS',payload:createdCar})
}

export const addCarUnSuccess=(error)=>{
    return({type:'ADD_CAR_UNSUCCESS',payload:error})
}

export const deleteCar=(carId,userId,token)=>{
    return({type:'DELETE_CAR',payload:{carId,userId,token}})
}

export const deleteCarSuccess=()=>{
    return({type:'DELETE_CAR_SUCCESS'})
}
export const deleteCarUnSuccess=(error)=>{
    return({type:'DELETE_CAR_UNSUCCESS',payload:error})
}

export const changeCar=(newCarData,userId,token)=>{
    return({type:'CHANGE_CAR',payload:{newCarData,userId,token}})
}

export const changeCarSuccess=()=>{
    return({type:'CHANGE_CAR_UCCESS'})
}
export const changeCarUnSuccess=()=>{
    return({type:'CHANGE_CAR_UNUCCESS'})
}