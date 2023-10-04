import { isEven } from '@mfe-rm-nx/utils';
import { SmartCard } from '@mfe-rm-nx/shared-ui-components';

export function App() {
  return (
    <div>
      <h2>My Cards: Credit and Debit cards</h2>
      <SmartCard type="Credit" />
      <SmartCard type="Debit" />
      <p>10 is an {isEven(10) ? 'even ' : 'odd '} number</p>
    </div>
  );
}

export default App;
