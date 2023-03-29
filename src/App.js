function App() {
  return (
    <div className="container">
      <input placeholder="Введите город..." className="search" type="text" />
      <div className="temp">
        <h2>Город</h2>
        <h1>28°C</h1>
      </div>
      <div className="dop">
        <h3>Вероятность дождя</h3>
        <h3>Влажность</h3>
        <h3>Скорость ветра</h3>
      </div>
    </div>
  )
}

export default App
