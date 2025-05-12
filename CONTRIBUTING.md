# Guia de Contribuição

Obrigado por considerar contribuir para o Repositório de Palestras! Este documento fornece diretrizes para ajudar no processo de contribuição.

## Como contribuir

### Adicionando uma nova palestra

1. **Crie um novo arquivo HTML**: 
   - Crie um novo arquivo HTML em `palestras/nome-da-palestra.html`
   - Use o template abaixo como base

2. **Adicione um card na página principal**:
   - Abra o arquivo `index.html`
   - Adicione um novo card na seção `palestras-grid` seguindo o formato existente

3. **Envie um Pull Request**:
   - Crie um branch com um nome descritivo
   - Faça commit das suas alterações
   - Envie um Pull Request para o repositório principal

### Template para nova palestra

Use este template como base para criar uma nova página de palestra:

```html
<!DOCTYPE html>
<html lang="pt-br" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Título da Palestra] | Repositório de Palestras</title>
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/theme.css">
    <style>
        .recursos-lista {
            margin-top: 2rem;
        }
        
        .recurso-item {
            background-color: var(--card-bg);
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .recurso-item h3 {
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }
        
        .tag {
            background-color: var(--accent-color);
            color: var(--btn-text);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.85rem;
        }
        
        .voltar {
            margin-bottom: 2rem;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <nav>
                <h1>[Título da Palestra]</h1>
                <div class="theme-switch">
                    <label class="switch">
                        <input type="checkbox" id="theme-toggle">
                        <span class="slider round"></span>
                    </label>
                    <span id="theme-label">Modo Claro</span>
                </div>
            </nav>
        </header>

        <main>
            <a href="../index.html" class="voltar">&larr; Voltar para a página inicial</a>
            
            <section class="intro">
                <h2>[Subtítulo ou descrição breve]</h2>
                <p>Apresentação realizada em [data]</p>
                <p>Palestrante: [Nome do Palestrante]</p>
            </section>

            <section class="recursos-lista">
                <h2>Links e Recursos</h2>
                
                <!-- Adicione seus recursos aqui -->
                <div class="recurso-item">
                    <h3>[Categoria 1]</h3>
                    <div class="tags">
                        <span class="tag">[Tag 1]</span>
                        <span class="tag">[Tag 2]</span>
                    </div>
                    <ul>
                        <li><a href="[URL]" target="_blank">[Descrição do Link]</a></li>
                        <!-- Adicione mais links conforme necessário -->
                    </ul>
                </div>
                
                <!-- Repita para outras categorias -->
            </section>
        </main>

        <footer>
            <p>Repositório de Palestras &copy; 2025</p>
            <p>Contribua no <a href="https://github.com/seu-usuario/seu-repositorio" target="_blank">GitHub</a></p>
        </footer>
    </div>

    <script src="../assets/js/theme-toggle.js"></script>
</body>
</html>
```

## Diretrizes para contribuição

- Mantenha a consistência com o design existente
- Certifique-se de que todos os links funcionam corretamente
- Inclua todas as informações relevantes sobre a palestra
- Use nomes de arquivos descritivos e em minúsculas, separados por hífen
- Teste as alterações localmente antes de enviar

## Reportando problemas

Se você encontrar um problema ou tiver uma sugestão, por favor, abra uma issue descrevendo:

1. O problema ou sugestão
2. Passos para reproduzir o problema (se aplicável)
3. Comportamento esperado
4. Screenshots (se aplicável)

## Perguntas?

Se você tiver alguma dúvida sobre como contribuir, sinta-se à vontade para abrir uma issue com sua pergunta.