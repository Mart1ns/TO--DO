export class Temporizador {
    #elemento;
    #segundos;
    #timer;
  
    constructor(elementoId) {
      this.#elemento = document.getElementById(elementoId);
      this.#segundos = 0;
      this.#timer = null;
    }
  
    #atualizarTempo() {
      const minutos = Math.floor(this.#segundos / 60);
      const segundosRestantes = this.#segundos % 60;
      const tempoFormatado = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
      
      this.#elemento.textContent = tempoFormatado;
    }
  
    iniciar() {
      this.#timer = setInterval(() => {
        this.#segundos++;
        this.#atualizarTempo();
      }, 1000);
    }
  
    pausar() {
      clearInterval(this.#timer);
    }
  
    reiniciar() {
      this.#segundos = 0;
      this.#atualizarTempo();
    }
  }

  const temporizador = new Temporizador('temporizador'); 
  temporizador.iniciar();