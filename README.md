# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
http://joxi.ru/n2YpNWvU75wZEm

# Получаем контакт по id

node index.js --action get --id 5
http://joxi.ru/5mdKbx5CapYeNr

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
http://joxi.ru/vAWE75viBVGOVm

# Удаляем контакт

node index.js --action remove --id=3
http://joxi.ru/a2Xj86EilaJ4Wr
