// 굳이 프로미스는 필요 없을것 같은데...

// convert Agenda(library) standard date.
const convertJobDate = msg => {
    const splitMessage = msg.split(' ');

    return `tomorrow at ${splitMessage[1]}`;
}

// check user is our mentor
const reconizeMentor = user => {
    return new Promise((resolve, reject) => {
        // confirm vaild user !!!
        user ? resolve(true) : resolve(false)
    })
}

// check message is vaild homework
// msg : 과제/내일 6pm/오늘 과제는.........
const recognizeMessage = async (user, msg) => {
    const isVaildMentor = await reconizeMentor(user);
    if (!isVaildMentor) {
        return Promise.resolve({
            status: {
                userVaild: false, homeworkMsg: false,
            },
            homework: {
                contents: null, date: null
            }
        });
    };

    const splitMessage = msg.split('/');
    if (splitMessage[0] !== '과제') {
        return Promise.resolve({
            status: {
                userVaild: true, homeworkMsg: false,
            },
            homework: {
                contents: null, date: null
            }
        });
    };

    const date = convertJobDate(splitMessage[1]);
    const contents = splitMessage[2];
    return Promise.resolve({
        status: {
            userVaild: true, homeworkMsg: true,
        },
        homework: {
            contents, date
        }
    });
}

module.exports = recognizeMessage;