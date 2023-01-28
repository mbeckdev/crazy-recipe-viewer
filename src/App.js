import './App.css';

function App() {
  return (
    <div className="App">
      <header>Crazy Recipe Viewer</header>
      <main>
        <div id="recipe-pasting-area">
          <form>
            <label type="text" name="blah">
              Paste recipe here:
              <input type="text" name="recipe-input" />
            </label>
            <textarea>asdf</textarea>
          </form>
        </div>
        <div id="recipe-showing-area"></div>
      </main>
      <footer>A footer!</footer>
    </div>
  );
}

export default App;
