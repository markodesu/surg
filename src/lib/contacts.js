export const PHONE = "+996555800766";
export const PHONE_DISPLAY = "+996 555 800 766";
export const WHATSAPP_NUMBER = "996555800766";

const encodeMessage = (text) => encodeURIComponent(text);

export const WHATSAPP_LINK_CONSULTATION = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(
  "Здравствуйте! Хочу записаться на консультацию к нейрохирургу.",
)}`;

export const WHATSAPP_LINK_APPOINTMENT = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(
  "Здравствуйте! Нужен приём нейрохирурга в Бишкеке.",
)}`;

export const TECH_SUPPORT_PHONE_DISPLAY = "+996 705 800 766";
export const WHATSAPP_LINK_TECH_SUPPORT = `https://wa.me/996705800766?text=${encodeMessage(
  "Здравствуйте! На сайте neuro.kg возникла техническая неполадка.",
)}`;
