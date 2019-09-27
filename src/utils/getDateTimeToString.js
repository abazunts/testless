const strFormat = {
    1: 'dd/MM/yy г. Время:hh:mm:ss',
    2: 'dd-MM-yyyy hh:mm',
    3: 'Год: yyyy, День недели: dddd',
    4: 'dd-MM-yyyy',
    5: 'yyyy-MM-dd hh:mm',
    6: 'yyyy-MM-dd',
};

export const getDateTimeToString = (date) => {
    if (date !== null) {
        let resultDateTime = strFormat[5];
        let daysLong = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        let daysShort = ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."];
        let yearRegExp = date.getFullYear();
        let monthRegExp = (String(date.getMonth() + 1).length === 1) ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
        let dayRegExp = (date.getDate().toString().length === 1) ? ("0" + date.getDate()) : date.getDate();
        let dayNameRegExp = date.getDay();
        let hoursRegExp = (date.getHours().toString().length === 1) ? ("0" + date.getHours()) : date.getHours();
        let minuteRegExp = (date.getMinutes().toString().length === 1) ? ("0" + date.getMinutes()) : date.getMinutes();
        let secondsRegExp = (date.getSeconds().toString().length === 1) ? ("0" + date.getSeconds()) : date.getSeconds();
        let milisecondsRegExp = (date.getMilliseconds().toString().length === 1) ? ("00" + date.getMilliseconds()) : ((date.getMilliseconds().toString().length === 2) ? ("0" + date.getMilliseconds()) : date.getMilliseconds());

        resultDateTime = resultDateTime.replace(new RegExp('yyyy', 'g'), yearRegExp);
        resultDateTime = resultDateTime.replace(new RegExp('yy', 'g'), String(yearRegExp).slice(-2));
        resultDateTime = resultDateTime.replace(new RegExp('MM', 'g'), monthRegExp);
        resultDateTime = resultDateTime.replace(new RegExp('dddd', 'g'), daysLong[dayNameRegExp - 1]);
        resultDateTime = resultDateTime.replace(new RegExp('ddd', 'g'), daysShort[dayNameRegExp - 1]);
        resultDateTime = resultDateTime.replace(new RegExp('dd', 'g'), dayRegExp);
        resultDateTime = resultDateTime.replace(new RegExp('hh', 'g'), hoursRegExp);
        resultDateTime = resultDateTime.replace(new RegExp('mm', 'g'), minuteRegExp);
        resultDateTime = resultDateTime.replace(new RegExp('ss', 'g'), secondsRegExp);
        resultDateTime = resultDateTime.replace(new RegExp('zz', 'g'), milisecondsRegExp);
        return resultDateTime + "";
    } else return date;
};
