var consts = require('../../consts.js');
var converter = require('../../tokens_util/common/week_day_converter.js');

exports.tokens = [
    {
        // Examples: Sunday at 17:46
        example: 'domingo às 19:35',
        category: 'last & next',
        regex: /(?:\b|^)(domingo|sergunda|ter[çc]a|quarta|quinta|sexta|s[áa]bado)(?:\b|$)/,
        variables: {
            timeType: 1,
        },
        affectsGenerator: function (match) {
            var dayValue = converter.convert(match[this.variables.timeType]);
            var currentDay = new Date().getDay();
            var calculatedValue = converter.calculateLastConvention(currentDay, dayValue);
            timeType = 'day';

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculatedValue
            }]
        }
    }
];