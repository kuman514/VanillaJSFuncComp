export default function ControlPanel(props, targetElement = null) {
  // Initialize this Component
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

  // Define render function
  function render() {
    /*
    * TODO
    * - Define or/and modify this Component's render function here
    **/
    const rootElement = targetElement ?? document.createElement('div');
    rootElement.innerText = '';
    
    // Amount controller
    const amountControl = document.createElement('input');
    amountControl.type = 'number';
    amountControl.value = props.differAmount;

    // Apply button
    const applyButton = document.createElement('button');
    applyButton.textContent = 'APPLY';
    applyButton.addEventListener('click', () => {
      props.onApplyDiff(parseInt(amountControl.value));
    });

    // Assemble
    rootElement.appendChild(amountControl);
    rootElement.appendChild(applyButton);

    return rootElement;
  }

  // Return rendered element
  return render();
}
