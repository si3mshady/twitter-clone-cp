import './App.css';
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widget from './components/Widgets'

function App() {
  return (
    <div className="App">
          {/* <h1>Twitter Clone</h1> */}

          {/* Sidebar */}
          <Sidebar/>
          {/* Feed */}
          <Feed />
          {/* Widget  */}
          <Widget />

    </div>
  );
}

export default App;
