import { isOdd } from '@mfe-rm-nx/utils';
import { DepositsComponent } from '@mfe-rm-nx/deposits-ui-components';

export function App() {
  const one = 1;

  return (
    <>
      <div>
        <h2>Deposits at highest interest rates!</h2>
        <DepositsComponent type="Fixed" interestRate={7.5} />
        <DepositsComponent type="Recurring" interestRate={6.75} />
        <DepositsComponent type="Term" interestRate={8} />
      </div>
      <p>{`${one} is an ` + isOdd(one) ? 'odd number' : 'even number'}</p>
    </>
  );
}

export default App;
