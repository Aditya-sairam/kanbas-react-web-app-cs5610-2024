
import PassingFunctions from "./PassingFunctions";
import PassingDataOnEvent from "./PassingDataOnEvent";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariables from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";
import AddRedux from "./ReduxExamples/AddRedux";
import PathParameters from "./PathParameters";
import Objects from "./Objects";
import TodoArray from "./TodoArray";
import TodoAsync from "./TodoAsync";



export default function PracticeLab() {
    function sayHello(){
        alert("Say Hello!")
    }
    return(
        <div>
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <ObjectStateVariables />
            <ArrayStateVariables />
            <ReduxExamples />
            <AddRedux />
            <PathParameters />
            <Objects />
            <TodoArray />
            <TodoAsync />
        </div>
    )
}