import { mutatorAction } from "satcheljs";
import getStore from "./store";
let addTodo = mutatorAction("ADD_TODO", (text: string) => {
  getStore().todos.push(text);
});

export default addTodo;
