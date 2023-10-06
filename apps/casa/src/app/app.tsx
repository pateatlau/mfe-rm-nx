import { isEven } from '@mfe-rm-nx/utils';

export function App() {
  return (
    <div>
      <h2>CASA: Current Accounts & Saving Accounts</h2>
      <p>11 is an {isEven(11) ? 'even ' : 'odd '} number</p>
    </div>
  );
}

export default App;
