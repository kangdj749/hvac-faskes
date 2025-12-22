export {};

declare global {
  interface Window {
    _fbPixelInitialized?: boolean;
    fbq?: (...args: unknown[]) => void;
  }
}