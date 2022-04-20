import ControlPanel from './ControlPanel.js';

export default function App(props, targetElement = null) {
  // Initialize this Component
  const state = {
    /*
    * TODO
    * - Write this Component's initial state here
    **/
    number: 0
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

  // Declare Components to keep
  const keepControlPanel = ControlPanel({
    onApplyDiff: (amount) => {
      const newNum = state.number + amount;
      setState({
        ...state,
        number: newNum
      });
    }
  });

  // Define render function
  function render() {
    /*
    * TODO
    * - Define or/and modify this Component's render function here
    **/
    const rootElement = targetElement ?? document.createElement('div');
    rootElement.innerText = '';

    // Title
    const title = document.createElement('div');
    title.textContent = props.title;

    // The number
    const currentNumber = document.createElement('div');
    currentNumber.textContent = `Current number: ${state.number}`;

    // Assemble
    rootElement.appendChild(title);
    rootElement.appendChild(currentNumber);
    rootElement.appendChild(keepControlPanel);

    return rootElement;
  }

  // Return rendered element
  return render();
}
