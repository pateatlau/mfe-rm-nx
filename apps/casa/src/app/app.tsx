import { isEven } from '@mfe-rm-nx/utils';
import { CasaComponent } from '@mfe-rm-nx/casa-ui-components';

export function App() {
  return (
    <div>
      <CasaComponent title="CASA: Current Accounts & Saving Accounts" />
      <p>11 is an {isEven(11) ? 'even ' : 'odd '} number</p>
    </div>
  );
}

export default App;
