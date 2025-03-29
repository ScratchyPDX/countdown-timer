// Set the target date
const targetDate = new Date('December, 17, 2025');

function countdownTimer() {
    // Parse dates
    const start = new Date;
    const end = targetDate;

    // Get the total difference in milliseconds
    const totalMilliseconds = end - start;

    // Calculate months (approximate as 30.44 days per month)
    const oneMonth = 30.44 * 24 * 60 * 60 * 1000;
    const months = Math.floor(totalMilliseconds / oneMonth);

    // Remaining time after extracting months
    const remainderAfterMonths = totalMilliseconds % oneMonth;

    // Calculate weeks
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    const weeks = Math.floor(remainderAfterMonths / oneWeek);

    // Remaining time after extracting weeks
    const remainderAfterWeeks = remainderAfterMonths % oneWeek;

    // Calculate days
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.floor(remainderAfterWeeks / oneDay);

    // Remaining time after extracting days
    const remainderAfterDays = remainderAfterWeeks % oneDay;

    // Calculate hours
    const oneHour = 60 * 60 * 1000;
    const hours = Math.floor(remainderAfterDays / oneHour);

    // Remaining time after extracting hours
    const remainderAfterHours = remainderAfterDays % oneHour;

    // Calculate minutes
    const oneMinute = 60 * 1000;
    const minutes = Math.floor(remainderAfterHours / oneMinute);

    // Remaining time after extracting minutes
    const seconds = Math.floor((remainderAfterHours % oneMinute) / 1000);

    // Return results
    return {
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds
    };
}

// Update time left on page
function updateTimeLeft() {
    const timeLeft = countdownTimer();

    document.getElementById('months').textContent = `Months: ${timeLeft.months}`;
    document.getElementById('months').style.display = 'block';
    document.getElementById('weeks').textContent = `Weeks: ${timeLeft.weeks}`;
    document.getElementById('weeks').style.display = 'block';
    document.getElementById('days').textContent = `Days: ${timeLeft.days}`;
    document.getElementById('days').style.display = 'block';
    document.getElementById('hours').textContent = `Hours: ${padZero(timeLeft.hours)}`;
    document.getElementById('hours').style.display = 'block';
    document.getElementById('minutes').textContent = `Minutes: ${padZero(timeLeft.minutes)}`;
    document.getElementById('minutes').style.display = 'block';
    document.getElementById('seconds').textContent = `Seconds: ${padZero(timeLeft.seconds)}`;

    // Call function every second to update timer
    setTimeout(updateTimeLeft, 1000);
}

// Helper function to pad numbers with leading zeros
function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

updateTimeLeft();