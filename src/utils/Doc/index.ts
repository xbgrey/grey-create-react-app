import moment from 'moment';

/**
 * Format Time
 * @param timestamp
 * @returns {*}
 */
const formatTime = (timeStr:string|number|Date):string => {
    if(timeStr){
        const date:string = moment(timeStr).format('YYYY-MM-DD HH:mm');
        return date;
    }else{
        return '';
    }
};

const formatDate = (timeStr:string|number|Date):string => {
    if(timeStr){
        const date:string = moment(timeStr).format('YYYY-MM-DD');
        return date;
    }else{
        return '';
    }
};

export default {
    formatTime,
    formatDate,
}
