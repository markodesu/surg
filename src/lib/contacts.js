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
