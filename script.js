function calculateTimeDifference(startDate, endDate) {
    // const startDate = new Date();
    // const endDate = new Date(TARGET_DATE);
    // Calculate the total difference in milliseconds
    const totalMilliseconds = endDate - startDate;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);

    // Calculate months, weeks, days, hours, minutes, and seconds
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    if (endDate.getDate() < startDate.getDate()) {
        months -= 1;
    }

    const remainingDays = Math.floor((totalMilliseconds - months * 30 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000));
    const weeks = Math.floor(remainingDays / 7);
    const days = remainingDays % 7;
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Calculate the time difference (hours, minutes, seconds) separately
    const remainingHours = Math.floor((totalMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const remainingMinutes = Math.floor((totalMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
    const remainingSeconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);

    return {
        months: months,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        remainingHours: remainingHours,
        remainingMinutes: remainingMinutes,
        remainingSeconds: remainingSeconds
    };
}

// Update time left on page
function updateTimeLeft() {
    // Hardcode the start datetime to now
    const now = new Date();
    const startTime = now;

    // Hardcode the end datetime to 12/17/2025 at midnight
    const endTime = new Date(2025, 11, 17, 22, 59, 59); // JavaScript months are 0-based

    const timeLeft = calculateTimeDifference(startTime, endTime);

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