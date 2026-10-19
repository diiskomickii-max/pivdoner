export interface MenuItem {
  id: string;
  name: string;
  category: 'doner' | 'pitta' | 'lunchbox' | 'salad' | 'snacks';
  description: string;
  price: string;
  weight?: string;
  image?: string;
  hasRealPhoto?: boolean;
  isFeatured?: boolean;
  badge?: string;
  tags?: string[];
  calories?: string;
}

export interface MenuCategory {
  id: 'all' | 'doner' | 'pitta' | 'lunchbox' | 'salad' | 'snacks';
  name: string;
  iconName: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
  icon: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'Все блюда', iconName: 'Utensils', description: 'Полный ассортимент стритфуда ПивДонер' },
  { id: 'doner', name: 'Шаурма и донеры', iconName: 'Flame', description: 'Сочное мясо с вертела, хрустящий лаваш и фирменный соус' },
  { id: 'pitta', name: 'Питы', iconName: 'Sandwich', description: 'Тёплая пита с нежным мясом, свежими овощами и зеленью' },
  { id: 'lunchbox', name: 'Ланчбоксы', iconName: 'Box', description: 'Сытный формат для полноценного обеда с гарниром и мясом' },
  { id: 'salad', name: 'Салаты', iconName: 'Salad', description: 'Свежие овощи, авторские заправки и хрустящие ингредиенты' },
  { id: 'snacks', name: 'Закуски и фри', iconName: 'Cookie', description: 'Золотистый картофель фри, хрустящие стрипсы и наггетсы' },
];

export const CAFE_INFO = {
  name: 'ПивДонер',
  tagline: 'ПивДонер — вкус, за которым возвращаются',
  subtitle: 'Сочная шаурма, аппетитные донеры и свежие ингредиенты',
  address: 'ул. Одинцова, 20',
  city: 'г. Минск',
  metro: 'ст. м. «Каменная Горка» / «Кунцевщина»',
  fullAddress: 'Беларусь, г. Минск, ул. Одинцова, 20',
  schedule: 'ежедневно, 10:00–23:00',
  scheduleShort: '10:00–23:00',
  startHour: 10,
  endHour: 23,
  phone: '+375 (44) 776 76 06',
  phoneRaw: '+375447767606',
  yandexMapsUrl: 'https://yandex.ru/maps/org/157190557816?si=zd5y5yzqquq6dqje091nt886vw',
  yandexRouteUrl: 'https://yandex.ru/maps/?rtext=~53.901416,27.447065&rtt=auto',
  yandexWidgetUrl: 'https://yandex.ru/map-widget/v1/?ol=biz&oid=157190557816',
  slogans: [
    '#Готовим_с_любовью',
    '#Авторская_шаурма',
    '#Меньшеслов_больше_мяса'
  ]
};

export const ADVANTAGES = [
  {
    id: 'adv-1',
    title: 'Вкусное меню на каждый день',
    description: 'Сытные донеры, питы, салаты, ланчбоксы и горячие закуски для отличного обеда или быстрого перекуса.',
    icon: 'Utensils'
  },
  {
    id: 'adv-2',
    title: 'Разнообразие блюд',
    description: 'Богатый выбор стритфуда на любой вкус — от классического донера до лёгких салатов с морепродуктами.',
    icon: 'Layers'
  },
  {
    id: 'adv-3',
    title: 'Удобно взять с собой',
    description: 'Плотная термоупаковка надёжно сохраняет тепло, свежесть и аппетитный аромат в дороге.',
    icon: 'ShoppingBag'
  },
  {
    id: 'adv-4',
    title: 'Мы ждём вас ежедневно',
    description: 'Работаем без выходных и перерывов каждый день с 10:00 до 23:00 в удобной локации на Одинцова, 20.',
    icon: 'Clock'
  }
];

