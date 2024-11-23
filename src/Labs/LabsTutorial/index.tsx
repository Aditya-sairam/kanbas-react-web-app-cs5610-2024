import ChildCompo from "./ChildCompo";
import HighlightCompo from "./HighlightCompo";
import ParameterAdd from "./ParameterAdd";

export default function LabTutorial(){
    return(
    <div>
        <ParameterAdd a={2} b={3}  />
        <ChildCompo>16</ChildCompo>
        <HighlightCompo>This text is highlighted!</HighlightCompo>
    </div>
    )
}