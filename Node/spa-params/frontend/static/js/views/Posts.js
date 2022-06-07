import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <h1>Posts</h1>

      <p>You are viewing recent posts</p>
      <p>
        <a href="/dashboard" data-link>View the dashboard!</a>
      </p>
      `;
  }
}
