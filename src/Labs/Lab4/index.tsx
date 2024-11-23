import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariables from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import CounterReducer from "./ReduxExamples/CounterRedux/counterReducer";
import HelloRedux from "./ReduxExamples/HelloRedux";
import StringStateVariables from "./StringStateVariables";


export default function Lab4(){
    function sayHello(){
        alert("Hello!")
    }
    return(
        <>
    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions theFunction={sayHello} />
    <EventObject />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariables />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentStateComponent />
    <ReduxExamples />
   
    {/* <HelloRedux /> */}
    </>
)
}   