/**
 * Манифест скриншотов PWA.
 *
 * Скриншоты должны быть экспортированы из PWA, содержать только демо-данные и
 * не показывать email, заметки, ссылки-приглашения или другие персональные
 * данные.
 *
 * Как добавить изображение:
 * 1. Положите файл (PNG) в public/images/ (при наличии WebP-варианта — рядом).
 * 2. Добавьте запись в массив `screenshots` ниже:
 *
 *    {
 *      id: 'hero',              // уникальный идентификатор
 *      src: '/images/hero.png', // путь из public/
 *      webpSrc: '/images/hero.webp', // необязательный WebP-вариант
 *      alt: 'Осмысленное описание экрана',
 *      width: 390,              // реальные размеры изображения
 *      height: 844,
 *      caption: 'Подпись для галереи «Экран за экраном»', // необязательно
 *    }
 *
 * Зарезервированные id:
 * - 'hero' — изображение в первом экране;
 * - 'step-1', 'step-2', 'step-3' — фрагменты интерфейса у шагов «Три шага»;
 * - любые другие id попадают в галерею «Экран за экраном».
 *
 * Пока массив пуст, секции со скриншотами рендерятся без изображений.
 */
export interface Screenshot {
  id: string;
  src: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const screenshots: Screenshot[] = [
  {
    id: 'hero',
    src: '/images/home-screen.jpg',
    webpSrc: '/images/home-screen.webp',
    alt: 'Главный экран приложения: сводка «Запасы требуют внимания», список «Купить сейчас» и напоминания',
    width: 1170,
    height: 2377,
  },
  {
    id: 'step-1',
    src: '/images/add-item.jpg',
    webpSrc: '/images/add-item.webp',
    alt: 'Форма «Новый товар» в приложении: поле названия и кнопка «Добавить»',
    width: 1170,
    height: 2377,
  },
  {
    id: 'step-2',
    src: '/images/category.jpg',
    webpSrc: '/images/category.webp',
    alt: 'Экран категории «Еда»: товары со статусами «Нет», «Мало» и «Есть»',
    width: 1169,
    height: 2391,
  },
  {
    id: 'step-3',
    src: '/images/purchases.jpg',
    webpSrc: '/images/purchases.webp',
    alt: 'Экран «Покупки»: список покупок по категориям «Еда» и «Дом» с отметкой «Куплено»',
    width: 1170,
    height: 2382,
  },
  {
    id: 'kits',
    src: '/images/kits.jpg',
    webpSrc: '/images/kits.webp',
    alt: 'Экран наборов: набор «Бытовая химия» с товарами «Туалетная бумага» и «Антисептик»',
    width: 1170,
    height: 2391,
    caption: 'Наборы: товары, которые покупаются вместе',
  },
  {
    id: 'add-category',
    src: '/images/add-category.jpg',
    webpSrc: '/images/add-category.webp',
    alt: 'Экран категорий: добавление новой категории',
    width: 1170,
    height: 2391,
    caption: 'Свои категории под свои привычки',
  },
  {
    id: 'notifications',
    src: '/images/notifications.jpg',
    webpSrc: '/images/notifications.webp',
    alt: 'Экран уведомлений: что купить и что проверить',
    width: 1170,
    height: 2391,
    caption: 'Уведомления: что купить и что проверить',
  },
  {
    id: 'sign-in',
    src: '/images/sign-in.jpg',
    webpSrc: '/images/sign-in.webp',
    alt: 'Экран входа в приложение: вход через Google или по ссылке на email',
    width: 1170,
    height: 2391,
    caption: 'Один вход — и списки всегда под рукой',
  },
];
