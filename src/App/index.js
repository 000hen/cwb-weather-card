import { useEffect, useState } from "react";

import { getNowWeather, findLocation, geoAPI, getWeatherForecast } from "../Api";
import Card from "../Card";

import "./index.css";

export default () => {
    const [data, setData] = useState({
        isFetch: false,
        city: "",
        temp: 0,
        weatherName: "",
        update: "2022/01/01 12:00:00",
        extraData: {
            uv: 0,
            rain: 0,
            flow: 0,
            extraDesc: ""
        },
        weatherCode: 0,
        rainPossibility: 0,
    });
    const [fresh, setFresh] = useState(0);

    function formatData(data) {
        let opt = {};
        for (let h of data) {
            opt[h.elementName] = h.elementValue || h.time[0].parameter;
        }

        return opt;
    }

    useEffect(() => {
        async function a() {
            function geo() {
                return new Promise((res, rej) => {
                    navigator.geolocation.getCurrentPosition(res, rej);
                });
            }
            let g = await geo();
            let loc = await geoAPI(g.coords.latitude, g.coords.longitude);
            let city = loc.querySelector("townVillageItem > officeName").textContent;
            const citySearch = findLocation(city)[0];

            Promise.all([getNowWeather(citySearch[1]), getWeatherForecast(citySearch[2])]).then(([data1, data2]) => {
                const d1Result = data1.records.location[0];
                const d2Result = data2.records.location[0];
                const weatherResult = formatData(d1Result.weatherElement);
                const forecastResult = formatData(d2Result.weatherElement);

                var d = {
                    ...data,
                    isFetch: true,
                    city: d1Result.locationName,
                    temp: Math.round(weatherResult["TEMP"]),
                    weatherName: weatherResult["Weather"],
                    update: d1Result.time.obsTime,
                    extraData: {
                        uv: weatherResult["H_UVI"],
                        rain: Number(forecastResult["PoP"].parameterName),
                        flow: weatherResult["H_FX"],
                        extraDesc: forecastResult["CI"].parameterName
                    },
                    weatherCode: Number(forecastResult["Wx"].parameterValue)
                };

                console.log(d)

                setData(d);
            });
        }

        a();
    }, [fresh]);

    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
    }}>
        <div style={{
            width: "95%",
            maxWidth: "500px"
        }}>
            <Card
                showSkt={!data.isFetch}
                city={data.city}
                weatherName={data.weatherName}
                updateTime={data.update}
                temp={data.temp}
                weatherCode={data.weatherCode}
                extraData={data.extraData}
                refresh={() => {
                    setData({
                        ...data,
                        isFetch: false
                    });
                    setFresh(Math.random());
                }} />
        </div>
    </div>;
}