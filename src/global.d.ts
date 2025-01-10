// src/global.d.ts or in the root of your project
declare namespace JSX {
  // Stencil's JSX intrinsic elements
  interface IntrinsicElements {
    'ui-button': any; // Example component, add others as needed
    // Add more components here
  }
  
  // These are the missing types from the error
  type Element = any;
  type ElementClass = any;
}
