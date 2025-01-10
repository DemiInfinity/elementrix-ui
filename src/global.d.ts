// global.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      // Declare your custom elements here
      'ui-button': any; // Replace 'my-component' with the actual custom element names you're using.
      // Example: 'ui-button': any;
    }
  
    // If you're still getting JSX.Element errors, add the following:
    type Element = HTMLElement;
    type ElementClass = HTMLElement;
  }
  