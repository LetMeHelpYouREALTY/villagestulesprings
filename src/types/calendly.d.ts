export {};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
