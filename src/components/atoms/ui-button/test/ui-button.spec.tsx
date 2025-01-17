import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from '../ui-button'; // Adjust the path if needed

describe('ui-button', () => {
	it('should render the component with default properties', async () => {
		const { root } = await newSpecPage({
			components: [UiButton],
			html: '<ui-button></ui-button>',
		});

		const epected = `
			<button class="medium primary ui-button">
				<slot></slot>
			</button>
		`;

		const element = root.shadowRoot.innerHTML;

		expect(element).toEqualHtml(epected);
		expect(root.shadowRoot.querySelector('button').disabled).toBeFalsy();
	});

	it('should apply the correct size class', async () => {
		const { root } = await newSpecPage({
			components: [UiButton],
			html: '<ui-button size="large"></ui-button>',
		});

		const epected = `
          <button class="large primary ui-button">
            <slot></slot>
          </button>
		`;

		const element = root.shadowRoot.innerHTML;

		expect(element).toEqualHtml(epected);
	});

	it('should apply the correct theme class', async () => {
		const {root} = await newSpecPage({
			components: [UiButton],
			html: '<ui-button theme="danger"></ui-button>',
		});

		const epected = `
          <button class="danger medium ui-button">
            <slot></slot>
          </button>
		`;

		const element = root.shadowRoot.innerHTML;

		expect(element).toEqualHtml(epected);
	});

	it('should set the disabled attribute when the disabled prop is true', async () => {
		const { root } = await newSpecPage({
			components: [UiButton],
			html: '<ui-button disabled="true"></ui-button>',
		});
		const epected = `
			<button class="disabled medium primary ui-button" disabled="">
				<slot></slot>
			</button>
		`;

		const element = root.shadowRoot.innerHTML;

		expect(element).toEqualHtml(epected);
	});
});
