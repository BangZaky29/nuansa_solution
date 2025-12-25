export const getWhatsAppLink = (phoneNumber) => {
  const message =
    "Hallo kak. Saya dapat informasi dari website nuansasolution.id. Saya mau konsultasi mengenai layanan Nuansa Solution.";

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
