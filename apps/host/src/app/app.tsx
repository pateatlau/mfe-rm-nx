import Casa from 'casa/Module';
import Cards from 'cards/Module';
import Deposits from 'deposits/Module';

export function App() {
  return (
    <div style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
      <h1>Micro Frontend Host Container</h1>
      <Casa />
      <Deposits />
      <Cards />
    </div>
  );
}

export default App;
