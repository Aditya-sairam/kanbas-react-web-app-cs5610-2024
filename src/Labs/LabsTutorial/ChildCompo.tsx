import { ReactNode } from "react";

export default function ChildCompo({children}:{children:ReactNode}){
    const num = Number(children)
    return(
        <div>
            {num*num};
        </div>
    )

}