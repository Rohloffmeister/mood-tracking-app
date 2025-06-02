

greetings_date = document.getElementById("grettings__date");
function getFormattedDate(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function getOrdinal(n) {
        if (n > 3 && n < 21) return n + "th";
        switch (n % 10) {
            case 1: return n + "st";
            case 2: return n + "nd";
            case 3: return n + "rd";
            default: return n + "th";
        }
    }

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = getOrdinal(date.getDate());
    const year = date.getFullYear();

    return `${dayName}, ${monthName} ${day}, ${year}`;
}
const today = new Date();
greetings_date.innerHTML = getFormattedDate(today);
