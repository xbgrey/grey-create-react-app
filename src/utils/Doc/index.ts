import * as moment from 'moment';

/**
 * 时间格式转换 YYYY-MM-DD HH:mm
 * @param {string | number | Date} timeStr
 * @returns {string}
 */
function formatTime(timeStr: string | number | Date): string {
    if (timeStr) {
        const date: string = moment(timeStr).format('YYYY-MM-DD HH:mm');
        return date;
    } else {
        return '';
    }
}

/**
 * 时间格式转换 YYYY-MM-DD
 * @param {string | number | Date} timeStr
 * @returns {string}
 */
function formatDate(timeStr: string | number | Date): string {
    if (timeStr) {
        const date: string = moment(timeStr).format('YYYY-MM-DD');
        return date;
    } else {
        return '';
    }
}

export default {
    formatTime,
    formatDate,
};
