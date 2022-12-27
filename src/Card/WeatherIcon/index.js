import { ReactComponent as DayThunderstorm } from '../../Icons/day-thunderstorm.svg';
import { ReactComponent as DayClear } from '../../Icons/day-clear.svg';
import { ReactComponent as DayCloudyFog } from '../../Icons/day-cloudy-fog.svg';
import { ReactComponent as DayCloudy } from '../../Icons/day-cloudy.svg';
import { ReactComponent as DayFog } from '../../Icons/day-fog.svg';
import { ReactComponent as DayPartiallyClearWithRain } from '../../Icons/day-partially-clear-with-rain.svg';
import { ReactComponent as DaySnowing } from '../../Icons/day-snowing.svg';
import { ReactComponent as NightThunderstorm } from '../../Icons/night-thunderstorm.svg';
import { ReactComponent as NightClear } from '../../Icons/night-clear.svg';
import { ReactComponent as NightCloudyFog } from '../../Icons/night-cloudy-fog.svg';
import { ReactComponent as NightCloudy } from '../../Icons/night-cloudy.svg';
import { ReactComponent as NightFog } from '../../Icons/night-fog.svg';
import { ReactComponent as NightPartiallyClearWithRain } from '../../Icons/night-partially-clear-with-rain.svg';
import { ReactComponent as NightSnowing } from '../../Icons/night-snowing.svg';

const weatherTypes = {
    isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
    isClear: [1],
    isCloudyFog: [25, 26, 27, 28],
    isCloudy: [2, 3, 4, 5, 6, 7],
    isFog: [24],
    isPartiallyClearWithRain: [
        8, 9, 10, 11, 12,
        13, 14, 19, 20, 29, 30,
        31, 32, 38, 39,
    ],
    isSnowing: [23, 37, 42],
};

const weatherIcons = {
    0: {
        isThunderstorm: <DayThunderstorm />,
        isClear: <DayClear />,
        isCloudyFog: <DayCloudyFog />,
        isCloudy: <DayCloudy />,
        isFog: <DayFog />,
        isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
        isSnowing: <DaySnowing />
    },
    1: {
        isThunderstorm: <NightThunderstorm />,
        isClear: <NightClear />,
        isCloudyFog: <NightCloudyFog />,
        isCloudy: <NightCloudy />,
        isFog: <NightFog />,
        isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
        isSnowing: <NightSnowing />
    }
}

export default ({ weatherCode, timeType }) => {
    const [weatherName] = Object.entries(weatherTypes).find(([type, codes]) => codes.includes(weatherCode)) || [];
    return weatherIcons[timeType][weatherName];
}