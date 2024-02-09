import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="logo">
          <h1>M.Y</h1>
        </div>
        <div className="media-links">
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </header>
  <div>{head()}</div>
    </>

  );
  function head(){
    return(
      <div className="body">
        <h1>Hi my name is michael</h1>
      </div>
    )
  }
}

export default App;
