

# Security Implementation: hCaptcha + CORS Restriction

## Overview

Implementing two security enhancements using your provided hCaptcha keys:
- **Site Key**: `3e2a7148-16a6-446a-ba36-7bde3f68b622` (frontend)
- **Secret Key**: Will be stored as `HCAPTCHA_SECRET_KEY` (backend)

---

## Implementation Steps

### Step 1: Add Backend Secret

Store `HCAPTCHA_SECRET_KEY` with value `ES_410bd043c5194a8085fcf254eec789f8`

### Step 2: Update index.html

Add hCaptcha script to load the widget:

```html
<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
```

### Step 3: Update Contact Form (src/components/Contact.tsx)

- Add state for captcha token
- Add hCaptcha widget with Site Key `3e2a7148-16a6-446a-ba36-7bde3f68b622`
- Include token in form submission
- Disable submit button until captcha is completed
- Reset captcha after submission

### Step 4: Update Edge Function (supabase/functions/send-contact-email/index.ts)

**CORS Restriction:**
```typescript
const ALLOWED_ORIGINS = [
  "https://daniloespeleta.lovable.app",
  "https://id-preview--c046602f-979f-45c6-9bb3-500af19976dc.lovable.app"
];
```

**hCaptcha Verification:**
- Add `captchaToken` to validation schema
- Verify token with hCaptcha API using secret key
- Reject requests with invalid/missing tokens

### Step 5: Add TypeScript Declarations (src/vite-env.d.ts)

Add hCaptcha global type declarations for TypeScript compatibility.

---

## Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Add hCaptcha script tag |
| `src/components/Contact.tsx` | hCaptcha widget + state management |
| `supabase/functions/send-contact-email/index.ts` | CORS restriction + captcha verification |
| `src/vite-env.d.ts` | TypeScript declarations for hCaptcha |

---

## User Experience After Implementation

1. User fills out contact form
2. User clicks "I am human" checkbox (may see visual challenge)
3. Submit button becomes enabled
4. Form submits with captcha token
5. Backend verifies captcha before sending email
6. On success, form and captcha reset

---

## Security Layers (Defense in Depth)

| Layer | Protection |
|-------|------------|
| Honeypot | Catches basic bots |
| Rate Limiting | 3 requests/minute per IP |
| hCaptcha | Visual challenge for sophisticated bots |
| CORS | Only allows requests from your domains |
| Input Validation | Prevents injection attacks |
| HTML Escaping | Prevents XSS in emails |

