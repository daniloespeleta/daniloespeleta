/// <reference types="vite/client" />

// hCaptcha global declarations
interface HCaptcha {
  render: (container: string | HTMLElement, options: HCaptchaRenderOptions) => string;
  reset: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string;
  execute: (widgetId?: string, options?: { async: boolean }) => Promise<{ response: string }> | void;
  remove: (widgetId?: string) => void;
}

interface HCaptchaRenderOptions {
  sitekey: string;
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: (error: Error) => void;
  theme?: 'light' | 'dark';
  size?: 'normal' | 'compact' | 'invisible';
  tabindex?: number;
}

declare global {
  interface Window {
    hcaptcha: HCaptcha;
  }
}

export {};
