import Casa from 'casa/Module';
import Cards from 'cards/Module';

export function App() {
  return (
    <div style={ { fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'} }>
      <h1>Micro Frontend Host Container</h1>
      <Casa />
      <Cards />
    </div>
  );
}

export default App;