export const METRICS: MetricItem[] = [
  {
    label: 'Часы работы',
    value: '10:00–23:00',
    detail: 'Ежедневно без перерывов',
    icon: 'Clock'
  },
  {
    label: 'Предзаказ',
    value: 'По звонку',
    detail: '+375 (44) 776 76 06',
    icon: 'PhoneCall'
  },
  {
    label: 'Формат',
    value: 'Навынос и на месте',
    detail: 'Термоупаковка для каждого заказа',
    icon: 'ShoppingBag'
  },
  {
    label: 'Локация',
    value: 'Одинцова, 20',
    detail: 'Удобный подъезд и парковка',
    icon: 'MapPin'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Как сделать предварительный заказ, чтобы не ждать?',
    answer: 'Позвоните нам по номеру +375 (44) 776 76 06, назовите выбранные блюда и примерное время вашего визита. Мы приготовим всё горячим точно к вашему приходу.'
  },
  {
    question: 'Можно ли взять заказ навынос?',
    answer: 'Да, все блюда упаковываются в специальную термофольгу и удобные контейнеры, чтобы еда сохраняла температуру и хрустящую текстуру.'
  },
  {
    question: 'Какие формы оплаты доступны в кафе?',
    answer: 'В павильоне доступна оплата наличными белорусскими рублями (BYN), а также банковскими картами через платёжный терминал.'
  },
  {
    question: 'Где находится кафе «ПивДонер»?',
    answer: 'Мы находимся в Минске по адресу ул. Одинцова, 20 (рядом с жилым микрорайоном Запад/Кунцевщина). Для навигации нажмите кнопку «Построить маршрут» на сайте.'
  },
  {
    question: 'Где узнать точные цены и граммовки?',
    answer: 'Актуальный прейскурант представлен на электронном табло непосредственно на кассе павильона. Также вы можете уточнить точную стоимость любой позиции по телефону предзаказа.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Шаурма и донеры ---
  {
    id: 'doner-signature',
    name: 'Авторский донер / шаурма',
    category: 'doner',
    description: 'Нежное мясо с вертела, свежие хрустящие огурцы, спелые томаты, молодая капуста и фирменный чесночный соус в подрумяненном на гриле лаваше.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    image: './images/doner-classic.jpg',
    hasRealPhoto: true,
    isFeatured: true,
    badge: 'Реальное фото',
    tags: ['Мясо с вертела', 'Фирменный соус', 'Свежие овощи', 'Гриль']
  },
  {
    id: 'doner-classic',
    name: 'Донер классический',
    category: 'doner',
    description: 'Традиционный рецепт с сочным мясом, свежими овощами и классической заправкой в тонком лаваше.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    image: './images/doner-classic.jpg',
    hasRealPhoto: true,
    isFeatured: false,
    tags: ['Классика', 'Мясо с вертела', 'Лаваш']
  },
  {
    id: 'doner-cheese',
    name: 'Донер сырный',
    category: 'doner',
    description: 'Сытный донер с добавлением тягучего расплавленного сыра и нежного сливочно-сырного соуса.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Сырный соус', 'Двойной сыр', 'Горячий лаваш']
  },
  {
    id: 'doner-greek',
    name: 'Донер греческий',
    category: 'doner',
    description: 'Средиземноморский акцент: сочное мясо, свежие овощи, сыр фета и пикантная заправка с травами.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Сыр фета', 'Оливки', 'Пряные травы']
  },
  {
    id: 'doner-village',
    name: 'Донер по-деревенски',
    category: 'doner',
    description: 'Особенно сытный вариант с добавлением золотистого картофеля, маринованных огурчиков и сочного мяса.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['С картофелем', 'Маринованные огурцы', 'Сытный']
  },

  // --- Салаты ---
  {
    id: 'salad-caesar-chicken',
    name: 'Салат с курицей и сухариками',
    category: 'salad',
    description: 'Нежные слайсы куриного филе, хрустящие золотистые сухарики, тёртый сыр, спелые томаты и фирменный белый соус.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    image: './images/salad-caesar-chicken.jpg',
    hasRealPhoto: true,
    isFeatured: true,
    badge: 'Реальное фото',
    tags: ['Куриное филе', 'Хрустящие сухарики', 'Тёртый сыр']
  },
  {
    id: 'salad-greek',
    name: 'Салат с сыром фета и овощами',
    category: 'salad',
    description: 'Кубики нежного сыра фета, отборные маслины, сочные спелые томаты, свежие огурцы, сладкий перец и густой бальзамический соус.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    image: './images/salad-greek.jpg',
    hasRealPhoto: true,
    isFeatured: true,
    badge: 'Реальное фото',
    tags: ['Сыр фета', 'Маслины', 'Бальзамик', 'Свежие овощи']
  },
  {
    id: 'salad-caesar-shrimp',
    name: 'Салат с хрустящими креветками',
    category: 'salad',
    description: 'Крупные креветки в аппетитной хрустящей панировке, хрустящие гренки, спелые томаты, сыр и нежный соус.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    image: './images/salad-caesar-shrimp.jpg',
    hasRealPhoto: true,
    isFeatured: true,
    badge: 'Реальное фото',
    tags: ['Креветки в панировке', 'Морепродукты', 'Сухарики', 'Сыр']
  },

  // --- Питы ---
  {
    id: 'pitta-signature',
    name: 'Пита с мясом и свежими овощами',
    category: 'pitta',
    description: 'Воздушная тёплая пита, наполненная обжаренным мясом, свежими огурцами, помидорами и фирменным соусом.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Тёплая пита', 'Мясо с вертела', 'Свежие овощи']
  },
  {
    id: 'pitta-cheese',
    name: 'Пита сырная',
    category: 'pitta',
    description: 'Пита с нежным мясом, расплавленным сыром, хрустящей зеленью и сливочным соусом.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Сырная начинка', 'Тёплая пита', 'Соус']
  },

  // --- Ланчбоксы ---
  {
    id: 'lunchbox-classic',
    name: 'Ланчбокс классический',
    category: 'lunchbox',
    description: 'Полноценный обеденный формат: порция сочного мяса с вертела, хрустящий картофель фри, свежий салат и порционный соус.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Полноценный обед', 'Картофель фри', 'Мясо', 'Салат']
  },
  {
    id: 'lunchbox-meat',
    name: 'Ланчбокс мясной XL',
    category: 'lunchbox',
    description: 'Увеличенная порция сочного мяса с гарниром, свежими овощами и двойным соусом для максимального насыщения.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Двойное мясо', 'Формат XL', 'Гарнир']
  },

  // --- Закуски и фри (с вывески павильона) ---
  {
    id: 'snack-fries',
    name: 'Картофель фри золотистый',
    category: 'snacks',
    description: 'Хрустящий картофель фри, обжаренный до аппетитной золотистой корочки, с морской солью.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Горячая закуска', 'Хрустящий', 'Фри']
  },
  {
    id: 'snack-nuggets',
    name: 'Наггетсы куриные',
    category: 'snacks',
    description: 'Сочные кусочки нежного куриного филе в хрустящей панировке.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Куриное филе', 'Хрустящая корочка']
  },
  {
    id: 'snack-strips',
    name: 'Стрипсы куриные',
    category: 'snacks',
    description: 'Аппетитные полоски отборного куриного мяса в золотистой панировке со специями.',
    price: 'Цена уточняется',
    weight: 'Граммовка уточняется',
    hasRealPhoto: false,
    isFeatured: false,
    tags: ['Стрипсы', 'Филе', 'Панировка']
  }
];
