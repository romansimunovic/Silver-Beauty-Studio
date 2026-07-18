import {WORKING_HOURS} from "../data/bookingConfig";


export function generateSlots(date,reserved){


const slots=[];


for(
 let hour=WORKING_HOURS.start;
 hour<WORKING_HOURS.end;
 hour++
){


const time =
`${date} ${String(hour).padStart(2,"0")}:00`;


if(!reserved.includes(time)){

slots.push(
String(hour).padStart(2,"0")+":00"
);

}


}


return slots;


}