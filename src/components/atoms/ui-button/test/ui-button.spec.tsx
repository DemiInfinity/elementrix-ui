import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from '../ui-button'; // Adjust the path if needed

describe('ui-button', () => {
  it('should render the component with default properties', async () => {
    const { root } = await newSpecPage({
      components: [UiButton],
      html: '<ui-button></ui-button>',
    });

    expect(root).toEqualHtml(`
      <ui-button class="ui-button medium primary">
        <button class="ui-button medium primary">
          <slot></slot>
        </button>
      </ui-button>
    `);
    expect(root.shadowRoot.querySelector('button').disabled).toBeFalsy();
  });

  it('should apply the correct size class', async () => {
    const { root } = await newSpecPage({
      components: [UiButton],
      html: '<ui-button size="large"></ui-button>',
    });

    expect(root).toEqualHtml(`
      <ui-button class="ui-button large primary">
        <button class="ui-button large primary">
          <slot></slot>
        </button>
      </ui-button>
    `);
  });

  it('should apply the correct theme class', async () => {
    const { root } = await newSpecPage({
      components: [UiButton],
      html: '<ui-button theme="danger"></ui-button>',
    });

    expect(root).toEqualHtml(`
      <ui-button class="ui-button medium danger">
        <button class="ui-button medium danger">
          <slot></slot>
        </button>
      </ui-button>
    `);
  });

  it('should set the disabled attribute when the disabled prop is true', async () => {
    const { root } = await newSpecPage({
      components: [UiButton],
      html: '<ui-button disabled="true"></ui-button>',
    });

    expect(root.shadowRoot.querySelector('button').disabled).toBeTruthy();
  });
});
