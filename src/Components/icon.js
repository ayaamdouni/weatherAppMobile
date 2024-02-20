import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Alert from '@mui/material/Alert';
import "./icon.css"
// clouds spline code
{/* <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />
// sun & cloud spline code
<Spline scene="https://prod.spline.design/O8RtmHcRXcTWoTP7/scene.splinecode" /> */}
// rainy
{/* <Spline scene="https://prod.spline.design/U3H9ow2xG4fVeUOD/scene.splinecode" /> */}
// sunny
{/* <Spline scene="https://prod.spline.design/UkFxmzspRMVcPcDA/scene.splinecode" /> */}
// snow
{/* <Spline scene="https://prod.spline.design/7A3TBoQSLbX60Nxo/scene.splinecode" /> */}
const Icon = () => {

    const [searchValue, setSearchValue] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('')
    const [iconSpline, setIcon] = useState("01d");
    const [humidity, setHumidity] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [temp, setTemp] = useState(0);
    const [errors, setError] = useState(false);

    const icons = {
        "00":<Spline scene="https://prod.spline.design/tE0aFvj8ujD3gSK1/scene.splinecode" />,
        "01d": <Spline scene="https://prod.spline.design/UkFxmzspRMVcPcDA/scene.splinecode" />,
        "02d": <Spline scene="https://prod.spline.design/O8RtmHcRXcTWoTP7/scene.splinecode" />,
        "03d": <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />,
        "04d": <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />,
        "09d": <Spline scene="https://prod.spline.design/U3H9ow2xG4fVeUOD/scene.splinecode" />,
        "10d": <Spline scene="https://prod.spline.design/U3H9ow2xG4fVeUOD/scene.splinecode" />,
        "11d": <Spline scene="https://prod.spline.design/oqVDn21JJOEr-Eid/scene.splinecode" />,
        "13d": <Spline scene="https://prod.spline.design/7A3TBoQSLbX60Nxo/scene.splinecode" />,
        "50d": <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />,
        "01n": <Spline scene="https://prod.spline.design/9f0IQ9QcgeXKu0aR/scene.splinecode" />,
        "02n": <Spline scene="https://prod.spline.design/4ae9U5n7mfblY8rh/scene.splinecode" />,
        "03n": <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />,
        "04n": <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />,
        "09n": <Spline scene="https://prod.spline.design/U3H9ow2xG4fVeUOD/scene.splinecode" />,
        "10n": <Spline scene="https://prod.spline.design/U3H9ow2xG4fVeUOD/scene.splinecode" />,
        "11n": <Spline scene="https://prod.spline.design/oqVDn21JJOEr-Eid/scene.splinecode" />,
        "13n": <Spline scene="https://prod.spline.design/7A3TBoQSLbX60Nxo/scene.splinecode" />,
        "50n": <Spline scene="https://prod.spline.design/SAN-38ttwqYiPbyi/scene.splinecode" />,
    }

    let api_key = "db62c5502d8e36c93177d825fd7e81c0";
    const search = async () => {
        
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=Metric&appid=${api_key}`
            console.log(searchValue);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
            setCity(data.name);
            console.log("humidity"+ data.main.humidity);
            setIcon(String(data.weather[0].icon));
            console.log("icon",iconSpline)
            setDescription(String(data.weather[0].main));
            console.log("decription", typeof(iconSpline));
            const temperature = data.main.temp;
            setTemp(temperature);
            console.log("temp", data.main.temp);
        }catch(error){
            setError(false);
        }
    }
    return(
        <div>
            {errors && <Alert severity="info">This is an info Alert.</Alert>}
        <div className='container'>
            <div className='top-bar'>
                <input type='text' 
                className='city' 
                placeholder='Search' 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}/>
                <div className='search-icon'onClick={()=>{search()}}>
                    <Spline scene="https://prod.spline.design/b9b6M93Tugln2euo/scene.splinecode" />
                </div>
            </div>
            <div className='spline-3d'>
                    {icons[iconSpline]}
                    <div className='texts'>
                        <h1>{temp}</h1>
                        <h1>°C {city}, {description}</h1>
                    </div>
            </div>            
            <div className='buttom'>
                <div className='humidity'>
                    <h1>Humidity</h1>
                    <h1>{humidity}%</h1>
                </div>
                <div className='wind-speed'>
                    <h1>Wind Speed</h1>
                    <h1>{windSpeed} Km/h</h1>
                </div>
            </div> 
        </div>
        </div>
    )
}

export default Icon