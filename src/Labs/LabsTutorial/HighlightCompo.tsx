import { ReactNode } from "react";


export default function HighlightCompo({children}:{children:ReactNode}){
    return(
        <span style={{backgroundColor:"yellow",color:"red"}}>
                {children}
        </span>

    )
}