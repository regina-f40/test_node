# User Service and Action History Service

## Описание

Этот проект состоит из двух сервисов:
1. Сервис пользователей
2. Сервис истории действий с пользователями

## Установка
1. Настройка окружения
   

### Клонирование репозитория


Пример файла `.env.example`

```dotenv
DB_NAME=my_database
DB_USER=my_username
DB_PASS=my_password
DB_HOST=localhost
DB_PORT=5432

ACTION_HISTORY_URL=http://localhost:3001/actions
