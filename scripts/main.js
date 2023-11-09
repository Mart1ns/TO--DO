class Tarefa {
  constructor(nome, prioridade, descricao) {
    this.nome = nome;
    this.prioridade = prioridade;
    this.descricao = descricao;
    this.status = false;
  }
}

class Lista {
  constructor() {
    this.lista = [];
    this.contador = 0;
    this.carregarDoLocalStorage();
  }

  salvarNoLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(this.lista));
  }

  carregarDoLocalStorage() {
    const localData = localStorage.getItem('tarefas');
    this.lista = localData ? JSON.parse(localData) : [];
    this.contador = this.lista.length;
  }

  adicionarTarefa(nome, prioridade, descricao) {
    if (nome && prioridade) {
      const tarefaLista = new Tarefa(nome, prioridade, descricao);
      this.lista.push(tarefaLista);
      this.contador += 1;
      this.exibirTarefas();
      this.salvarNoLocalStorage();
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  exibirTarefas() {
    const tarefasLista = document.getElementById('tarefasLista');
    tarefasLista.innerHTML = '';

    this.lista.forEach((value, index) => {
      const divTarefa = document.createElement('div');
      divTarefa.className = 'tarefa-item';

      const pNome = document.createElement('p');
      pNome.textContent = value.nome;
      divTarefa.appendChild(pNome);

      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = `Descrição: ${value.descricao}, Prioridade: ${value.prioridade}`;

      divTarefa.appendChild(tooltip);

      const buttonConcluir = document.createElement('button');
      buttonConcluir.textContent = value.status ? 'Desconcluir' : 'Concluir';
      buttonConcluir.id = 'botaoTarefa';
      buttonConcluir.style.display = 'none';
      buttonConcluir.addEventListener('click', () => {
        value.status = !value.status;
        divTarefa.style.textDecoration = value.status ? 'line-through' : 'none';
        buttonConcluir.textContent = value.status ? 'Desconcluir' : 'Concluir';
        this.salvarNoLocalStorage();
      });
      divTarefa.appendChild(buttonConcluir);

      const buttonExcluir = document.createElement('button');
      buttonExcluir.textContent = 'Excluir';
      buttonExcluir.id = 'botaoTarefa';
      buttonExcluir.style.display = 'none';
      buttonExcluir.addEventListener('click', () => {
        this.lista.splice(index, 1);
        this.contador -= 1;
        this.exibirTarefas();
        this.salvarNoLocalStorage();
      });
      divTarefa.appendChild(buttonExcluir);

      divTarefa.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
        buttonConcluir.style.display = 'block';
        buttonExcluir.style.display = 'block';
      });

      divTarefa.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
        buttonConcluir.style.display = 'none';
        buttonExcluir.style.display = 'none';
      });

      tarefasLista.appendChild(divTarefa);
    });

    const contador = document.createElement('p');
    contador.textContent = `Total de Tarefas: ${this.contador}`;
    contador.className = 'contador-tarefas';

    tarefasLista.appendChild(contador);
  }

  limparCampos() {
    document.getElementById('nomeTarefaModal').value = '';
    document.getElementById('descricaoTarefaModal').value = '';
    document.getElementById('prioridadeModal').value = 'baixa';
  }
}

const tarefas = new Lista();

document.addEventListener('DOMContentLoaded', () => {
  tarefas.exibirTarefas();
});

document.addEventListener('online', () => {
  tarefas.carregarDoLocalStorage();
  tarefas.exibirTarefas();
});

document.addEventListener('offline', () => {
  console.log('Modo offline ativado. Conecte-se à internet para sincronizar.');
});

function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  tarefas.exibirTarefas();
  tarefas.limparCampos();
}

function addTask() {
  const nomeTarefa = document.getElementById('nomeTarefaModal').value;
  const descricaoTarefa = document.getElementById('descricaoTarefaModal').value;
  const prioridadeTarefa = document.getElementById('prioridadeModal').value;
  tarefas.adicionarTarefa(nomeTarefa, prioridadeTarefa, descricaoTarefa);
  closeModal();
}
