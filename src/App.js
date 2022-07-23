import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';


import Nav from './Navigation/Nav';
import Admin from './Admin/Admin';
import Home from './Home/Home';
import Stats from './Stats/Stats';



import Products from './store/reducers/productReducers'
import Sales from './store/reducers/salesReducers';

const rootReducer = combineReducers({
  ProductsReducer: Products,
  CartProductReducer: Products,
  CartTotalReducer: Products,
  Top5SalesReducer: Sales,
  Top5UniqueSalesReducer: Sales,
  SalesFrom5DaysReducer: Sales
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <Nav/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/stats" element={<Stats/>}/>
              </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
