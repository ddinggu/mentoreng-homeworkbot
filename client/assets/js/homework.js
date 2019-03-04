const axios = require('axios');
const URL = require('../../constants/config');

// Variable date 
let date;
const getHW = () => $('#inputHomework').val();

// TimeDatePicker with Korean Timezone (lightest in npm library)
// https://flatpickr.js.org/
$(document).ready(() => {
    $('#datetimePicker').flatpickr({
        enableTime: true,
        locale: "ko",
        onChange: (selectedDates, dateStr, instance) => {
            console.table({ selectedDates, dateStr, instance });
            date = selectedDates[0];
        }
    });

    $('.form-control').submit(e => {
        e.preventDefault();

        const getHomeworkData = {
            time: date,
            homework: getHW(),
        }
        console.log(date);

        axios.post(`${URL}/homework`, getHomeworkData)
            .then(({ data }) => {
                if (data.result) {
                    alert('등록 성공!! 몽고디비로 확인해주세요');
                } else {
                    alert(data.msg);
                }
            })
            .catch(err => {
                console.error(err);
                alert('알 수 없는 에러입니다. 개발자에게 문의해주세요');
            })
    });

    // 
    $("textarea#inputHomework").on('keydown keyup', function () {
        $(this).height(1).height($(this).prop('scrollHeight') + 12);
    });
});


























// (function ($) {
//     'use strict';
//     /*==================================================================
//         [ Daterangepicker ]*/
//     try {
//         $('.js-datepicker').daterangepicker({
//             "singleDatePicker": true,
//             "showDropdowns": true,
//             "autoUpdateInput": false,
//             locale: {
//                 format: 'DD/MM/YYYY'
//             },
//         });

//         var myCalendar = $('.js-datepicker');
//         var isClick = 0;

//         $(window).on('click', function () {
//             isClick = 0;
//         });

//         $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
//             isClick = 0;
//             $(this).val(picker.startDate.format('DD/MM/YYYY'));

//         });

//         $('.js-btn-calendar').on('click', function (e) {
//             e.stopPropagation();

//             if (isClick === 1) isClick = 0;
//             else if (isClick === 0) isClick = 1;

//             if (isClick === 1) {
//                 myCalendar.focus();
//             }
//         });

//         $(myCalendar).on('click', function (e) {
//             e.stopPropagation();
//             isClick = 1;
//         });

//         $('.daterangepicker').on('click', function (e) {
//             e.stopPropagation();
//         });


//     } catch (er) { console.log(er); }
//     /*[ Select 2 Config ]
//         ===========================================================*/

//     try {
//         var selectSimple = $('.js-select-simple');

//         selectSimple.each(function () {
//             var that = $(this);
//             var selectBox = that.find('select');
//             var selectDropdown = that.find('.select-dropdown');
//             selectBox.select2({
//                 dropdownParent: selectDropdown
//             });
//         });

//     } catch (err) {
//         console.log(err);
//     }


// })(jQuery);