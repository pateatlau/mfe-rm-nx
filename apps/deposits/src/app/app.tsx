import { isOdd } from '@mfe-rm-nx/utils';

export function App() {
  const one = 1;

  return (
    <div>
      <h2>Deposits at highest interest rates!</h2>
      <p>
        {one} is an {isOdd(one) ? 'odd ' : 'even '} number
      </p>
    </div>
  );
}

export default App;
