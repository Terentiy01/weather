import { useSearchCityQuery } from './store/weather/weather.api'
import { useState } from 'react'
import atmospheric from './assets/images/atmospheric.png'
import humidity from './assets/images/humidity.png'
import wind from './assets/images/wind.png'
import { useDebounce } from './hooks/debounce'

function App() {
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)

  const { data, isError, isLoading } = useSearchCityQuery(debounced, {
    skip: debounced.length < 2,
    refetchOnFocus: true,
  })

  return (
    <div className="wrapper">
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Введите город..."
        className="search"
        type="text"
        value={search}
      />

      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <div className="temp">
            <h2>{data?.name}</h2>
            <h1>{data?.main?.temp.toFixed()}°</h1>
            <h4 className="description">{data?.weather[0]?.description}</h4>
            <p>
              {data?.main?.temp_max.toFixed()}° / {''}
              {data?.main?.temp_min.toFixed()}° Ощущается как{' '}
              {data?.main?.feels_like.toFixed()}°
            </p>
          </div>
          <div className="dop">
            <span>
              <img src={humidity} className="dop-icons" />
              <h3>{data?.main?.humidity} %</h3>
            </span>
            <span>
              <img src={wind} className="dop-icons wind" />
              <h3>{data?.wind?.speed} м/с</h3>
            </span>
            <span>
              <img src={atmospheric} className="dop-icons" />
              <h3> {data?.main?.pressure} мм. р.с.</h3>
            </span>
          </div>
        </>
      )}
    </div>
  )
}

export default App
