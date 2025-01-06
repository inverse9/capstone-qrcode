// vitest.setup.js or setupTests.js
// eslint-disable-next-line no-undef
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
