

## Botões de Idioma com Estilo Neo-Brutalism Moderno

### Objetivo
Transformar os botões de seleção de idioma na página inicial para um estilo mais moderno e interativo, seguindo o padrão neo-brutalism já usado nos filtros de projetos.

### Design Visual

**Estado Normal:**
- Borda rosa (3px) usando a cor `accent` do design system
- Sombra brutal rosa (4px 4px)
- Fundo branco com texto escuro
- Fonte em negrito e uppercase

**Estado Hover (efeito "pressionado"):**
- Sombra removida
- Botão desloca para baixo/direita (translate 4px)
- Cria a ilusão de que o botão foi pressionado
- Transição suave (150ms)

### Referência Visual
O comportamento será idêntico aos botões de filtro "Marketing Digital" e "Análise de Dados" na seção de Projetos - quando você passa o mouse, parece que o botão afunda.

---

## Detalhes Técnicos

### Arquivo a ser modificado
`src/pages/Welcome.tsx`

### Mudanças

1. **Remover** o uso do componente `Button` padrão
2. **Criar** botões customizados com classes Tailwind:
   - `border-3 border-accent` - borda rosa de 3px
   - `shadow-[4px_4px_0px_hsl(320,80%,55%)]` - sombra rosa brutal
   - `hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]` - efeito pressionado
   - `transition-all duration-150` - animação suave
   - `font-bold uppercase tracking-wide` - tipografia marcante
   - `px-8 py-4` - padding generoso

### Código Final dos Botões

```tsx
<button
  onClick={() => handleLanguageSelect("pt")}
  className="min-w-[180px] px-8 py-4 bg-background text-foreground font-bold uppercase tracking-wide border-3 border-accent shadow-[4px_4px_0px_hsl(320,80%,55%)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
>
  Português
</button>

<button
  onClick={() => handleLanguageSelect("en")}
  className="min-w-[180px] px-8 py-4 bg-background text-foreground font-bold uppercase tracking-wide border-3 border-accent shadow-[4px_4px_0px_hsl(320,80%,55%)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
>
  English
</button>
```

### Resultado Esperado
- Botões com visual marcante e moderno
- Borda e sombra na cor rosa (accent)
- Ao passar o mouse, o botão "afunda" criando feedback visual
- Consistente com o estilo neo-brutalism do resto do site

