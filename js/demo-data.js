import { createTrip, addExpense, uid } from './domain.js';

export function createEnhancedDemoData() {
  // ТЕКУЩАЯ ПОЕЗДКА - Сочи (сейчас, ноябрь 2026)
  const sochi = createTrip({ 
    title: 'Сочи · Море и горы', 
    start: '2026-11-07', 
    end: '2026-11-11', 
    currency: 'RUB', 
    total: '45000', 
    withMe: '38000', 
    budget: '50000', 
    destinations: 'Сочи, Красная Поляна', 
    cover: 'amalfi', 
    description: 'Отдых на Черном море и прогулки в горах.' 
  });
  sochi.id = 'demo-sochi';
  sochi.members = ['Анна'];
  sochi.day = '2026-11-09';
  
  const catS = name => sochi.categories.find(c => c.name === name)?.id;
  const expenseSochi = [['Проживание', '18000'], ['Еда и напитки', '12000'], ['Транспорт', '8000']];
  for (const [name, amount] of expenseSochi) {
    if (catS(name)) addExpense(sochi, { amount, fromId: sochi.accounts[0].id, categoryId: catS(name), date: Date.UTC(2026, 10, 8, 10) });
  }
  
  sochi.items = [
    ['Купальник', 'Одежда'], 
    ['Полотенце', 'Гигиена'], 
    ['Крем SPF 50', 'Необходимое'], 
    ['Солнцезащитные очки', 'Личное'], 
    ['Лёгкая куртка', 'Одежда'], 
    ['Зарядное устройство', 'Техника']
  ].map(([title, category], i) => ({ 
    id: `sochi-item-${i}`, 
    title, 
    quantity: 1, 
    category, 
    status: 'packed', 
    assignee: 'Анна', 
    note: '', 
    url: '' 
  }));
  
  sochi.events = [
    { id: 'sochi-beach', title: 'Пляж Ривьера', date: '2026-11-09', time: '10:00', category: 'Отдых', address: 'Сочи, пляж Ривьера', note: 'Море и солнце', photo: '', documentId: '' },
    { id: 'sochi-walk', title: 'Прогулка по набережной', date: '2026-11-09', time: '17:00', category: 'Прогулка', address: 'Набережная Сочи', note: '', photo: '', documentId: '' },
    { id: 'sochi-mountain', title: 'Красная Поляна', date: '2026-11-10', time: '09:00', category: 'Место', address: 'Красная Поляна', note: 'Поездка в горы', photo: '', documentId: '' },
  ];
  
  sochi.tasks = [
    { id: 'sochi-task-1', title: 'Купить сувениры', due: '2026-11-10', time: '', phase: 'during', assignee: 'Анна', completed: false, reminder: false }
  ];
  
  sochi.docs = [
    { id: 'sochi-doc-hotel', title: 'Бронь отеля', category: 'Брони', note: 'Отель "Морской бриз"', audience: 'Только мне', owner: 'Анна', cached: false, filePresent: false, eventId: '' }
  ];

  // БЛИЖАЙШАЯ БУДУЩАЯ - Стамбул (декабрь 2026)
  const istanbul = createTrip({ 
    title: 'Стамбул · Восток и Запад', 
    start: '2026-12-28', 
    end: '2027-01-04', 
    currency: 'TRY', 
    destinations: 'Стамбул', 
    cover: 'kyoto', 
    description: 'Новый год в восточной сказке.' 
  });
  istanbul.id = 'demo-istanbul';
  istanbul.members = ['Анна', 'Михаил'];
  
  istanbul.items = [
    ['Паспорт', 'Личное'], 
    ['Зарядное устройство', 'Техника'], 
    ['Тёплая куртка', 'Одежда'], 
    ['Удобная обувь', 'Одежда'], 
    ['Рюкзак', 'Личное'], 
    ['Аптечка', 'Здоровье']
  ].map(([title, category], i) => ({ 
    id: `istanbul-item-${i}`, 
    title, 
    quantity: 1, 
    category, 
    status: i < 2 ? 'home' : 'missing', 
    assignee: i % 2 ? 'Анна' : 'Михаил', 
    note: '', 
    url: '' 
  }));
  
  istanbul.tasks = [
    { id: 'istanbul-task-1', title: 'Купить страховку', due: '2026-11-20', time: '', phase: 'before', assignee: 'Михаил', completed: false, reminder: false },
    { id: 'istanbul-task-2', title: 'Забронировать отель', due: '2026-11-15', time: '', phase: 'before', assignee: 'Анна', completed: true, reminder: false },
  ];
  
  istanbul.events = [
    { id: 'istanbul-mosque', title: 'Голубая мечеть', date: '2026-12-29', time: '10:00', category: 'Место', address: 'Sultanahmet, Istanbul', note: 'Главная достопримечательность', photo: '', documentId: '' },
    { id: 'istanbul-bazaar', title: 'Гранд Базар', date: '2026-12-29', time: '14:00', category: 'Покупки', address: 'Grand Bazaar, Istanbul', note: 'Восточный рынок', photo: '', documentId: '' },
  ];
  
  istanbul.docs = [
    { id: 'istanbul-doc-1', title: 'Авиабилеты', category: 'Билеты', note: 'Turkish Airlines', audience: 'Только мне', owner: 'Анна', cached: false, filePresent: false, eventId: '' }
  ];

  // БУДУЩАЯ ПОЕЗДКА - Япония (октябрь 2027)
  const japan = createTrip({ 
    title: 'Япония · Токио и Киото', 
    start: '2027-10-12', 
    end: '2027-10-20', 
    currency: 'JPY', 
    destinations: 'Токио, Киото', 
    cover: 'kyoto-sunset', 
    description: 'Храмы, осенние прогулки и местная кухня.' 
  });
  japan.id = 'demo-japan';
  japan.members = ['Анна', 'Михаил'];
  
  japan.items = [
    ['Дорожный адаптер', 'Техника'], 
    ['Бутылка для воды', 'Необходимое'], 
    ['Лёгкая куртка', 'Одежда'], 
    ['Удобная обувь', 'Одежда'], 
    ['Крем SPF 50', 'Необходимое']
  ].map(([title, category], i) => ({ 
    id: `japan-item-${i}`, 
    title, 
    quantity: 1, 
    category, 
    status: 'missing', 
    assignee: i % 2 ? 'Анна' : 'Михаил', 
    note: '', 
    url: '' 
  }));
  
  japan.tasks = [
    { id: 'japan-task-1', title: 'Проверить визовые требования', due: '2027-08-01', time: '', phase: 'before', assignee: 'Анна', completed: false, reminder: false },
    { id: 'japan-task-2', title: 'Забронировать жильё', due: '2027-07-15', time: '', phase: 'before', assignee: 'Михаил', completed: false, reminder: false },
  ];
  
  japan.events = [
    { id: 'japan-temple', title: 'Храм Киёмидзу-дэра', date: '2027-10-13', time: '10:00', category: 'Место', address: 'Киото', note: 'Древний буддийский храм', photo: 'temple', documentId: '' },
    { id: 'japan-breakfast', title: 'Японский завтрак', date: '2027-10-13', time: '08:00', category: 'Еда', address: 'Киото', note: 'Традиционная кухня', photo: 'breakfast', documentId: '' },
  ];
  
  japan.docs = [];

  // ДАЛЬНЯЯ БУДУЩАЯ - Италия (апрель 2028)
  const italy = createTrip({ 
    title: 'Италия · Рим и Амальфи', 
    start: '2028-04-04', 
    end: '2028-04-16', 
    currency: 'EUR', 
    cover: 'amalfi', 
    destinations: 'Рим, Позитано', 
    description: 'Весна в Италии.' 
  });
  italy.id = 'demo-italy';
  italy.members = ['Анна', 'Михаил', 'Ольга'];
  italy.items = [];
  italy.tasks = [];
  italy.events = [];
  italy.docs = [];

  // НЕДАВНО ЗАВЕРШЕННАЯ - Казань (октябрь 2026)
  const kazan = createTrip({ 
    title: 'Казань · Город контрастов', 
    start: '2026-10-15', 
    end: '2026-10-18', 
    currency: 'RUB', 
    total: '28000', 
    withMe: '28000', 
    budget: '30000', 
    destinations: 'Казань', 
    cover: 'barcelona', 
    description: 'Кремль, мечети и татарская кухня.' 
  });
  kazan.id = 'demo-kazan';
  kazan.members = ['Анна'];
  kazan.archived = false;
  
  const catK = name => kazan.categories.find(c => c.name === name)?.id;
  const expenseKazan = [['Проживание', '12000'], ['Еда и напитки', '8000'], ['Транспорт', '5000'], ['Покупки', '3000']];
  for (const [name, amount] of expenseKazan) {
    if (catK(name)) addExpense(kazan, { amount, fromId: kazan.accounts[0].id, categoryId: catK(name), date: Date.UTC(2026, 9, 16, 14) });
  }
  
  kazan.items = [
    ['Камера', 'Техника'], 
    ['Блокнот', 'Личное'], 
    ['Тёплый свитер', 'Одежда']
  ].map(([title, category], i) => ({ 
    id: `kazan-item-${i}`, 
    title, 
    quantity: 1, 
    category, 
    status: 'packed', 
    assignee: 'Анна', 
    note: '', 
    url: '' 
  }));
  
  kazan.tasks = [
    { id: 'kazan-task-1', title: 'Посетить Кремль', due: '2026-10-16', time: '', phase: 'during', assignee: 'Анна', completed: true, reminder: false }
  ];
  
  kazan.events = [
    { id: 'kazan-kremlin', title: 'Казанский Кремль', date: '2026-10-16', time: '10:00', category: 'Место', address: 'Казань, Кремль', note: 'Главная достопримечательность', photo: '', documentId: '' },
  ];
  
  kazan.docs = [];

  // ПРОШЕДШАЯ - Барселона (май 2026)
  const barcelona = createTrip({ 
    title: 'Барселона · Гауди и море', 
    start: '2026-05-04', 
    end: '2026-05-08', 
    currency: 'EUR', 
    total: '850', 
    withMe: '850', 
    budget: '900', 
    destinations: 'Барселона', 
    cover: 'barcelona', 
    description: 'Парк Гуэль, Саграда Фамилия и пляжи.' 
  });
  barcelona.id = 'demo-barcelona';
  barcelona.members = ['Анна', 'Михаил'];
  barcelona.archived = true;
  
  const catB = name => barcelona.categories.find(c => c.name === name)?.id;
  const expenseBarcelona = [['Проживание', '320'], ['Еда и напитки', '280'], ['Развлечения', '150'], ['Транспорт', '100']];
  for (const [name, amount] of expenseBarcelona) {
    if (catB(name)) addExpense(barcelona, { amount, fromId: barcelona.accounts[0].id, categoryId: catB(name), date: Date.UTC(2026, 4, 5, 12) });
  }
  
  barcelona.items = [
    ['Солнцезащитные очки', 'Личное'], 
    ['Купальник', 'Одежда'], 
    ['Фотоаппарат', 'Техника']
  ].map(([title, category], i) => ({ 
    id: `barcelona-item-${i}`, 
    title, 
    quantity: 1, 
    category, 
    status: 'packed', 
    assignee: i % 2 ? 'Анна' : 'Михаил', 
    note: '', 
    url: '' 
  }));
  
  barcelona.tasks = [
    { id: 'barcelona-task-1', title: 'Купить билеты в Саграда Фамилия', due: '2026-04-20', time: '', phase: 'before', assignee: 'Анна', completed: true, reminder: false }
  ];
  
  barcelona.events = [
    { id: 'barcelona-sagrada', title: 'Саграда Фамилия', date: '2026-05-05', time: '10:00', category: 'Место', address: 'Barcelona', note: 'Собор Гауди', photo: 'barcelona', documentId: '' },
  ];
  
  barcelona.docs = [];

  // ДАВНО ПРОШЕДШАЯ - Санкт-Петербург (2025)
  const spb = createTrip({ 
    title: 'Санкт-Петербург · Белые ночи', 
    start: '2025-06-20', 
    end: '2025-06-24', 
    currency: 'RUB', 
    destinations: 'Санкт-Петербург', 
    cover: 'kyoto-lanterns', 
    description: 'Эрмитаж, разводные мосты и белые ночи.' 
  });
  spb.id = 'demo-spb';
  spb.members = ['Анна'];
  spb.archived = true;
  spb.items = [];
  spb.tasks = [];
  spb.events = [];
  spb.docs = [];

  return {
    version: 2,
    revision: 0,
    trips: [sochi, istanbul, japan, italy, kazan, barcelona, spb],
    currentTripId: 'demo-sochi',
    templates: [
      { 
        id: 'demo-template', 
        title: 'Ручная кладь', 
        items: [
          { id: 'tpl-1', title: 'Зарядное устройство', quantity: 1, category: 'Техника' }, 
          { id: 'tpl-2', title: 'Бутылка для воды', quantity: 1, category: 'Личное' }, 
          { id: 'tpl-3', title: 'Наушники', quantity: 1, category: 'Техника' }
        ] 
      },
      { 
        id: 'demo-template-2', 
        title: 'Пляжный отдых', 
        items: [
          { id: 'tpl2-1', title: 'Купальник', quantity: 1, category: 'Одежда' }, 
          { id: 'tpl2-2', title: 'Солнцезащитный крем', quantity: 1, category: 'Необходимое' }, 
          { id: 'tpl2-3', title: 'Полотенце', quantity: 1, category: 'Гигиена' }, 
          { id: 'tpl2-4', title: 'Шлёпанцы', quantity: 1, category: 'Одежда' }
        ] 
      }
    ],
    settings: { theme: 'light', language: 'ru' },
    profile: { name: '' },
    demo: true
  };
}
