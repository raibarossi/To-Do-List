# Projeto: Lista de Tarefas

Este projeto é uma implementação de uma lista de tarefas interativa, desenvolvida com HTML, CSS e JavaScript.

### **HTML (`index.html`)**

* **`<head>`:** Contém as tags padrões essenciais, o título da página e o link para o arquivo CSS.
* **`<div class="input">`:** É o container que envolve a seção de entrada de novas tarefas.
* **`<form id="form-tarefa">`:** O elemento principal para a entrada de dados do usuário, contendo o `input` para o texto e o `button` de envio.
* **`<div class="list">`:** Container que agrupa a seção onde as tarefas são exibidas.
* **`<ul id="list-tarefas">`:** A lista não ordenada que serve como o container onde os itens de tarefa (`<li>`) são adicionados pelo JavaScript.

### **JavaScript (`script.js`)**

* **Seleção de Elementos:** No início do script, os elementos essenciais são selecionados e armazenados em constantes para fácil acesso.
* **Manipulação de Eventos:** Um `event listener` é adicionado ao formulário para controle do evento `submit`. A função `event.preventDefault()` é usada para impedir que a página recarregue ao enviar o formulário.
* **Criação de Elementos:** Quando o formulário é enviado, o script captura o texto do input, cria todos os elementos HTML necessários para uma nova tarefa (`<li>`, `<input type="checkbox">`, `<span>`), e os adiciona à lista `<ul>` na página.