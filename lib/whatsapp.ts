export const WHATSAPP_NUMBER = "5491130545828";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi! I'm interested in learning more about your services.";

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
