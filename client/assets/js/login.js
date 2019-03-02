const axios = require('axios');
const URL = require('../../constants/config');

const getId = () => $('#inputEmail').val();
const getPwd = () => $('#inputPassword').val();

$(document).ready(() => {
    $('.form-signin').submit(e => {
        e.preventDefault();

        const getLoginData = {
            id: getId(),
            password: getPwd()
        }

        axios.post(`${URL}/auth`, getLoginData)
            .then(({ data }) => {
                if (data.result) {
                    alert('로그인 성공!!');
                    window.location = 'homework.html';
                } else {
                    alert(data.msg);
                }
            }).catch((err) => {
                console.error(err);
                alert('알 수 없는 에러입니다. 개발자에게 문의해주세요');
            });
    });
});