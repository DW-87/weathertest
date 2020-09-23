import React from 'react';
import "./form.style.css";

const Weather = props => {
    return (
        <div className="container">
            <div className="cards pt-4">
                <h1 className="weather-font-size">
                    {props.city}
                </h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} icon-size`}/>
                </h5>
                {props.temp_celsius?(
                    <h1 className="py-2 temp-font-size">{props.temp_celsius}&deg;</h1>
                ):null}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3 weather-font-size">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max) {
    if(min && max) {
        return (
            <h3>
                <span className="px-4 weather-font-size"><span className="span-min-max">Min</span> {min}&deg;</span>
                <span className="px-4 weather-font-size"><span className="span-min-max">Max</span> {max}&deg;</span>
            </h3>
        );
    }
}

export default Weather;