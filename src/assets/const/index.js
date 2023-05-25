import {
  clear,
  cloud,
  partlyCloudy,
  smallRain,
  rain,
  stormWithRain,
  storm,
  snow,
} from '../weather-conditions/index'

export const images = [
  {
    image: clear,
    text: 'ясно',
  },
  {
    image: cloud,
    text: 'пасмурно',
  },
  {
    image: cloud,
    text: 'небольшая облачность',
  },
  {
    image: cloud,
    text: 'переменная облачность',
  },
  {
    image: partlyCloudy,
    text: 'облачно с прояснениями',
  },
  {
    image: smallRain,
    text: 'небольшой дождь',
  },
  {
    image: rain,
    text: 'дождь',
  },
  {
    image: storm,
    text: 'гроза',
  },
  {
    image: stormWithRain,
    text: 'гроза с дождем',
  },
  {
    image: stormWithRain,
    text: 'дождь с грозой',
  },
  {
    image: snow,
    text: 'снег',
  },
]
