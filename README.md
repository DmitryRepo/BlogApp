link: https://blog-app-dusky-mu.vercel.app/


**********************************************************************************************************************
**********************************************************************************************************************
Замечания
Ссылки под кнопками авторизации/регистрации не работают.
Не присвоены типы инпутов.
Расположение кнопок редактирования и удаления статьи не по макету.
path роутов стоит вынести в константы.

**********************************************************************************************************************

Блог-платформа #1 - Начало
Наша задача в этом курсе - реализовать примитивную блог-платформу. В ходе выполения познакомимся 
с аутентификацией и валидацией форм.

Проект реализуем целиком с использованием react hooks.

Документация по API
https://api.realworld.io/api-docs/
Макеты
https://www.figma.com/file/XXBjJXew3xpfbOZUnO9QVB/Blog?node-id=9582%3A0
Корневой URL для API: https://blog.kata.academy/api/

Реализуйте страницу со списком статей
Сделайте пагинацию. Пагинация статей должна быть на стороне сервера - при смене страницы отправляем новый запрос. 
Не забываем индикаторы загрузки и обработку ошибок.
Реализуйте страницу одной статьи. Обратите внимание, что полный текст статьи - это Markdown разметка, найдите 
подходящий модуль для вывода содержимого на экран.
Используйте react-router для навигации по страницам.

Страницы:

/ и /articles - список всех статей. При клике на заголовок - переход на страницу статьи. Кнопка лайка не активна, 
т.к. мы не авторизованы.
/articles/{slug} - Просмотр статьи с полным текстом.
Примечания:

Адаптивная верстка не обязательна
Результат должен быть запушин в репозиторий гитхаб. Ссылку на репозиторий с кодом всех выполненных заданий 
отправите в конце модуля, в специальное поле, после выполнения финального задания по данному проекту

**********************************************************************************************************************

Блог-платформа #2 - Аутентификация
Документация по API
https://api.realworld.io/api-docs/
Макеты
https://www.figma.com/file/XXBjJXew3xpfbOZUnO9QVB/Blog?node-id=9582%3A0

Корневой URL для API: https://blog.kata.academy/api/
Добавим механизм аутентификации, регистрации и редактирования профиля.
Создайте страницы входа и регистрации и настройте роутинг (используем react-router v5)
Сделайте форму регистрации
Сделайте форму логина
Сделайте отображение данных пользователя в шапке
Настройте клиентскую валидацию и обработку ошибок сервера (см ниже подробности)
Настройте, чтобы при перезагрузке страницы залогиненный пользователь сохранялся, сделайте функционал Log Out
Реализуйте страницу редактирования профиля (переход на эту страницу - по клику на имени/аватаре пользователя в шапке.

Страницы:
/sign-in - Страница входа.
/sign-up - Страница регистрации.
/profile - Страница редактирования информации пользователя (см. метод Update User). 
Переход на эту страницу происходит по клике на имени-аватарке в шапке.
Валидация
Для клиентской валидации форм воспользуемся библиотекой React Hook Form.

Регистрация (все поля обязательны):
email должен быть корректным почтовым адресом
username должен быть от 3 до 20 символов (включительно)
password должен быть от 6 до 40 символов (включительно)
password и repeat password должны совпадать
галочка согласия с обработкой персональных данных должна быть отмечена
Логин:
email должен быть не пустой, должен быть корректным почтовым адресом
password должен быть не пустой
Редактирование профиля:
username не должен быть пустым
email должен быть корректным почтовым адресом, не должен быть пустым
new password должен быть от 6 до 40 символом
avatar image должен быть корректным url
Серверные ошибки должны нормально подсвечивать соответствующие поля.
Результат должен быть запушин в репозиторий гитхаб. Ссылку на репозиторий с кодом всех выполненных заданий отправите в конце модуля, 
в специальное поле, после выполнения финального задания по данному проекту

**********************************************************************************************************************

Блог-платформа #3 - Статьи
Документация по API
Макеты

Корневой URL для API: https://blog.kata.academy/api/

Добавьте страницу создания статьи. Правила валидации - title, short description и text обязательны для заполнения.
Добавьте страницу редактирования статьи. Реиспользуйте форму, использующуюся при создании.
Добавьте кнопки редактирования/удаления на странице статьи. Сделайте подтверждение на действие удаления.
Страницы:

/new-article - Страница создания статьи. При переходе по этой ссылке без аутентификации - перебрасывает на страницу логина (см. паттерн Private Route)
/articles/{slug}/edit - Страница редактирования статьи.
На странице отображения статьи добавляем кнопки Edit и Delete. По нажатию на Edit происходит переход на страницу редактирования, по Delete - 
открытие модалки подтверждения и запрос на удаление статьи.

Результат должен быть запушин в репозиторий гитхаб. Ссылку на репозиторий с кодом всех выполненных заданий отправите в конце модуля, 
в специальное поле, после выполнения финального задания по данному проекту

**********************************************************************************************************************

Блог-платформа #4 - Завершение
Документация по API
Макеты

Корневой URL для API: https://blog.kata.academy/api/

Добавьте функционал лайков
Проверяем все на работоспособность и отсутствие ошибок
Проверяем отсутствие ошибок линтера
Заливаем на Vercel
Ссылку размещаем в README