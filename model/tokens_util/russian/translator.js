var consts = require('../../consts.js');

// Converts a russian word convention to one of our english conventions
exports.russianToEnglish = function (russianConvention) {
    russianConvention = russianConvention.toLowerCase();

    // Week conventions
    if (russianConvention == 'неделю') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (russianConvention == 'день' || russianConvention == 'дня' || russianConvention == 'дней') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Minute conventions
    if (russianConvention == 'минуту' || russianConvention == 'минут' || russianConvention.indexOf('мин') != -1) {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (russianConvention == 'час' || russianConvention == 'часов' || russianConvention == 'часа') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.russianToEnglish]