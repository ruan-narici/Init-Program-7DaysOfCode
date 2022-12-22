//select title-salutation
const titleSalutation = document.querySelectorAll('.title-salutation');
// select title-game-questions
const titleGameQuestion = document.querySelectorAll('.title-game-questions');
//buttons
const buttons = document.querySelectorAll('.button-game');
//stages
const stage = document.querySelectorAll('form');
//othersTec
const othersTec = document.querySelector('#others-tec');
let othersTecLeg = '';

//GetNameUser and Execute
const nameUser = prompt('Qual o seu nome?');
titleSalutation[0].innerHTML = `Olá, ${nameUser}!`;
//important execution

//next-question
next = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const hideForm = () => {stage[i].classList.add('hide');}
            const showNextForm = () => {stage[i+1].classList.remove('hide');}
            const showNextNextForm = () => {stage[i+2].classList.remove('hide');}
            //stage1
            if (i == 0) {
                hideForm();
                showNextForm();
            }
            //stage2
            if (i == 1) {
                if (document.querySelector('#front-end').checked) {
                    hideForm();
                    showNextForm();
                }
                else if (document.querySelector('#back-end').checked) {
                    hideForm();
                    showNextNextForm();
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage3-front-end
            if (i == 2) {
                if (document.querySelector('#react').checked) {
                    hideForm();
                    showNextNextForm();
                   
                }
                else if (document.querySelector('#vue').checked) {
                    hideForm();
                    showNextNextForm();
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage3-back-end
            if (i == 3) {
                if (document.querySelector('#c').checked) {
                    hideForm();
                    showNextForm();
                   
                }
                else if (document.querySelector('#java').checked) {
                    hideForm();
                    showNextForm();
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage4
            if (i == 4) {
                if (document.querySelector('#especializar').checked) {
                    hideForm();
                    showNextForm();
                    titleGameQuestion[i+1].innerHTML = `Você fez uma ótima escolha ao optar por se especializar na área!`;
                }
                else if (document.querySelector('#fullstack').checked) {
                    hideForm();
                    showNextForm();
                    titleGameQuestion[i+1].innerHTML = `Você fez uma ótima escolha ao optar por se tonar um FullStack!`;
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage5
            if (i == 5) {
                hideForm();
                showNextForm();
            }
            //stage6
            if (i == 6) {
                if (document.querySelector('#yes-stg-6').checked) {
                    hideForm();
                    showNextNextForm();
                }
                else if (document.querySelector('#no-stg-6').checked) {
                    hideForm();
                    showNextForm();
                    titleSalutation[1].innerHTML = `Está bem, ${nameUser}!`
                    buttons[i+1].style.display = 'none';
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
            //stage7-no
            if (i == 7) {
                //endGame
            }
            //stage7-yes-loop
            if (i == 8) {
                othersTecLeg += othersTec.value + ', ';
                document.querySelector('.othersTecLeg').innerHTML = othersTecLeg;
                document.querySelector('.title-all-tec').innerHTML = `Lista de tecnologias a serem aprendidas:`;
                hideForm();
                showNextForm();
            }
            //stage8-loop-or-end
            if (i == 9) {
                if (document.querySelector('#yes-stg-8').checked) {
                    hideForm();
                    stage[i-1].classList.remove('hide');
                    othersTec.value = '';
                }
                else if (document.querySelector('#no-stg-8').checked) {
                    hideForm();

                    stage[7].classList.remove('hide');
                    titleSalutation[1].innerHTML = `Está bem, ${nameUser}!`
                    buttons[7].style.display = 'none';
                }
                else {
                    alert('Selecione uma opção!');
                }
            }
        })
    }
}

//Execute
next();
