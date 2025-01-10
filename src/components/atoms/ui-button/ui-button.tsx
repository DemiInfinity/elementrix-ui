import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',  // Make sure this path is correct
  shadow: true,
})
export class UiButton {
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() theme: 'primary' | 'secondary' | 'danger' = 'primary';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button
        class={`ui-button ${this.size} ${this.theme} ${this.disabled ? 'disabled' : ''}`}
        disabled={this.disabled}
      >
        <slot />
      </button>
    );
  }
}

// Remove this export line:
// export { UiButton };
