import React from "react";
import Moment from "moment";


function ConvertDate(date){
    Moment.locale('en');
    return Moment(date).format('MMM Do YY');
}

export default ConvertDate;
