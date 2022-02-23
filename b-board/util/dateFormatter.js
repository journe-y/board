exports.getNow = () => {
    //return yyyy-mm-dd
    let now = new Date();
    return `${now.getFullYear()}-${(addZero(now.getMonth()))}-${now.getDate()}`;

    function addZero(num) {
        const month = num + 1;
        if (month < 10) {
            return "0" + month;
        } else {
            return month;
        }
    }
}