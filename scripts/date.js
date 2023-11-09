// Classe para obter informações sobre a data atual
class Data {
    constructor() {
        this.dataAtual = new Date();
    }

    // Obtém o dia da semana (0 a 6, onde 0 é Domingo e 6 é Sábado)
    getDia() {
        return this.dataAtual.getDay();
    }

    // Obtém o mês (0 a 11, onde 0 é Janeiro e 11 é Dezembro)
    getMes() {
        return this.dataAtual.getMonth();
    }

    // Obtém o ano
    getAno() {
        return this.dataAtual.getFullYear();
    }
}

// Função que verifica o dia da semana e retorna uma mensagem personalizada
function verificaSemana(dia) {
    if (dia === 1) {
        return "Segunda-feira, o início de uma nova semana. Vamos fazer dela incrível!";
    } else if (dia === 2) {
        return "Terça-feira, mantenha o foco nos seus objetivos. Você está no caminho certo!";
    } else if (dia === 3) {
        return "Quarta-feira, o meio da semana chegou. Você está indo muito bem, continue assim!";
    } else if (dia === 4) {
        return "Quinta-feira, quase lá! Continue perseverando, o final de semana está chegando.";
    } else if (dia === 5) {
        return "Sexta-feira, a recompensa pelo seu trabalho está próxima. Continue forte!";
    } else if (dia === 6) {
        return "Sábado, tempo de relaxar e aproveitar o merecido descanso.";
    } else if (dia === 0 || dia === 7) {
        return "Domingo, um dia para recarregar energias e se preparar para a próxima semana.";
    } else {
        return "Ops, parece que inseriu um número de dia não válido. Lembre-se, de 1 a 7, por favor!";
    }
}

// Função principal que exibe a mensagem sobre o dia da semana no HTML e no console
function mainData() {
    // Instância da classe Data
    const minhaData = new Data();
    // Obtenção do dia, mês e ano
    const dia = minhaData.getDia();
    const mes = minhaData.getMes();
    const ano = minhaData.getAno();

    // Chamada da função para verificar o dia da semana
    const diaSemana = verificaSemana(dia);

    // Atualização do elemento HTML com a mensagem
    const span = document.getElementById('data');
    span.innerHTML = '';
    const texto = document.createElement('p');
    texto.textContent = `${diaSemana}`;
    span.appendChild(texto);

    // Exibição da mensagem no console
    console.log(`Hoje é ${diaSemana}, dia ${dia} de ${mes} de ${ano}.`);
}
