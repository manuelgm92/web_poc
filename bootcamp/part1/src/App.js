
import './App.css';
import Mensaje from './Mensaje.js';


const Description = () => {
  return <p>Esta es la app del fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <h1>Título de la App</h1>
      <Mensaje color='green' message='Estamos trabajando '/>
      <Mensaje color='grey' message='en un curso de React'/>
      <Description></Description>
    </div>
  );
}

export default App;


//los componentes deben ponerse con mayusculas y no debe haber un componente dentro de otro