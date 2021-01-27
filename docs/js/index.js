/**
 * Making component available on styleguide page to use in example
 */
const ComponentThatThrowsError = () => { throw new Error('Message from the error'); };
global.ComponentThatThrowsError = ComponentThatThrowsError;

/**
 * Boilerplate stuff for the React Portals used in our components...
 */
let portalRoot = document.getElementById('portal-root');
if (!portalRoot) {
  portalRoot = document.createElement('div');
  portalRoot.id = 'portal-root';
  document.body.appendChild(portalRoot);
}
