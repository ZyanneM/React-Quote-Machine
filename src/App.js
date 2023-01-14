import QuoteBox from "./components/QuoteBox";
import "./App.css";
import './assets/css/fonts.css';
import quoteiconleft from './quote-a-left.svg';
import quoteiconright from './quote-a-right.svg';

export default function App() {
  /* ici la logique pour demander une nouvelle citation */
  return (
    <div className="App">
      <h1 className="page-title">
      <img className="quote-icon-left" src={quoteiconleft} alt="some file"  height='30'
      width='30'/>React Quote Machine<img className="quote-icon-right" src={quoteiconright} alt="some file"  height='30'
      width='30'/></h1>
      <QuoteBox />
    </div>
  );
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
