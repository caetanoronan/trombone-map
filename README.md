# Mapa-Base do Trombone 🎺

Um mapa visual e interativo para estudo de escalas e posições no trombone, desenvolvido como ferramenta pedagógica para facilitar a prática diária.

## Características

✨ **Interativo**: Selecione escalas e veja o caminho destacado no mapa.  
🎵 **Escalas Maiores**: Todas as tonalidades com posições e registros específicos do trombone.  
⏱️ **Timer e Metrônomo**: Ferramentas integradas para sessões de estudo focadas.  
📋 **Checklist e Desafio**: Acompanhamento diário de progresso.  
🌓 **Tema Escuro/Claro**: Interface adaptável com alto contraste.  
📱 **Responsivo**: Otimizado para celular, tablet e desktop.  

## Estrutura do Projeto

```
Musicas_para_brincar/
├── index.html        # Mapa interativo principal
├── relatorio.html    # Documentação e guias pedagógicos
├── README.md         # Este arquivo
└── .gitignore        # Exceções para versionamento
```

## Como Usar

### Localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/trombone-map.git
   ```
2. Abra `index.html` no navegador.

### Publicado no GitHub Pages
Acesse: `https://seu-usuario.github.io/trombone-map`

## Navegação

- **Mapa-Base** (`index.html`): Interface principal com escala selecionável, timer, metrônomo e checklist.
- **Relatório** (`relatorio.html`): Documentação, guia da vara, tabela de posições e escalas descritivas.

## Metodologia de Estudo

O mapa reflete a prática real do trombone de vara:

- **Si natural em 7ª posição**: Todas as escalas que contêm Si natural (C, G, D, A, E, F#, B major) mostram Si destacado em 7ª posição, conforme a metodologia de ensino estudada.
- **Posições de referência**: Cada nota tem uma posição primária e alternativas harmônicas sugeridas.
- **Estudo em blocos curtos**: Timer integrado para sessões de 10–15 minutos focadas.

## Paleta de Cores (BuGn)

As notas são coloridas conforme sua altura (pitch):
- Azuis escuros para notas graves
- Verdes para notas médias
- Verdes claros para notas agudas

As funções harmônicas (tônica, terça, quinta, sensível) têm cores e ícones distintivos.

## Funcionalidades

### Mapa Interativo
- Seletor de escalas maiores (Dó a Si)
- Destaque automático do caminho da escala
- Alternativas harmônicas com camada avançada
- Clique em células para adicionar alternativas personalizadas

### Ferramentas de Estudo
- **Metrônomo**: Selecione BPM e reproduza cliques sonoros
- **Timer**: Configure duração de sessão (padrão 10 min)
- **Checklist**: Acompanhe notas estudadas
- **Desafio**: Proposta de foco para cada sessão

### Acessibilidade
- Tema claro/escuro com persistência local
- Alto contraste para melhor legibilidade
- Legendas de funções harmônicas
- Suporte a navegação por teclado

## Tecnologia

- **HTML5** + **CSS3 Grid**: Layout responsivo sem dependências externas
- **Vanilla JavaScript**: Lógica de interação e estado local (localStorage)
- **Web Audio API**: Metrônomo e referência sonora
- **Sem frameworks**: Código leve e rápido para celular

## Deployment no GitHub Pages

1. **Clone ou faça fork** deste repositório
2. **Vá para Settings > Pages** (no GitHub)
3. **Selecione "Deploy from a branch"** com branch `main`
4. Acesse a URL fornecida após alguns minutos

## Contribuições

Sugestões de escalas, posições alternativas ou melhorias pedagógicas são bem-vindas! Abra uma *issue* ou *pull request*.

## Licença

Aberto para uso educacional e pessoal.

---

**Desenvolvido** para estudantes e professores de trombone de vara.  
**Última atualização**: Maio de 2026
