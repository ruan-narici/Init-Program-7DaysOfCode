printQuestion = (x) => {
    document.querySelector('#question').innerHTML = `
    <span>
    <h1>Chegou a hora, Ruan Narici Mendonça! Você vai começar a sua jornada no #7DaysOfCode ;)</h1>
        Este primeiro dia é super importante! Ao final dele, você terá um novo conhecimento que é essencial para os próximos desafios.
        <br>Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!
        <br>Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.
        <br>Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.
        <br>A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….
        <br>Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:
        <br>console.log( false == '0' );
        <br>console.log( null == undefined );
        <br>console.log( "${x}" == 0 );
        <br>console.log( ' ' == 0 );
        <br>O que não faz necessariamente muito sentido.
        <br>(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção "Inspecionar" e a aba "Console". Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).
        <br>Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:
        <br>let numeroUm = 1
        <br>let stringUm = '1'
        <br>let numeroTrinta = 30
        <br>let stringTrinta = '30'
        <br>let numeroDez = 10
        <br>let stringDez = '10'
        <br>if (COMPARAR O numeroUm e a stringUm) {
        <br>console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
        <br>} else {
        <br>console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
        <br>}
        <br>if (COMPARAR O numeroTrinta e a stringTrinta) {
        <br>console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
        <br>} else {
        <br>console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
        <br>}
        <br>if (COMPARAR O numeroDez e a stringDez) {
        <br>console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
        <br>} else {
        <br>console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
        <br>}
        </span>
    `;
}

printQuestion("/t/r/n");

// Execute
document.querySelector('#execute').addEventListener('click', () => {

//Answer

    calc = () => {
        let numUm = 1;
        let stringUm = '1';
        let numTrinta = 30;
        let stringTrinta = '30';
        let numOnze = 11;
        let stringDez = '10';
        let numCem = 100;
        let numCem_2 = 100;

        let num = [numUm, numOnze, numTrinta, numCem];
        let string = [stringUm, stringDez, stringTrinta, numCem_2]

        for (let i = 0; i < string.length; i++) {

            if (num[i] === string[i]) {
                document.querySelector(`.show${i}`).innerHTML = `<br><strong>As variáveis ${num[i]} e ${string[i]} tem o mesmo valor e são do mesmo tipo</strong><br>`
            }

            else if (num[i] == string[i]) {
                document.querySelector(`.show${i}`).innerHTML = `<br><strong>As variáveis ${num[i]} e ${string[i]} tem o mesmo valor, mas são de tipos diferentes</strong><br>`
            }

            else {
                document.querySelector(`.show${i}`).innerHTML = `<br><strong>As variáveis ${num[i]} e ${string[i]} não tem o mesmo valor</strong><br>`
            }
        }
    }

calc()

    document.querySelector('#question').innerHTML = `
    <h1>Resultado:</h1>

    <br>let numUm = 1;
    <br>let stringUm = '1';<br>
    <br>let numTrinta = 30;
    <br>let stringTrinta = '30';<br>
    <br>let numOnze = 11;
    <br>let stringDez = '10';<br>
    <br>let numCem = 100;
    <br>let numCem_2 = 100;
    `;
})