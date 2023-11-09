// Definindo a classe Tarefa para representar uma tarefa
class Tarefa {
  constructor(nome, prioridade, descricao) {
    this.nome = nome;
    this.prioridade = prioridade;
    this.descricao = descricao;
    this.status = false; // Indica se a tarefa está concluída ou não
  }
}

// Classe Lista para gerenciar a lista de tarefas
class Lista {
  constructor() {
    this.lista = []; // Array que armazena as tarefas
    this.contador = 0; // Contador de tarefas
    this.carregarDoLocalStorage(); // Carrega as tarefas salvas no armazenamento local
  }

  // Salva a lista de tarefas no armazenamento local
  salvarNoLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(this.lista));
  }

  // Carrega as tarefas do armazenamento local
  carregarDoLocalStorage() {
    const localData = localStorage.getItem('tarefas');
    this.lista = localData ? JSON.parse(localData) : [];
    this.contador = this.lista.length;
  }

  // Adiciona uma nova tarefa à lista
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

  // Exibe as tarefas na interface
  exibirTarefas() {
    // ... (código para exibir as tarefas no HTML)
  }

  // Limpa os campos do modal após adicionar uma tarefa
  limparCampos() {
    document.getElementById('nomeTarefaModal').value = '';
    document.getElementById('descricaoTarefaModal').value = '';
    document.getElementById('prioridadeModal').value = 'baixa';
  }
}

// Instância da classe Lista para gerenciar as tarefas
const tarefas = new Lista();

// Evento que é acionado quando o conteúdo HTML é carregado
document.addEventListener('DOMContentLoaded', () => {
  tarefas.exibirTarefas();
});

// Evento que é acionado quando o aplicativo está online
document.addEventListener('online', () => {
  tarefas.carregarDoLocalStorage();
  tarefas.exibirTarefas();
});

// Evento que é acionado quando o aplicativo está offline
document.addEventListener('offline', () => {
  console.log('Modo offline ativado. Conecte-se à internet para sincronizar.');
});

// Função para abrir o modal
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
  tarefas.exibirTarefas();
  tarefas.limparCampos();
}

// Função para adicionar uma nova tarefa
function addTask() {
  const nomeTarefa = document.getElementById('nomeTarefaModal').value;
  const descricaoTarefa = document.getElementById('descricaoTarefaModal').value;
  const prioridadeTarefa = document.getElementById('prioridadeModal').value;
  tarefas.adicionarTarefa(nomeTarefa, prioridadeTarefa, descricaoTarefa);
  closeModal();
}
