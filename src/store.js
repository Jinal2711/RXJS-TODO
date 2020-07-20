import { Subject } from "rxjs";

const subject = new Subject()

const initialState = {
  data: ["learn rxjs", "learn react integration with rxjs"]
}

let state = initialState //

const todoStore = {
  init: () => subject.next(state), // 
  subscribe: setState => subject.subscribe(setState), //
  addTodo: todo => {
    state = {
      ...state,
      data: [...state.data, todo]
    }
    subject.next(state)
  },
  deleteTodo: index => {
    const data= [...state.data]
    data.splice(0,index);
    state = {
      ...state,
      data
    }
    subject.next(state)
  },
  editItem: (index, text) => {
    const data= [...state.data]
    data[index] = text;
    state = {
      ...state,
      data
    }
    subject.next(state)
  },
  initialState: initialState
} 
export default todoStore