const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

const dayErrMssg = document.getElementById('day-error');
const monthErrMssg = document.getElementById('month-error');
const yearErrMssg = document.getElementById('year-error');

const submitBtnEl = document.getElementById('submit-button');

function validateDayInput() {
    const day = Number(dayInput.value);
    const month = Number(monthInput.value);

    let dayValue = '';

    if (day === 0) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'field required';
        dayInput.classList.add('error');
    } else if (isNaN(day)) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'invalid input';
        dayInput.classList.add('error');
    } else if (day > 30 & month === 4) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'invalid input';
        dayInput.classList.add('error');
    } else if (day > 30 & month === 6) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'invalid input';
        dayInput.classList.add('error');
    } else if (day > 30 & month === 9) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'invalid input';
        dayInput.classList.add('error');
    } else if (day > 30 & month === 11) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'invalid input';
        dayInput.classList.add('error');
    } else if (day > 31) {
        dayErrMssg.style.visibility = 'visible';
        dayErrMssg.innerText = 'invalid input';
        dayInput.classList.add('error');
    } else {
        dayErrMssg.style.visibility = 'hidden';
        dayErrMssg.innerText = '';
        dayInput.classList.remove('error');
        dayValue = day;
    }

    return dayValue;
}

function validateMonthInput() {
    const month = Number(monthInput.value);

    let monthValue = ''
    
    if (month === 0) {
        monthErrMssg.style.visibility = 'visible';
        monthErrMssg.innerText = 'field required';
        monthInput.classList.add('error');
    } else if (isNaN(month)) {
        monthErrMssg.style.visibility = 'visible';
        monthErrMssg.innerText = 'invalid input';
        monthInput.classList.add('error');
    } else if (month > 12) {
        monthErrMssg.style.visibility = 'visible';
        monthErrMssg.innerText = 'invalid input';
        monthInput.classList.add('error');
    } else {
        monthErrMssg.style.visibility = 'hidden';
        monthInput.classList.remove('error');
        monthValue = month;
    }

    return monthValue;

}

function validateYearInput() {
    const year = Number(yearInput.value);
    const thisYear = new Date().getFullYear();

    let yearValue = '';

    if (year === 0) {
        yearErrMssg.style.visibility = 'visible';
        yearErrMssg.innerText = 'field required';
        yearInput.classList.add('error');
    } else if (isNaN(year)) {
        yearErrMssg.style.visibility = 'visible';
        yearErrMssg.innerText = 'invalid input';
        yearInput.classList.add('error');
    } else if (year > thisYear) {
        yearErrMssg.style.visibility = 'visible';
        yearErrMssg.innerText = 'invalid input';
        yearInput.classList.add('error');
    } else {
        yearErrMssg.style.visibility = 'hidden';
        yearInput.classList.remove('error');
        yearValue = year;
    }

    return yearValue;
}

function showYearValue() {
    const yearValue = validateYearInput()
    const monthValue = validateMonthInput();
    const dayValue = validateDayInput();

    if(yearValue && monthValue && dayValue) {
        birthdayCountdown();
    } else {
        return false
    }
}

submitBtnEl.addEventListener('click', ()=>{
    showYearValue();
})


function birthdayCountdown() {
    const dayValue = validateDayInput();
    const monthValue = validateMonthInput();
    const yearValue = validateYearInput();

    const dateInput = `${yearValue}-${monthValue}-${dayValue}`;
    

    const birthday = new Date(dateInput);

    const userAge = new Date().getFullYear() - birthday.getFullYear();

    const userNewDate = `${new Date().getFullYear()}-${monthValue}-${dayValue}`;

    const userNextBirthday = new Date(userNewDate);

    const remainingTime = userNextBirthday.getTime() - new Date().getTime();

    if (remainingTime < 0) {
        return false
    } else {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const months = Math.floor((remainingTime / day) / 24)
        
        const days = Math.floor((remainingTime / day))

        const hours = Math.floor((remainingTime % day) / hour)
        

        const minutes = Math.floor((remainingTime % hour) / minute)

        const seconds = Math.floor((remainingTime % minute) / second)

        m = months < 10 ? '0' + months : months;
        d = days < 10 ? '0' + days : days;
        h = hours < 10 ? '0' + hours : hours;
        mi = minutes < 10 ? '0' + minutes : minutes;
        s = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('month-result').innerText = m;
        document.getElementById('days-result').innerText = d;
        document.getElementById('hours-result').innerText = h;
        document.getElementById('minutes-result').innerText = mi;
        document.getElementById('seconds-result').innerText = s;

        
    }

    setInterval(birthdayCountdown, 1000);
    
    
}





