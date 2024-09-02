import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    // const URL_INIT = "https://media.istockphoto.com/id/140469297/photo/sandstorm-driving.jpg?s=2048x2048&w=is&k=20&c=XCnzDl9YTxBgyVaR3H-2qw5C8AxlP7Yu4Kswe1DHHJQ=";

    let HOT_URL = "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.webp?b=1&s=170667a&w=0&k=20&c=Zrx6fhLi6mYYJylYQsbYr09ozyNsgAYfNolc_pUgmMY=";
    let COLD_URL = "https://media.istockphoto.com/id/1175651818/photo/snowy-idyllic-winter-landscape-panorama.jpg?s=612x612&w=0&k=20&c=p4tGzRXFgFJtymas4w8iRZsuFEr9Z6Lax-KnawjjRWk=";
    let RAINY_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80 ? RAINY_URL : info.tem > 15 ? HOT_URL : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            info.humidity > 80 ? <ThunderstormIcon /> : info.tem > 15 ? <  WbSunnyIcon/> : < AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature = {info.tem}&deg;C</div><br />
                            <div>Humidity = {info.humidity}%</div><br />
                            <div>Min Temp= {info.minTemp}&deg;C</div><br />
                            <div>Max Temp = {info.maxTemp}&deg;C</div><br />
                            <div>The weather can be described as <b>{info.weather}</b> and feels like = {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}