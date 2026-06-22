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

export const CLINIC_2GIS_FIRM_ID = "70000001041239098";
export const CLINIC_2GIS_URL = `https://2gis.kg/bishkek/firm/${CLINIC_2GIS_FIRM_ID}`;

const build2GisWidgetUrl = () => {
  const options = {
    pos: { lat: 42.885658, lon: 74.624973, zoom: 16 },
    opt: { city: "bishkek" },
    org: CLINIC_2GIS_FIRM_ID,
  };

  return `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
    JSON.stringify(options),
  )}`;
};

export const CLINIC_2GIS_WIDGET_URL = build2GisWidgetUrl();

export const CLINIC_ADDRESS =
  "Кортекс, проспект Жибек-Жолу, 224. 720045, Свердловский район, Бишкек";
export const CLINIC_HOURS =
  "Пн–Сб: 09:00–18:00, Вс: по предварительной договорённости";

export function buildWhatsAppAppointmentLink({ name, phone, message }) {
  const text = [
    "Здравствуйте! Хочу записаться на приём к нейрохирургу.",
    name ? `Имя: ${name}` : null,
    phone ? `Телефон: ${phone}` : null,
    message ? `Комментарий: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeMessage(text)}`;
}
