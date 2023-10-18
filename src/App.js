// import logo from './logo.svg';
import './App.css';
import T1 from './components/T1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <center>
        <h1>Responsive Paragraph Word Counter</h1>
        <T1 />
      </center>
      
    </div>
  );
}

export default App;
