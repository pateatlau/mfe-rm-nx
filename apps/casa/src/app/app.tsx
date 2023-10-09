import { isEven } from '@mfe-rm-nx/utils';
import { FooComponent } from '@mfe-rm-nx/casa-ui-components';

export function App() {
  return (
    <div>
      <FooComponent title="CASA: Current Accounts & Saving Accounts" />
      <p>11 is an {isEven(11) ? 'even ' : 'odd '} number</p>
    </div>
  );
}

export default App;
