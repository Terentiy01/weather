import { useState } from 'react'
import { useDebounce } from './hooks/debounce'
import { useSearchCityQuery } from './store/weather/weather.api'
import { atmospheric, humidity, wind } from './assets/icons/index'
import { images } from './assets/const/index'

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

      {isError && <p className="error">Такого города не существует.</p>}
      {!data?.name.length ? (
        <div></div>
      ) : !search.length ? (
        <div></div>
      ) : isLoading ? (
        <p className="loading">Загрузка...</p>
      ) : (
        !isError && (
          <>
            <div className="temp">
              {images.map((element) => {
                if (element.text === data?.weather[0]?.description) {
                  return (
                    <div className="picture">
                      <img src={element.image} />
                    </div>
                  )
                }
              })}
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
                <p>{data?.main?.humidity} %</p>
              </span>
              <span>
                <img src={wind} className="dop-icons wind" />
                <p>{data?.wind?.speed} м/с</p>
              </span>
              <span>
                <img src={atmospheric} className="dop-icons" />
                <p> {data?.main?.pressure} мм. р.с.</p>
              </span>
            </div>
          </>
        )
      )}
    </div>
  )
}

export default App
