export class FetchTodos {
  constructor() {}

  fetchTodos() {
    try {
      throw new Error("例外発生");
      return { statusCode: 200, data: "success" };
    } catch (e) {
      return { statusCode: 500, data: e.message };
    }
  }
}
