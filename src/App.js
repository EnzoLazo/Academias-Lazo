import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Barberia from './Components/Pages/Barberia';
import Manicura from './Components/Pages/Manicura';
import Peluqueria from './Components/Pages/Peluqueria';
import ItemListContainer from './Components/ItemListContainer';
import ItemList from './Components/ItemList';



// const Titulo= ({titulo}) => {
//   return(
//     <>
//     <h2> {titulo}</h2>
//     </>
//   )
// }


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={''} />
          <Route path='/peluqueria' component={Peluqueria} />
          <Route path='/barberia' component={Barberia} />
          <Route path='/manicura' component={Manicura} />
        </Switch>
      </Router>  
      <ItemListContainer/>

    </div>
  );
}

export default App;
