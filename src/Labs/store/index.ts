import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import practicalCounterReducer from "../PracticeLab/ReduxExamples/CountRedux/pracCountReducer";
import pracAddReducer from "../PracticeLab/ReduxExamples/AddRedux/pracAddReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/todos/todosReducer";
const store = configureStore({
  reducer: { helloReducer,
        counterReducer,
        addReducer,
        todosReducer,
        practicalCounterReducer,
        pracAddReducer,

  },
});
export default store;