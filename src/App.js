import './App.css'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import Book from './components/Book/Book'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <br />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/book-show' exact component={Book} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
