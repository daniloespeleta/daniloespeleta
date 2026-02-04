
# Plano: Adicionar Google Analytics 4

Vou adicionar o código de rastreamento do Google Analytics 4 (GA4) com o ID **G-LTEJKDQJ4N** ao seu site.

---

## O que será feito

O snippet do GA4 será inserido no arquivo `index.html`, logo após a abertura da tag `<head>`. Esta é a posição recomendada pelo Google para garantir que o rastreamento comece o mais cedo possível durante o carregamento da página.

---

## Arquivo a ser modificado

**`index.html`** - Adicionar os scripts do GA4 no início do `<head>`

---

## Detalhes técnicos

O código a ser adicionado:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LTEJKDQJ4N"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LTEJKDQJ4N');
</script>
```

O script será posicionado imediatamente após `<head>` e antes das outras meta tags, seguindo as boas práticas do Google para garantir rastreamento preciso.

---

## Resultado esperado

Após a publicação, o Google Analytics começará a coletar dados de visitantes do seu site. Você poderá visualizar métricas como:
- Número de visitantes
- Páginas mais acessadas
- Origem do tráfego
- Tempo de permanência
- Dispositivos utilizados

Os dados aparecerão no seu painel do Google Analytics em **24-48 horas** após a implementação.
