

## Corrigir Hover dos Botões de Idioma

### Problema
Os botões de seleção de idioma na página inicial estão faltando as classes de mudança de cor no hover. Eles movem e perdem a sombra, mas o fundo continua branco.

### Solução
Adicionar as classes `hover:bg-foreground hover:text-background` aos dois botões e corrigir a borda para `border-foreground`.

---

## Detalhes Técnicos

### Arquivo a modificar
`src/pages/Welcome.tsx`

### Mudança nas classes dos botões

**De:**
```
border-3 border-border shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
```

**Para:**
```
border-3 border-foreground shadow-brutal hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
```

### Classes completas finais
```
min-w-[180px] px-8 py-4 bg-background text-foreground font-bold uppercase tracking-wide border-3 border-foreground shadow-brutal hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150
```

### Resultado
Os botões de idioma terão o mesmo comportamento visual dos demais botões do site:
- Ao passar o mouse: fundo preto, texto branco, sem sombra, efeito "afundado"

