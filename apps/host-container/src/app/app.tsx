import Casa from 'casa/Module';
import Cards from 'cards/Module';
// import Loans from 'loans-angular/Module';

export function App() {
  return (
    <div style={ { fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'} }>
      <h1>Micro Frontend Host Container</h1>
      <Casa />
      <Cards />
      {/* <Loans /> */}
    </div>
  );
}

export default App;
