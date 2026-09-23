export const site = {
  name: 'kupitnezabyt',
  defaultTitle: 'kupitnezabyt — помнить о нужном проще',
  defaultDescription:
    'Отмечайте, что заканчивается, и собирайте покупки без бесконечных заметок и попыток всё удержать в голове.',
  contact: {
    email: 'kinkpunk@gmail.com',
    telegram: '@kinkpunk',
    telegramUrl: 'https://t.me/kinkpunk',
  },
} as const;

/**
 * Уникальные title и description для каждой страницы (см. WEBSITE_SPEC.md §11).
 */
export const pageMetadata = {
  home: {
    title: 'kupitnezabyt — помнить о нужном проще',
    description:
      'Отмечайте, что заканчивается, и собирайте покупки без бесконечных заметок и попыток всё удержать в голове.',
  },
  install: {
    title: 'Установка kupitnezabyt на домашний экран',
    description:
      'Пошаговая инструкция по установке kupitnezabyt на домашний экран: iPhone и iPad (Safari), Android (Chrome) и компьютер.',
  },
  privacy: {
    title: 'Политика конфиденциальности — kupitnezabyt',
    description:
      'Структура политики обработки данных kupitnezabyt. Содержимое утверждается владельцем продукта перед публикацией.',
  },
  terms: {
    title: 'Условия использования — kupitnezabyt',
    description:
      'Структура условий использования kupitnezabyt. Содержимое утверждается владельцем продукта перед публикацией.',
  },
  notFound: {
    title: 'Страница не найдена — kupitnezabyt',
    description:
      'Запрошенная страница не существует. Вернитесь на главную и продолжите знакомство с kupitnezabyt.',
  },
} as const;
