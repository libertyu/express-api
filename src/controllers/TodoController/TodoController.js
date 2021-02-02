export class TodoController {
  constructor() {}
  static index(req, res) {
    res.json({
      message: "Todoだー",
    });
  }
}
