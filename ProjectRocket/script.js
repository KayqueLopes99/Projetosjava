// script.js

// Define uma chave constante para usar no localStorage. Isso evita erros de digitação.
const STORAGE_KEY = "prompts_storage";

// Objeto 'state' para gerenciar o estado global da aplicação.
// Contém a lista de prompts e o ID do prompt atualmente selecionado.
const state = {
    prompts: [],
    selectedID: null,
};

// Objeto 'elements' para centralizar a seleção de todos os elementos HTML.
// Facilita a manutenção, pois todas as referências ao DOM estão em um só lugar.
const elements = {
    promptTitle: document.getElementById("prompt-title"),
    promptContent: document.getElementById("prompt-content"),
    titleWrapper: document.getElementById("title-wrapper"),
    contentWrapper: document.getElementById("content-wrapper"),
    btnOpen: document.getElementById("btn-open"),
    btnCollapse: document.getElementById("btn-collapse"),
    sidebar: document.querySelector(".sidebar"),
    btnSave: document.getElementById("btn-save"),
    list: document.getElementById("prompt-list"),
    search: document.getElementById("search-input"),
    btnNew: document.getElementById("btn-new"),
    btnCopy: document.getElementById("btn-copy"),
};

/**
 * Atualiza a classe de um elemento 'wrapper' para mostrar ou esconder o placeholder (via CSS).
 * @param {HTMLElement} element - O elemento editável (h1 ou div).
 * @param {HTMLElement} wrapper - O elemento pai que contém o placeholder.
 */
function updateEditableWrapperState(element, wrapper) {
    const hasText = element.textContent.trim().length > 0;
    // Adiciona a classe 'is-empty' se não houver texto, removendo-a caso contrário.
    wrapper.classList.toggle("is-empty", !hasText);
}

// Funções para controlar a visibilidade da sidebar.
function openSidebar() {
    elements.sidebar.classList.add("open");
    elements.sidebar.classList.remove("collapsed");
}

function closeSidebar() {
    elements.sidebar.classList.remove("open");
    elements.sidebar.classList.add("collapsed");
}

// Chama a função de atualização para todos os campos editáveis.
function updateAllEditableStates() {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
}

// Adiciona os 'event listeners' aos campos de título e conteúdo.
// Isso permite que o placeholder seja atualizado em tempo real enquanto o usuário digita.
function attachAllEditableHandlers() {
    elements.promptTitle.addEventListener("input", function () {
        updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
    });

    elements.promptContent.addEventListener("input", function () {
        updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
    });
}

// Evento de clique para o botão 'Salvar'.
elements.btnSave.addEventListener("click", function () {
    // Pega os valores do título e do conteúdo, removendo espaços em branco.
    const title = elements.promptTitle.textContent.trim();
    const content = elements.promptContent.innerHTML.trim();
    const hasContent = elements.promptContent.textContent.trim();

    // Validação para garantir que ambos os campos não estão vazios.
    if (!title || !hasContent) {
        alert("Titulo e contéudo não podem estar vazios.");
        return; // Interrompe a execução da função.
    }

    // Verifica se um prompt está sendo editado (se existe um ID selecionado).
    if (state.selectedID) {
        // Encontra o prompt existente no array 'state.prompts'.
        const existingPrompt = state.prompts.find((p) => p.id === state.selectedID);
        if (existingPrompt) {
            // Atualiza o título e o conteúdo do prompt encontrado.
            existingPrompt.title = title || "Sem Título";
            existingPrompt.content = content || "Sem Conteúdo";
        }
    } else {
        // Se não há ID selecionado, cria um novo prompt.
        const newPrompt = {
            id: Date.now().toString(36), // Gera um ID único baseado no tempo.
            title,
            content,
        };
        // Adiciona o novo prompt no início do array para que apareça no topo da lista.
        state.prompts.unshift(newPrompt);
        // Define o ID do novo prompt como o selecionado.
        state.selectedID = newPrompt.id;
    }

    persist(); // Salva o array de prompts atualizado no localStorage.
    renderList(""); // Re-renderiza a lista completa para refletir as mudanças.
    updateAllEditableStates(); // Atualiza os placeholders.
    alert("Prompt salvo com sucesso!");
});

/**
 * Salva a lista de prompts no localStorage.
 * JSON.stringify converte o array de objetos em uma string JSON.
 */
function persist() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.prompts));
    } catch (error) {
        console.log("Erro ao salvar no localStorage:", error);
    }
}

/**
 * Carrega os prompts salvos do localStorage quando a página é aberta.
 */
function load() {
    try {
        const storedPrompts = localStorage.getItem(STORAGE_KEY);
        // Se houver dados salvos, JSON.parse os converte de volta para um array.
        // Se não, inicializa com um array vazio.
        state.prompts = storedPrompts ? JSON.parse(storedPrompts) : [];
        state.selectedID = null; // Garante que nenhum prompt esteja selecionado ao iniciar.
    } catch (error) {
        console.log("Erro ao carregar do localStorage:", error);
    }
}

/**
 * Cria o HTML para um único item da lista de prompts.
 * @param {object} prompt - O objeto do prompt com id, title e content.
 * @returns {string} - Uma string HTML representando o item da lista.
 */
