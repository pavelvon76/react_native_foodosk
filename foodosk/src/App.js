import logo from './logo.svg';
import buttlogo from './media/motyli.gif';
import './App.css';

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
    //   <p>My nested Pirated P</p>
    // </div>
    <div className="App">
      <h1>Stránka se změnami vlastností objetků</h1>
      <p class="mainPage"><a href="https://akela.mendelu.cz/~rybicka/cviceni/js/cvic3/zadani.html" target="_blank">zadání</a></p>
      <p class="mainPage">Najeď na motýla, kterého chceš vidět.</p>

          <table border="7" align="center">
              <th colspan="2">Naši motýli</th>
              <tr>
                  <td onmousedown="document.getElementById('mySelImg').innerHTML='<img src=\'./media/otakarek.gif\'>'"
                      onmouseover="this.style.backgroundColor='yellow'"
                      onmouseleave="this.style.backgroundColor=''">Otakárek</td>
                  <td id="mySelImg" rowspan="4"><img src={buttlogo}></img></td>       
              </tr>
              <tr><td onmousedown="document.getElementById('mySelImg').innerHTML='<img src=\'./media/zlutasek.gif\'>'"
                      onmouseover="this.style.backgroundColor='yellow'"
                      onmouseleave="this.style.backgroundColor=''">Žluťásek</td></tr>
              <tr><td onmousedown="document.getElementById('mySelImg').innerHTML='<img src=\'./media/babocka.gif\'>'"
                      onmouseover="this.style.backgroundColor='yellow'"
                      onmouseleave="this.style.backgroundColor=''">Babočka</td></tr>    
          </table>
    </div>
  );
}

export default App;
