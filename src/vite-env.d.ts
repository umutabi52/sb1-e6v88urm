/// <reference types="vite/client" />

interface Window {
  gtag: (command: string, ...args: any[]) => void;
  gtag_report_conversion: (url?: string) => void;
  dataLayer: any[];
}