const section_1 = document.querySelector('.section-home-1');
const section_2 = document.querySelector('.section-home-2');

const form_2 = document.querySelector('.form-home-2');

const getName = document.querySelector('#name-user');
const getYears = document.querySelector('#years-user');
const getLang = document.querySelector('#lang-program-user');

const msg_span_1 = document.querySelector('.end-msg-1');
const msg_span_2 = document.querySelector('.end-msg-2');

const compl_span_1 = document.querySelector('.resp-lang-program-user');

const radioY = document.querySelector('#answ-y');
const radioN = document.querySelector('#answ-n');

const btn1 = document.querySelector('#submit-home-1');
const btn2 = document.querySelector('#submit-home-2');

getElements_1 = () => {
        btn1.addEventListener('click', () => {
            if (getName.value == '' ||
                getYears.value == '' ||
                getLang.value == '') {
                    getName.style.backgroundColor = '#FFFFFF'
                    getYears.style.backgroundColor = '#FFFFFF'
                    getLang.style.backgroundColor = '#FFFFFF'
                    alert('Preencha todos os campos!');
                    if (getName.value == '') {
                            getName.style.backgroundColor = '#FBEAFF'
                    }
                    if (getYears.value == '') {
                            getYears.style.backgroundColor = '#FBEAFF'
                    }
                    if (getLang.value == '') {
                            getLang.style.backgroundColor = '#FBEAFF'
                    }
            }
            else {
                const name = getName.value;
                const years = getYears.value;
                const lang = getLang.value;

                section_1.classList.add('hide');
                section_2.classList.remove('hide');

                msg_span_1.innerHTML = `
                Olá ${name}, você tem ${years} anos e já está aprendendo ${lang}!
                `
                compl_span_1.innerHTML = `
                ${lang}
                `
            }
        })
}

getElements_2 = () => {
    btn2.addEventListener('click', () => {
        if (radioY.checked) {
            msg_span_2.innerHTML = `
            Muito bom! Continue estudando e você terá muito sucesso.
            `
            form_2.classList.add('hide');
            msg_span_2.classList.remove('hide');            
        }
        else if (radioN.checked) {
            msg_span_2.innerHTML = `
            Ahh que pena... Já tentou aprender outras linguagens?
            `
            form_2.classList.add('hide');
            msg_span_2.classList.remove('hide');            
        }
    })
}

getElements_1();
getElements_2();
