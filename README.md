# User Service and Action History Service

## Описание

Этот проект состоит из двух сервисов:
1. Сервис пользователей
2. Сервис истории действий с пользователями

### Установка
1. Настройка окружения

Создание пользователя
bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"john.doe@example.com"}'

Обновление пользователя
bash
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"Jane Doe", "email":"jane.doe@example.com"}'

Получение списка пользователей
bash
curl http://localhost:3000/users

Получение истории действий
bash
curl http://localhost:3001/actions 

2. Настройка окружения
 файл .env в корне проекта и переменные окружения:

dotenv

DB_NAME=your_database
DB_USER=your_username
DB_PASS=your_password
DB_HOST=localhost
DB_PORT=5432

ACTION_HISTORY_URL=http://localhost:3001/actions
Установка зависимостей
bash
Copia codice
npm install

Инициализация базы данных
bash
node initDb.js
Запуск

Запуск сервера пользователей
bash
node index.js

Запуск сервера истории действий
bash
node actionHistoryServer.js


Пример файла `.env.example`

```dotenv
DB_NAME=my_database
DB_USER=my_username
DB_PASS=my_password
DB_HOST=localhost
DB_PORT=5432

ACTION_HISTORY_URL=http://localhost:3001/actions
