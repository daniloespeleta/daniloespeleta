
## Unificar Estilo dos Botões Neo-Brutalism

### Objetivo
Padronizar o comportamento de hover e estados ativos em todos os botões do site para criar uma experiência visual consistente.

### Comportamento Desejado

**Estado Normal:**
- Borda preta (border-foreground)
- Fundo branco (bg-background)
- Texto preto (text-foreground)
- Sombra brutal (shadow-brutal)

**Estado Hover:**
- Fundo preto (bg-foreground)
- Texto branco (text-background)
- Sem sombra (shadow-none)
- Deslocamento para baixo/direita (translate-x-[4px] translate-y-[4px])
- Efeito visual de "botão pressionado"

**Estado Ativo (apenas filtros):**
- Fundo preto (bg-foreground)
- Texto branco (text-background)
- Sem sombra
- Permanece deslocado

---

## Arquivos a Modificar

### 1. `src/components/Hero.tsx` (Botão Download Resume)

**Problema atual:** O hover move o botão na direção errada (-2px), aumenta a sombra e não tem o efeito de "clique".

**Mudança:** Atualizar as classes do Button para:
```
border-3 border-foreground brutal-shadow bg-background text-foreground font-bold uppercase tracking-wide hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all
```

### 2. `src/components/Projects.tsx` (Botões de Filtro)

**Problema atual:**
- Estado inativo: hover move na direção errada e aumenta sombra
- Estado ativo: fundo branco ao invés de preto

**Mudanças:**
- Estado ativo: `bg-foreground text-background` (preto com texto branco)
- Estado inativo hover: `hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]`

---

## Resumo das Mudanças

| Botão | Arquivo | Mudança |
|-------|---------|---------|
| Download Resume | Hero.tsx | Inverter direção do translate, remover sombra no hover |
| Filtro Marketing | Projects.tsx | Estado ativo em preto, corrigir hover |
| Filtro Analytics | Projects.tsx | Estado ativo em preto, corrigir hover |

### Resultado Esperado
Todos os botões terão o mesmo comportamento: ao passar o mouse, o fundo fica preto, o texto fica branco, a sombra desaparece e o botão "afunda" - criando uma experiência visual unificada e consistente em todo o site.
