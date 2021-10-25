import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Barberia from './Components/Pages/Barberia';
import Manicura from './Components/Pages/Manicura';
import Peluqueria from './Components/Pages/Peluqueria';
import ItemListContainer from './Components/ItemListContainer';
import ItemContainer from './Components/ItemContainer';
import { useState } from 'react';



const Titulo = ({ titulo }) => {
  return (
    <>
      <h2> {titulo}</h2>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(0)

  const handlerCount = (value) => {
    setCount(count + value)
  }

  const handlerItemsCart = (value) => {
    setItems(items + value)
    setCount(0)
  }

  return (
    <div className="App">
      <Titulo titulo='Academias Onix' />
      <Router>
        <Navbar itemsCount={items} />
        <ItemListContainer valorCarrito={count}>
          <ItemContainer handlerCount={e => handlerCount(e)} handlerItemsCart={e => handlerItemsCart(e)} />
        </ItemListContainer>
        <Switch>
          <Route path='/' exact component={''} />
          <Route path='/peluqueria' component={Peluqueria} />
          <Route path='/barberia' component={Barberia} />
          <Route path='/manicura' component={Manicura} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
