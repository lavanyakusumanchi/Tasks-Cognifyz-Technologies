let currentDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();
let currentHour = new Date().getHours();
let greetingMessage;
if (currentHour < 12) {
    greetingMessage = "Good morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}
let message = `${greetingMessage}\n\nCurrent date: ${currentDate}\nCurrent time: ${currentTime}`;
alert(message);
