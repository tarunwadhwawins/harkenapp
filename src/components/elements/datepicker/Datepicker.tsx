import 'materialize-css';
import { DatePicker, TextInput } from 'react-materialize';
import styled from 'styled-components';
import Colors from '../../../assets/style/Colors';
import { Icons } from '../icon/Icons';

export const FileUploadControl = styled.div`
    width: 100%;
    margin: 0 auto;
    .input-field{
        width: 100%;
        input{
            border-bottom: 1px solid ${Colors.grey} !important; 
            border-radius: 0px !important;
            background-image:url('${Icons.Calendar}'); 
            background-size: 30px;
            background-repeat: no-repeat;
            background-position: center right;
        }
        
    }
`;


interface DatepickerWrap {
    label?: string | undefined;
}

export default function Datepicker({
    label
}: DatepickerWrap) {
    return <FileUploadControl>
            <DatePicker
            id="DatePicker-7"
            
            options={{
                autoClose: false,
                container: null,
                defaultDate: new Date(),
                // disableDayFn: null,
                disableWeekends: false,
                events: [],
                firstDay: 0,
                format: 'mmm dd, yyyy',
                i18n: {
                cancel: 'Cancel',
                clear: 'Clear',
                done: 'Ok',
                months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                monthsShort: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                nextMonth: '›',
                previousMonth: '‹',
                weekdays: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                weekdaysAbbrev: [
                    'S',
                    'M',
                    'T',
                    'W',
                    'T',
                    'F',
                    'S'
                ],
                weekdaysShort: [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ]
                },
                isRTL: false,
                // maxDate: null,
                // minDate: null,
                // onClose: null,
                // onDraw: null,
                // onOpen: null,
                // onSelect: null,
                // parse: null,
                setDefaultDate: false,
                showClearBtn: false,
                showDaysInNextAndPreviousMonths: false,
                showMonthAfterYear: false,
                yearRange: 10
            }}
            />
        </FileUploadControl>
}