function setClock() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();

    var date = today.getDate().toString();
    if (date.endsWith('1') && date != '11') {
        date += 'st';
    } else if (date.endsWith('2') && date != '12') {
        date += 'nd';
    } else if (date.endsWith('3') && date != '13') {
        date += 'rd';
    } else {
        date += 'th';
    }

    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + ', <br>' + date + ' ' + monthNames[today.getMonth()] + ' ' + today.getFullYear());

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    h = hour < 10 ? '0' + hour : hour;
    m = minute < 10 ? '0' + minute : minute;
    s = second < 10 ? '0' + second : second;

    document.getElementById('hrs').innerHTML = h;
    document.getElementById('mins').innerHTML = m;
    document.getElementById('secs').innerHTML = s;

}

setInterval(setClock, 1000);
