# INFM — Portal independente de informação meteorológica

Projeto independente em HTML5, CSS3, JavaScript puro e um backend Node.js pequeno para previsão meteorológica e integração segura com OpenRouter. O INFM não é órgão do Governo Federal e não representa o INMET.

## Conteúdo
- Página inicial e notícias meteorológicas com fontes identificadas
- Alertas, radar e monitoramento severo em modo demonstrativo
- Previsão atual e para cinco dias por cidade, via Open-Meteo
- Assistente meteorológico contextual via OpenRouter
- Painel de radar meteorológico em demonstração
- Monitoramento de eventos severos
- Mapa do Brasil com estados selecionáveis

## Execução local
Requer Node.js 20 ou superior. A previsão usa a API pública do Open-Meteo; o assistente também requer uma chave OpenRouter:

```sh
export OPENROUTER_API_KEY="sua-chave-nova"
npm start
```

Acesse http://localhost:3000. Opcionalmente, defina `OPENROUTER_MODEL` (padrão: `openai/gpt-4o-mini`) e `PORT`. Nunca coloque a chave em `script.js`, HTML ou em variáveis públicas do frontend.

## Publicação
O GitHub Pages hospeda arquivos estáticos. A previsão por cidade consulta Open-Meteo diretamente no navegador quando o endpoint Node não está disponível; o assistente de IA requer um host que execute Node.js e a variável secreta `OPENROUTER_API_KEY`. Opcionalmente, configure `PUBLIC_SITE_URL` nesse serviço. Nunca publique a chave no repositório.

Se uma chave real foi compartilhada em conversa, revogue-a no OpenRouter e gere outra antes de configurar o servidor.

## Arquivos principais
- index.html
- style.css
- script.js

## Dados e limitações
Previsão e dados atuais são obtidos do Open-Meteo e não substituem fontes oficiais. O assistente interpreta esses dados, mas não emite alertas oficiais. Alertas, radar, mapa e monitoramento severo permanecem demonstrativos. As consultas têm limites básicos por endereço IP; para uso público em escala, configure também controles de acesso e limites no provedor de hospedagem/OpenRouter. As preferências continuam salvas somente no navegador.
