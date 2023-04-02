import "./App.css";

function App() {
  const name = "Wagner";

  const newName = name.toUpperCase();

  function soma(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";
  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Olá, {newName}!</p>
      <p>Soma: {soma(7, 7)}</p>
      <img src={url} alt="minha imagem" />
    </div>
  );
}

export default App;
