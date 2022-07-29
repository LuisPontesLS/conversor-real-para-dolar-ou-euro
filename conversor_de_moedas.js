//1.Pegar o que é clicado;
const button = document.getElementById('converter-button')//AQUELE BOTÃO (ATRAVÉS DO 'ID') AGORA É UMA 'VAR' QUE POSSO USAR AQUI NO 'JS'
const select = document.getElementById('currency-select')//MAPEAMENTO

const dolar = 5.2
const euro = 5.9

//==============================================================================

//3.O que fazer quando clicado (função)
const convert_values = () => {
    //4.Pegar o valor do input
    const input_reais = document.getElementById('input-real').value //PARA NÃO PEGAR O ELEMENTO TODO, SÓ O VALOR

    //7. Atualizar o valor (abaixo da bandeira do Brasil)
    const real_value_fixed = document.getElementById('real-value') //PEGUEI AQUELE VALOR FIXO DE R$ 10.000

    //7.1 SUBSTITUO PELO VALOR DIGITADO NO INPUT:
    real_value_fixed.innerHTML = new Intl.NumberFormat('pt-BR', {//9.Formatando valor de exibição como moedas (usando biblio)
        style: 'currency',
        currency: 'BRL'
    }).format(input_reais);
    ;

    //8.Atualizar o valor abaixo da bandeira do EUA
    const converted_value_shown = document.getElementById('converted-value')//PEGUEI AQUELE VALOR FIXO DE USD 2.000

    //9.Formatando valor de exibição como moedas (usando biblio)
    //CONVERTENDO PELO VALOR DO DOLAR
    if (select.value === 'US$ Dólar americano') {
        converted_value_shown.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(input_reais / dolar);
        ;
    }


    //CONVERTENDO PELO VALOR DO EURO
    if (select.value === '€ Euro') {
        converted_value_shown.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(input_reais / euro);
        ;
    }

    //5.Converter o valor / 6.Mostrar o valor convertido
    console.log((input_reais / dolar).toFixed(2))

}
//==========================================================================

//FUNÇÃO PARA MUDAR BANDEIRA E VALOR CONVERTIDO
change_currency = () => {
    const currency_name = document.getElementById('currency-name')
    const currency_img = document.getElementById('currency-img')

    //MUDANDO A BANDEIRA PARA EUA 
    if (select.value === 'US$ Dólar americano') {
        currency_name.innerHTML = 'Dólar americano'
        currency_img.src = './img/eua-pq.png'
    }

    //MUDANDO A BANDEIRA PARA EURO 
    if (select.value === '€ Euro') {
        currency_name.innerHTML = 'Euro'
        currency_img.src = './img/euro-simbol.png'
    }
    convert_values()
}
//2.Ouvir o evento (clique), sei quando (no caso, botão) é clicado
button.addEventListener('click', convert_values) /*CRIANDO UM EVENTO PARA: BOTÃO. OUVIR. QUANDO 'CLICAR'
SEGUNDO ARGUMENTO: SOBRE ESS EVENTO DE 'CLICAR', SERÁ FEITA A FUNÇÃO ACIMA
ENTÃO: ASSIM QUE O BOTÃO É CLICADO, ELE CHAMA A FUNÇÃO QUE É 
'convert_values' (ITEM 3, +/- LINHA 11)*/

/*10.Fazer a conversão ser aplicada para Euro
2.x.Ouvir o evento (clique), sei quando (no caso, botão) é clicado
E CHAMA A FUNÇÃO 'change_currency' +/- LINHA 55*/
select.addEventListener('change', change_currency)
