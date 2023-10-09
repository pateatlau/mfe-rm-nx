import { isEven } from '@mfe-rm-nx/utils';
import { SmartCards } from '@mfe-rm-nx/cards-ui-components';

export function App() {
  return (
    <div>
      <h2>My Cards: Credit and Debit cards</h2>
      <SmartCards />
      <p>10 is an {isEven(10) ? 'even ' : 'odd '} number</p>
    </div>
  );
}

export default App;
