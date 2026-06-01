import type { Course, NewsPost, RunningGroup } from "./types";

export const siteName = "WeRun";
export const coachName = "Вера Фатеева";
export const heroTagline = "Тренировки с Верой Фатеевой";

export const newsPosts: NewsPost[] = [
  {
    id: "1",
    title: "Старт весеннего сезона: план на 8 недель",
    excerpt:
      "Открываем подготовку к полумарафону. Разбираем недельный объём, темповые и длительные.",
    content:
      "Весна — лучшее время вернуться к регулярным тренировкам. На ближайшие 8 недель предлагаю базовый план: 3–4 пробежки в неделю, одна длительная в воскресенье, одна темповая в среду. Не гонитесь за скоростью в первые две недели — задача набрать объём безопасно.",
    date: "2026-05-28",
    tag: "План",
  },
  {
    id: "2",
    title: "Как не сорваться на первых километрах",
    excerpt:
      "Пять простых правил разминки и контроля темпа для тех, кто только начинает.",
    content:
      "Главная ошибка новичков — слишком быстрый старт. Начинайте с ходьбы 3 минуты, затем лёгкий бег 10–15 минут. Дышите носом на разминке, следите за пульсом. После пробежки — растяжка 5 минут.",
    date: "2026-05-20",
    tag: "Советы",
  },
  {
    id: "3",
    title: "Групповая тренировка в субботу — набор открыт",
    excerpt:
      "Парк Сокольники, 9:00. Интервалы 6×400 м с отдыхом. Уровень — от 5 км без остановки.",
    content:
      "В эту субботу собираемся на интервальную работу. Принесите воду и часы с секундомером. После основной части — лёгкий кросс 2 км и общая заминка. Запись через раздел «Группы» или в личные сообщения.",
    date: "2026-05-15",
    tag: "Событие",
  },
];

export const courses: Course[] = [
  {
    id: "couch-to-5k",
    title: "С дивана до 5 км",
    description:
      "Бесплатный курс для новичков: 6 недель, постепенное увеличение нагрузки без травм.",
    type: "free",
    price: null,
    duration: "6 недель",
    level: "начинающий",
    lessons: [
      { id: "l1", title: "Неделя 1: ходьба и лёгкий бег", duration: "25 мин" },
      { id: "l2", title: "Неделя 2: увеличиваем время бега", duration: "28 мин" },
      { id: "l3", title: "Неделя 3: первые 2 км подряд", duration: "30 мин" },
      { id: "l4", title: "Неделя 4–6: выход на 5 км", duration: "35 мин" },
    ],
  },
  {
    id: "stretch-recovery",
    title: "Восстановление и мобильность",
    description:
      "Бесплатные уроки по растяжке и уходу за ногами после пробежек.",
    type: "free",
    price: null,
    duration: "4 урока",
    level: "начинающий",
    lessons: [
      { id: "l1", title: "Растяжка после лёгкой пробежки", duration: "12 мин" },
      { id: "l2", title: "Ролл для икр и квадрицепса", duration: "15 мин" },
      { id: "l3", title: "День отдыха: что делать", duration: "8 мин" },
      { id: "l4", title: "Сон и питание бегуна", duration: "10 мин" },
    ],
  },
  {
    id: "half-marathon-group",
    title: "Полумарафон: групповая подготовка",
    description:
      "12 недель в команде единомышленников, общие длительные и разбор техники на площадке.",
    type: "group",
    price: 8900,
    duration: "12 недель",
    level: "средний",
    lessons: [
      { id: "l1", title: "Диагностика и цели сезона", duration: "60 мин" },
      { id: "l2", title: "Базовый объём: недели 1–4", duration: "еженед." },
      { id: "l3", title: "Темповые и горки: недели 5–8", duration: "еженед." },
      { id: "l4", title: "Пик и снижение: недели 9–12", duration: "еженед." },
    ],
  },
  {
    id: "speed-individual",
    title: "Индивидуальный план на скорость",
    description:
      "Персональная программа под ваши результаты, еженедельная обратная связь от тренера.",
    type: "individual",
    price: 15000,
    duration: "8 недель",
    level: "продвинутый",
    lessons: [
      { id: "l1", title: "Тест 3 км и анализ техники", duration: "90 мин" },
      { id: "l2", title: "План интервалов под вас", duration: "индив." },
      { id: "l3", title: "Коррекция каждую неделю", duration: "индив." },
      { id: "l4", title: "Подводка к старту", duration: "индив." },
    ],
  },
];

export const runningGroups: RunningGroup[] = [
  {
    id: "g1",
    name: "Утренние 5 км",
    city: "Москва, Сокольники",
    schedule: "Вт, Чт — 7:00",
    pace: "6:00–6:30 / км",
    members: 8,
    maxMembers: 12,
    description: "Спокойный темп, без спешки. Идеально после долгого перерыва.",
  },
  {
    id: "g2",
    name: "Субботний длинный",
    city: "Москва, ВДНХ",
    schedule: "Сб — 8:30",
    pace: "5:30–6:00 / км",
    members: 14,
    maxMembers: 18,
    description: "Длительные 12–18 км. Вместе легче держать дистанцию.",
  },
  {
    id: "g3",
    name: "Новички «Первый 10К»",
    city: "Москва, Парк Горького",
    schedule: "Ср, Вс — 19:00",
    pace: "7:00–8:00 / км",
    members: 6,
    maxMembers: 10,
    description: "Готовимся к первому десятикилометровому забегу вместе.",
  },
];

export const contactInfo = {
  email: "vera@werun.app",
  phone: "+7 (999) 123-45-67",
  telegram: "@werun_coach",
  address: "Москва, тренировки в парках Сокольники и ВДНХ",
  hours: "Пн–Пт 10:00–20:00, ответ в мессенджерах в течение дня",
};

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
}

export function courseTypeLabel(type: Course["type"]): string {
  switch (type) {
    case "free":
      return "Бесплатно";
    case "group":
      return "Групповой";
    case "individual":
      return "Индивидуальный";
  }
}

export function formatPrice(price: number | null): string {
  if (price === null) return "Бесплатно";
  return `${price.toLocaleString("ru-RU")} ₽`;
}
