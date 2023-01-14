import "./index.css";

import { ReactComponent as AirFlowIcon } from '../Icons/airFlow.svg';
import { ReactComponent as RainIcon } from '../Icons/rain.svg';
import { ReactComponent as RefreshIcon } from '../Icons/refresh.svg';
import { ReactComponent as UVIcon } from '../Icons/uv.svg';

import WeatherIcon from "./WeatherIcon";

export default ({ isFetch, city, weatherName, temp, weatherCode, refresh = () => { }, extraData: {
    rain = 0,
    flow = 0,
    uv = 0,
    extraDesc = ""
}, updateTime }) => {
    const ExtraContent = ({ Icon, text }) => <div className="weatherBlock">
        <Icon height={30} width={80} />
        <span>{ isFetch && text }</span>
    </div>

    return <div className={"card " + (!isFetch && "skt")}>
        <div className="header">
            <h1>{ isFetch && city }</h1>
            <div className="desc">
                <h4>{ isFetch && weatherName }</h4>
                <h4>{ isFetch && extraDesc }</h4>
            </div>
        </div>
        <div className="body">
            <div className="weather">
                <div className="header">
                    <div className="temp">
                        <h1>{ isFetch && temp }</h1>
                    </div>

                    <div className="status">
                        {isFetch && <WeatherIcon weatherCode={weatherCode} timeType={(new Date()).getHours() < 6 || (new Date()).getHours() > 16 ? 1 : 0} />}
                    </div>
                </div>

                <div className="extra">
                    <ExtraContent Icon={AirFlowIcon} text={flow + " m/s"} />
                    <ExtraContent Icon={RainIcon} text={rain + "%"} />
                    <ExtraContent Icon={UVIcon} text={uv} />
                </div>

                <div className="footer">
                    <div>
                        <div>
                            <span>最後更新時間：</span>
                            <span>{isFetch && Intl.DateTimeFormat(navigator.language, {
                                hour: 'numeric',
                                minute: 'numeric',
                            }).format(new Date(updateTime))}</span>
                            <a onClick={() => {
                                if (!isFetch) return;
                                refresh();
                            }} className="refreshIcon">
                               <RefreshIcon height={15} width={15} style={{
                                    padding: 5
                                }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}