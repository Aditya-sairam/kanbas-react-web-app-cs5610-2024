import Add from "./Add";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FoorLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturns from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLitreals from "./TemplateLitreals";
import TodoList from "./todo/TodoList";
import VariableANdConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from "./Highlight";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";

export default function Lab3() {
    console.log("Hello froom lab 3!")
    return (
        <div>
            <h2>Lab 3</h2>
            <VariableANdConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturns />
            <TemplateLitreals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <FoorLoops />
            <MapFunction />
            <FindFunction />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} />
            <Square>4</Square>
            <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <PathParameters />

        </div>
    )
}