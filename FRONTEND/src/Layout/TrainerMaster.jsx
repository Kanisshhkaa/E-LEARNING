import { Navigate, Outlet } from "react-router-dom";
import Trainerheader from "./TrainerHeader";
import Trainerfooter from "./TrainerFooter";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function TrainerMaster(){
    const token = sessionStorage.getItem("trainerId")
    const[showRedirect,setShowRedirect]=useState(false)
    useEffect(()=>{
     if(!token){
        toast.error("Please Login First")
    
    const timer = setTimeout(()=>{
        setShowRedirect(true);
    },500)
    return ()=> clearTimeout(timer)
}
},[token])

if(!token && showRedirect){
    return <Navigate to={'/login'} />
}
if(!token) return null;
    return(
        <>
        <Trainerheader/>
        <Outlet/>
        <Trainerfooter/>
        </>
    )
}