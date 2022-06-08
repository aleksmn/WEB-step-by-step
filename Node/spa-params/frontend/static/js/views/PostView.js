import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Viewing Post");
  }

  async fetchText() {
    let response = await fetch("/static/texts/" + this.params.id + ".html");
    let data = await response.text();
    // console.log(response);
    // console.log(data);
    return data;
  }

  async getHtml() {
    console.log(this.params.id);
    // this.fetchText();

    let text = await this.fetchText();
    text += "<p><a href='/posts' data-link>Back to posts</a></p>";

    text = "<div class='post'>" + text + "</div>";

    return text;

    // return `
    //   <h1>Viewing Post</h1>

    //   <p>You are viewing recent posts number ${this.params.id}</p>
    //   <p>
    //     <a href="/posts" data-link>Back to posts</a>
    //   </p>
    //   `;
  }
}
