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

      <ul>
        <li><a href="/posts/1" data-link>First Post</a></li>
        <li><a href="/posts/2" data-link>Second Post</a></li>
        <li><a href="/posts/2022-05-06" data-link>Third Post</a></li>
      </ul>


      <p>
        <a href="/" data-link>View the dashboard!</a>
      </p>
      `;
  }
}
