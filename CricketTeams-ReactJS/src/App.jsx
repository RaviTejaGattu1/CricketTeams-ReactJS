import './App.css';
import Teams from './components/Teams';
import Team from './components/Team';


const App = () => {

  return (
    <div className="App">
      <h1>Cricket Teams 🏏</h1>
      <h2>🤾🏻‍♂️⛹🏻‍♀️List of cricket teams present world-wide 🗺️ </h2>
      <Teams />
    </div>
  )
}

export default App;