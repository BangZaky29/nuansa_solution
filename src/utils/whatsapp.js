export const getWhatsAppLink = (phoneNumber, message) => {
  const baseMessage =
    "Hallo kak. Saya dapat informasi dari website nuansasolution.id. Saya mau konsultasi mengenai layanan Nuansa Solution.";
  const finalMessage = message && message.trim().length > 0 ? message : baseMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
