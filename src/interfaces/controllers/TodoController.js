import { FetchTodos } from "../../application/usecases/Todo/fetchTodos.js";

export class TodoController {
  constructor() {}
  static fetch(req, res) {
    const fetchTodos = new FetchTodos();
    const result = fetchTodos.fetchTodos();
    res.json(result);
  }
}
