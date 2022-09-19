export default class Random404 extends HTMLElement {
	static tagName = 'random-404';

	static messages = [
		`This page is missing.`,
		`There’s nothing here.`,
		`This link is broken.`,
	];

	connectedCallback() {
		this.textContent =
			Random404.messages[Math.floor(Math.random() * Random404.messages.length)];
	}
}

customElements.define(Random404.tagName, Random404);
