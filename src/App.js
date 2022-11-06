import './App.css';
import HOC from './Components/HighOrder';
import ProductList from './Components/Data';
import Pure from './Components/PC';

function App() {
  return (
    <div className="App">
    <h1>Higher Order Components:</h1>
    <p>A Higher-order component is a function that takes a component and returns a new component. <br/>
   They aren't part of the React API.<br/>
   Higher order component is a function which takes a wrapped Component as  an input argument and return a new enhanced component.<br/>
    A higher-order component is a function that takes a component and returns a new component.
    </p>

<pre>

<strong>Syntax :</strong> const EnhancedComponent = higherOrderComponent(WrappedComponent);</pre>
       <HOC/>
       <ProductList />
       <hr />
       <Pure />
    </div>
  );
}

export default App;