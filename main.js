//Get Data
const show = setInterval(() => {
    const date = new Date();
    const todayDate = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const thismonths = months[date.getMonth()];

    //Add Zero in Minutes And Hours
    function addZero(num) {
        return (parseInt(num, 10) < 10 ? '0' : '') + num;
    }


    let hours = date.getHours();
    let minutes = date.getMinutes();

    //Now Am Pm Working
    var AmPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const thisday = days[date.getDay()];

    //Now Show All Data In Screen 
    document.querySelector('#hours').innerHTML = addZero(hours);
    document.querySelector('#minutes').innerHTML = addZero(minutes);
    document.querySelector('#days').innerHTML = thisday;
    document.querySelector('#months').innerHTML = thismonths;
    document.querySelector('#today').innerHTML = todayDate;
    document.querySelector('#ampm').innerHTML = AmPm;

}, 1000);