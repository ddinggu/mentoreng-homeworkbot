import Swal from 'sweetalert2';
import { deleteHomework } from 'api';

export const confirmAlert = async (id) => {
  try {
    const { value: { data } } = await Swal.fire({
      title: '등록된 과제를 취소하시겠습니까?',
      type: 'warning',
      confirmButtonText: '예',
      cancelButtonText:  '아니요',
      showCancelButton: true,
      showCloseButton: true,
      showLoaderOnConfirm: true,
      preConfirm: () => deleteHomework(id)
    });

    console.log(data);

    if (data.result) {
      Swal.fire('취소 되었습니다!');
      return Promise.resolve(true);
    } else {
      Swal.fire('에러가 발생했습니다!');
    }
  } catch (err) {
    Swal.fire('알 수 없는 애러입니다! 개발자에게 문의하세요')
  }
}

export const homeworkAlarm = (homework, imageUrl) => {
    const spacedHomeworkText = homework.replace(/↵/g, "<br/>");
    console.log(spacedHomeworkText)

    Swal.fire({
      imageUrl,
      imageAlt: '과제 이미지',
      imageHeight: 250,
      width: '60rem',
      html: `<text>${spacedHomeworkText}</text>`
    });
}