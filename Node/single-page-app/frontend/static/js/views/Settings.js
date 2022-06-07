import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <h1>Settings</h1>

      <p>This is settings page</p>
      <p>
        <a href="/dashboard" data-link>View the dashboard!</a>
      </p>
      `;
  }
}
