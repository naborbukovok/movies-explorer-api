## Movies Explorer: дипломная работа в Яндекс Практикуме

> :globe_with_meridians: [**Ссылка на Movies Explorer API - https://api.movies.naborbukovok.nomoredomainsrocks.ru**](https://api.movies.naborbukovok.nomoredomainsrocks.ru) // IP 158.160.86.202

### :mortar_board: О чем проект
**Этот проект** - бэкенд для дипломной работы по курсу ["Веб-разработчик"](https://practicum.yandex.ru/web/) от сервиса Яндекс Практикум. Пользователи могут управлять данными своего профиля, сохранять карточки понравившихся фильмов. Реализованы следующие роуты:

- **Регистрация и авторизация** <br/>
`POST /signup` - создание нового пользователя <br/>
`POST /signin` - вход существующего пользователя <br/>
`POST /signout` - выход <br/>

- **Работа с аккаунтом** <br/>
`GET /users/me` - получение данных пользователя <br/>
`PATCH /users/me` - обновление данных о пользователе <br/>

- **Работа с закладками** <br/>
`GET /movies` - получение всех сохраненных фильмов <br/>
`POST /cards` - создание сохраненного фильма <br/>
`DELETE /cards/:movieId` - удаление сохраненного фильма c ID `movieId` <br/>

Роуты для работы с аккаунтом и закладками защищены авторизацией.

### :mortar_board: Запуск проекта
`npm run start` - запускает сервер.<br/>
`npm run dev` - запускает сервер с hot-reload.

### :mortar_board: Стек технологий
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/mongoose-880000?style=flat&logo=mongoose&logoColor=white"/> <img src="https://img.shields.io/badge/nginx-009639?style=flat&logo=nginx&logoColor=white"/> <img src="https://img.shields.io/badge/pm2-2B037A?style=flat&logo=pm2&logoColor=white"/> <img src="https://img.shields.io/badge/Yandex Cloud-5282FF?style=flat&logo=yandexcloud&logoColor=white"/>
