export default function FunctionComponentTemplate(props, targetElement = null) {
  // Initialize this Component's state
  const state = {
    /*
    * TODO
    * - Write this Component's initial state here
    **/
  };

  // Define setState function
  function setState(newState) {
    let changed = false;
    Object.entries(newState).forEach(([key, value]) => {
      if (state[key] === value) {
        return;
      }
      changed = true;
      state[key] = value;
    });
    if (!changed) {
      return;
    }
    render();
  }

  /*
  * TODO
  * - Declare Components you need to keep
  **/

  // Define render function
  function render() {
    const rootElement = targetElement ?? document.createElement('div');
    rootElement.innerText = '';
    /*
    * TODO
    * - Define or/and modify this Component's render function here
    **/
    return rootElement;
  }

  // Return rendered element
  return render();
}
