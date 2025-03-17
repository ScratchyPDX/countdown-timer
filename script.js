// Set the target date
const targetDate = new Date('December, 17, 2025');

// Function to calculate time left
function calculateTimeLeft() {
    const now = new Date();
    const differenceInMs = targetDate.getTime() - now.getTime();

    // Convert difference in ms to days, weeks, months, hours, minutes and seconds
    const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    const months = calculateMonthsDifference(now, targetDate);
    const remainingDaysAfterMonths = days - (months * 30); // Approximate days in a month
    const weeks = Math.floor(remainingDaysAfterMonths / 7);
    const remainingDaysAfterWeeks = remainingDaysAfterMonths % 7;
    const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

    return {
        months,
        weeks,
        days: remainingDaysAfterWeeks,
        hours,
        minutes,
        seconds,
    };
}

// Function to calculate the number of whole months between two dates
function calculateMonthsDifference(startDate, endDate) {
    let months;
    months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    return months <= 0 ? 0 : months;
}

// Update time left on page
function updateTimeLeft() {
    const timeLeft = calculateTimeLeft();

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