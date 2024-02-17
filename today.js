module.exports.getDate = function getDate() {
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    return new Date(aestTime);
}

module.exports.getDay = function getDay() {
    let day = new Date().getDay();
    return day;
}