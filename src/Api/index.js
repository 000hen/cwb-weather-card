import locations from "./locations";

const API_KEY = process.env.REACT_APP_CWB_API_KEY;
const API_HOST = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/";

export const CWBApi = async (apiName, partments) => {
    const searchPartments = (new URLSearchParams({
        Authorization: API_KEY,
        format: "JSON",
        ...partments
    })).toString();

    return await fetch(API_HOST + apiName + "?" + searchPartments).then(e => e.json());
}

export const geoAPI = async (lat, lon) => {
    return await fetch(`https://api.nlsc.gov.tw/other/TownVillagePointQuery/${lon}/${lat}/`).then(e => e.text()).then(e => new DOMParser().parseFromString(e, "text/xml"))
}

export const getNowWeather = async (location) => {
    return await CWBApi("O-A0003-001", {
        locationName: location
    });
}

export const getWeatherForecast = async (location) => {
    return await CWBApi("F-C0032-001", {
        locationName: location
    })
}

export const Locations = locations;

export const findLocation = (location) => locations.filter(e => e[0].match(location) || e[1].match(location));
