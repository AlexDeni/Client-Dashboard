import React from "react";


export function DateTime (time){
    let date = new Date(time);
    let month_num = date.getMonth()
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let month = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"]

    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    return(
        <span className="data_info">
            {day + " " + month[month_num] + " " + date.getFullYear()}
            <br/>
            {hours + ":" + minutes + ":" + seconds}
        </span>
    )

}