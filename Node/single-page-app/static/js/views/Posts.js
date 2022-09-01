import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Мой блог");
  }

  async getHtml() {
    return `
      <h1>Мой блог</h1>

      <p>Свежие публикации</p>

      <p>
        <a href="/" data-link>Перейти на главную страницу</a>
      </p>
      `;
  }
}
