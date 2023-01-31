import './App.css'
import InputArea from './components/InputArea'
import RecipeInput from './components/RecipeInput'
import parseInput from './util/parseInput'

function App() {
  const handleClick = () => {
    const thing = parseInput()
    console.log('heeeeey,', thing)
  }

  return (
    <div className="App">
      <header>Crazy Recipe Viewer</header>
      <main>
        <InputArea />
        <button onClick={handleClick}>
          Parse Input / Do the thing Julieeeee
        </button>
        {/* <div id="recipe-pasting-area">
          <form>
            <label type="text" name="blah">
              Paste recipe heree:
              <input type="text" name="recipe-input" />
            </label>
            <textarea>asdf</textarea>
          </form>
        </div> */}
        <div id="recipe-showing-area"></div>
      </main>
      <footer>A footer!</footer>
    </div>
  )
}

export default App
