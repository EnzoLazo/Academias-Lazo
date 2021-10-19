import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Barberia from './Components/Pages/Barberia';
import Manicura from './Components/Pages/Manicura';
import Peluqueria from './Components/Pages/Peluqueria';
import ItemListContainer from './Components/ItemListContainer';


const Titulo= ({titulo}) => {
      return(
        <>
        <h2> {titulo}</h2>
        </>
      )
}

function App() {
    return(
    <div className="App">
      <Titulo titulo='Academias Onix'/>
      <Router>
        <Navbar/>
        <ItemListContainer />
        <Switch>
          <Route path='/' exact component={''}/>
          <Route path='/peluqueria' component={Peluqueria}/>
          <Route path='/barberia' component={Barberia}/>
          <Route path='/manicura' component={Manicura}/>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
