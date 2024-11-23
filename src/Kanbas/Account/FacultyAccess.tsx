import { useSelector, UseSelector } from "react-redux";
import { Navigate } from "react-router";

export default function FacultyAccess({children}:{children:any}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if(currentUser.role === "FACULTY"){
        return children;
    }
    else{
        return
    }
}