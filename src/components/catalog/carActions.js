
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
        type:'ERROR',
        payload:'The request is not success'
    }
}


export const addCar=(carData,userToken)=>{
    return({type:'ADD_CAR',payload:{car:carData,token:userToken}})
}

export const addCarSuccess=(createdCar)=>{
    return({type:'ADD_CAR_SUCCESS',payload:createdCar})
}

export const addCarUnSuccess=()=>{
    return({type:'ERROR',payload:'The new car is added unsuccessful'})
}

export const deleteCar=(carId,userId,token)=>{
    return({type:'DELETE_CAR',payload:{carId,userId,token}})
}

export const deleteCarSuccess=()=>{
    return({type:'DELETE_CAR_SUCCESS'})
}
export const deleteCarUnSuccess=()=>{
    return({type:'ERROR',payload:'The car can not be deleted. Pleas try again.'})
}

export const changeCar=(newCarData,userId,token)=>{
    return({type:'CHANGE_CAR',payload:{newCarData,userId,token}})
}

export const changeCarSuccess=()=>{
    return({type:'CHANGE_CAR_UCCESS'})
}
export const changeCarUnSuccess=()=>{
    return({type:'ERROR',payload:'The curent car can not be changed. Pleas try again.'})
}