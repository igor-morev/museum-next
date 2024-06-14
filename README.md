## Интерактивный музей с экспозициями

![Main expo page][preview]
![Details expo page][preview]

### Technologies

- Typescript
- Next
- SCSS,
- Tailwindcss
- Redux-toolkit

### User stories and requirements

1. User enters to the website → user sees the render of the museum and expo marks on the top of it.
2. User hovers on a mark → sees a tooltip with information
3. User clicks on a mark → the expo details page will open → background as a expo picture, there are also two buttons above background: "Play the audioguide" and "Play the video" + Buttons "Back/Next".
4. By click "Play audioguide" — The video starts to play
5. User can to stop the guide any time or by pause, or triggerring video.
6. User can switch between expos though the map or using the carousel in the footer, which has all expo previews

Have to be done layout for tablets and mobile phones.

### Challenges

- To create fully a resizable and tricky layout with a background image and icons above on it
- To adjust icons automaticaly according to the image size
- To make 11 expo details pages with the custom UI
- To build solution for the carousel in the footer from scratch with auto focusing to the active element
- To decide which React components should be server and client type

## Интерактивный музей с экспозициями

### Технологии

- Typescript
- Next
- SCSS,
- Tailwindcss
- Redux-toolkit

### Основные юзер-кейсы

1. Пользователь заходит на сайт → пользователь видит рендер музея сверху и метки-экспозиции на ней.
2. Пользователь наводит на метку → видит попап с информацией
3. Пользователь кликает на метку → открывается окно → фон окна - некое фото, поверх фона 2 кнопки: "Запустить гида" и "Запустить видео" + кнопка "Назад".
4. При клике по "Запустить гида" — начинает проигрываться аудио
5. Пользователь может в любой момент остановить гида, либо кликом по паузе, либо запуском видео.
6. Пользователь может переключать экспозиции либо переходом на карту, либо через нижний сайд-бар, в котором есть превью всех экспозиций.

Должна быть реализована вёрстка под планшеты и мобильные телефоны

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[preview]: /src/assets/images/museum-preview.png
