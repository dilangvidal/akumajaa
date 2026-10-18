// Configuracion central del sitio.
// Todo lo marcado como REEMPLAZAR son datos de ejemplo: cambialos antes de publicar.

export const site = {
  name: 'Akumajaa',
  tagline: 'Atención al cliente multicanal',
  description:
    'Ponemos el equipo de agentes que atiende tus canales y montamos la plataforma que los unifica. WhatsApp, Instagram, Facebook, chat web y correo en una sola bandeja.',
  // REEMPLAZAR: dominio real, se usa en las etiquetas canonical y Open Graph.
  url: 'https://akumajaa.com',

  contact: {
    // REEMPLAZAR: enlace real de Calendly, Cal.com o similar.
    bookingUrl: 'https://cal.com/akumajaa/diagnostico',
    // REEMPLAZAR: correo real.
    email: 'hola@akumajaa.com',
    // REEMPLAZAR: telefono real en formato internacional.
    phone: '+57 300 000 0000',
    // REEMPLAZAR: ciudad y pais.
    location: 'Riohacha, Colombia',
  },
} as const;

export const channels = [
  { name: 'WhatsApp', note: 'API oficial de WhatsApp Business' },
  { name: 'Instagram', note: 'Mensajes directos y comentarios' },
  { name: 'Facebook', note: 'Messenger y comentarios de página' },
  { name: 'Chat web', note: 'Widget en tu sitio o aplicación' },
  { name: 'Correo', note: 'Buzones compartidos del equipo' },
  { name: 'Telegram', note: 'Bots y chats directos' },
] as const;

export const steps = [
  {
    title: 'Diagnóstico',
    body: 'Revisamos tus canales, volúmenes y tiempos de respuesta actuales. Salimos con un plan y metas medibles.',
  },
  {
    title: 'Implementación',
    body: 'Conectamos los canales, configuramos la plataforma y dejamos listas las automatizaciones y los reportes.',
  },
  {
    title: 'Operación',
    body: 'Nuestros agentes empiezan a atender con tus protocolos y tu tono, escalando a tu equipo cuando hace falta.',
  },
  {
    title: 'Medición',
    body: 'Reportes periódicos de tiempos, volumen y satisfacción. Ajustamos lo que no esté funcionando.',
  },
] as const;

// REEMPLAZAR: cifras reales. Mientras no las tengas, considera quitar esta sección
// antes de publicar: una metrica inventada cuesta mas credibilidad de la que suma.
export const metrics = [
  { value: '< 2 min', label: 'Tiempo de primera respuesta', note: 'Promedio en horario de cobertura' },
  { value: '6', label: 'Canales unificados', note: 'En una sola bandeja de entrada' },
  { value: '24/7', label: 'Cobertura disponible', note: 'Según el plan que acordemos' },
] as const;
