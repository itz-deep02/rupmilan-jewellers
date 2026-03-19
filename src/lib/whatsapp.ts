const WHATSAPP_PHONE = "919232000436";

export function buildWhatsAppUrl(message: string): string {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export function buildProductWhatsAppUrl(productName: string, tagNumber: string, productUrl?: string): string {
  let message = `Hi! I'm interested in ${productName} (Tag: ${tagNumber}). Please share the price details.`;
  if (productUrl) {
    message += `\n\nProduct Link: ${productUrl}`;
  }
  return buildWhatsAppUrl(message);
}
