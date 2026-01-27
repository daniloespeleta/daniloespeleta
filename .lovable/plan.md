
# Security Enhancements for Contact Form

This plan implements two security improvements: hCaptcha integration for bot protection and CORS restriction to only allow requests from your production domain.

## Why These Changes?

1. **hCaptcha**: While the honeypot and rate limiting help, sophisticated bots can bypass them. hCaptcha provides a visual challenge that's much harder for bots to solve while being privacy-friendly (doesn't track users like Google reCAPTCHA).

2. **CORS Restriction**: Currently the backend accepts requests from any domain (`*`). Restricting to your production domain prevents attackers from making requests to your backend from malicious websites.

---

## Implementation Steps

### Step 1: Add hCaptcha Secret Key

You'll need to:
1. Sign up at [hCaptcha.com](https://www.hcaptcha.com/) (free tier available)
2. Create a new site and get your **Site Key** (public) and **Secret Key** (private)
3. Add the Secret Key as a backend secret called `HCAPTCHA_SECRET_KEY`

### Step 2: Add hCaptcha Script to HTML

Update `index.html` to load the hCaptcha script:

```html
<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
```

### Step 3: Update Contact Form Component

Modify `src/components/Contact.tsx` to:
- Add hCaptcha widget below the message field
- Store the captcha token when user completes the challenge
- Send the token with the form submission
- Reset captcha after form submission

Key changes:
- Add state for captcha token
- Add hCaptcha div with site key
- Include token in the API request body

### Step 4: Update Backend Function

Modify `supabase/functions/send-contact-email/index.ts` to:

**a) Restrict CORS to production domain:**
```typescript
const ALLOWED_ORIGINS = [
  "https://daniloespeleta.lovable.app",
  "https://id-preview--c046602f-979f-45c6-9bb3-500af19976dc.lovable.app"
];

// Dynamic CORS headers based on request origin
function getCorsHeaders(origin: string | null) {
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    };
  }
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}
```

**b) Add hCaptcha verification:**
- Add `captchaToken` to validation schema
- Verify token with hCaptcha API before processing email
- Reject requests with invalid/missing tokens

### Step 5: Add TypeScript Declarations

Create type declarations for hCaptcha global objects to avoid TypeScript errors.

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Add hCaptcha script |
| `src/components/Contact.tsx` | Add hCaptcha widget, state management, and token submission |
| `supabase/functions/send-contact-email/index.ts` | CORS restriction + hCaptcha verification |
| `src/vite-env.d.ts` | Add hCaptcha type declarations |

### New Secret Required

| Secret Name | Purpose |
|-------------|---------|
| `HCAPTCHA_SECRET_KEY` | Server-side verification of captcha tokens |

### hCaptcha Site Key

The public site key will be added directly to the code. You'll receive it when you create your hCaptcha account.

---

## User Experience

- Users will see a small "I am human" checkbox after the message field
- After clicking it, they may see a visual challenge (depends on risk score)
- The submit button remains disabled until captcha is completed
- On form reset, the captcha also resets

## Security Benefits

- **hCaptcha**: Stops automated spam bots effectively
- **CORS Restriction**: Prevents cross-origin attacks and unauthorized API usage
- **Combined with existing protections**: Rate limiting, honeypot, and input validation remain in place for defense-in-depth