function createPromptItem(prompt) {
    // Cria um elemento temporário para extrair o texto puro do HTML do conteúdo,
    // evitando que tags HTML apareçam na descrição.
    const tmp = document.createElement("div");
    tmp.innerHTML = prompt.content;
    return `
      <li class="prompt-item" data-id="${prompt.id}" data-action="select">
        <div class="prompt-item-content">
          <span class="prompt-item-title">${prompt.title}</span>
          <span class="prompt-item-description">${tmp.textContent}</span>
        </div>

      <button class="btn-icon" title="Remover" data-action="remove">
        <img src="assets/remove.svg" alt="Remover" class="icon icon-trash" />
      </button>
    </li>
  `;
}

/**
 * Renderiza a lista de prompts na tela, aplicando um filtro de busca.
 * @param {string} filterText - O texto a ser usado para filtrar os prompts pelo título.
 */
function renderList(filterText = "") {
    const filteredPrompts = state.prompts
        // Filtra o array, mantendo apenas os prompts cujo título (em minúsculas)
        // inclui o texto do filtro (também em minúsculas).
        .filter((prompt) =>
            prompt.title.toLowerCase().includes(filterText.toLowerCase().trim())
        )
        // Mapeia cada prompt filtrado para sua representação em HTML.
        .map((p) => createPromptItem(p))
        // Junta todos os HTMLs dos itens em uma única string.
        .join("");

    // Define o HTML da lista com a string gerada.
    elements.list.innerHTML = filteredPrompts;
}

/**
 * Copia o texto do conteúdo do prompt selecionado para a área de transferência.
 */
function copySelected() {
    try {
        const content = elements.promptContent;
        // Verifica se a API Clipboard está disponível no navegador.
        if (!navigator.clipboard) {
            alert("A API de área de transferência não é suportada neste navegador.");
            return;
        }

        // Usa a API para escrever o texto puro (innerText) na área de transferência.
        navigator.clipboard.writeText(content.innerText);
        alert("Conteúdo copiado para a área de transferência!");
    } catch (error) {
        console.log("Erro ao copiar para a área de transferência:", error);
    }
}

// Adiciona um evento de 'input' ao campo de busca.
// A cada letra digitada, a lista é re-renderizada com o filtro.
elements.search.addEventListener("input", function (event) {
    renderList(event.target.value);
});

// Adiciona o evento de clique ao botão 'Copiar'.
elements.btnCopy.addEventListener("click", copySelected);

// Adiciona evento de clique ao botão 'Novo prompt'.
elements.btnNew.addEventListener("click", function () {
    state.selectedID = null; // Limpa o ID selecionado.
    elements.promptTitle.textContent = ""; // Limpa o campo de título.
    elements.promptContent.innerHTML = ""; // Limpa o campo de conteúdo.
    updateAllEditableStates(); // Atualiza os placeholders.
    elements.promptTitle.focus(); // Coloca o foco no campo de título.
});

// Adiciona um único 'event listener' na lista (<ul>) para lidar com cliques
// nos itens (<li>) ou nos botões de remover, usando a delegação de eventos.
elements.list.addEventListener("click", function (event) {
    // Procura pelo botão de remover ou pelo item da lista mais próximo do local do clique.
    const removeBtn = event.target.closest('button[data-action="remove"]');
    const item = event.target.closest('[data-id]');

    if (!item) return; // Se o clique não foi em um item, não faz nada.

    const id = item.getAttribute("data-id");
    state.selectedID = id; // Define o ID do item clicado como selecionado.

    // Se o clique foi no botão de remover.
    if (removeBtn) {
        // Filtra o array de prompts, removendo o item com o ID correspondente.
        state.prompts = state.prompts.filter((p) => p.id !== id);
        renderList(elements.search.value); // Re-renderiza a lista.
        persist(); // Salva a alteração no localStorage.
        return; // Interrompe a execução.
    }

    // Se o clique foi para selecionar um item.
    if (event.target.closest('[data-action="select"]')) {
        const prompt = state.prompts.find((p) => p.id === id); // Encontra o prompt no estado.

        if (prompt) {
            // Preenche os campos de edição com os dados do prompt selecionado.
            elements.promptTitle.textContent = prompt.title;
            elements.promptContent.innerHTML = prompt.content;
            updateAllEditableStates(); // Atualiza os placeholders.
        }
    }
});

/**
 * Função de inicialização da aplicação.
 * É chamada uma vez, quando o script é carregado.
 */
function init() {
    load(); // Carrega os dados do localStorage.
    renderList(""); // Renderiza a lista inicial.
    attachAllEditableHandlers(); // Adiciona os eventos aos campos editáveis.
    updateAllEditableStates(); // Define o estado inicial dos placeholders.

    // Configuração inicial da sidebar.
    elements.sidebar.style.display = "";
    elements.btnOpen.style.display = "none";
    elements.sidebar.classList.remove("open");
    elements.sidebar.classList.remove("collapsed");

    // Adiciona os eventos para abrir e fechar a sidebar.
    elements.btnOpen.addEventListener("click", openSidebar);
    elements.btnCollapse.addEventListener("click", closeSidebar);
}

// Executa a função de inicialização.
init();