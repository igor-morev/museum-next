## Интерактивный музей с экспозициями

![Демо][preview]

**Технологии:** Typescript, Next, SCSS, Tailwindcss, Redux-toolkit

**Основной юзер-кейс**

1. Пользователь заходит на сайт → пользователь видит рендер музея сверху и метки-экспозиции на ней.
2. пользователь наводит на метку → видит попап с информацией
3. пользователь кликает на метку → открывается окно → фон окна - некое фото, поверх фона 2 кнопки: "Запустить гида" и "Запустить видео" + кнопка "Назад".
4. При клике по "Запустить гида" — начинает проигрываться аудио
5. Пользователь может в любой момент остановить гида, либо кликом по паузе, либо запуском видео.
6. Пользователь может переключать экспозиции либо переходом на карту, либо через нижний сайд-бар, в котором есть превью всех экспозиций.

Должна быть реализована вёрстка под планшеты и мобильные телефоны

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[preview]: /src/assets/images/museum-preview.png
