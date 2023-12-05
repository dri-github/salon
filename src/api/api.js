/*const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "salon",
    password: "toor"
});

export function connectToDB() {
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });
}

export function closeConnection() {
    connection.end(function (err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
}

export function addUser(telephone) {
    try {
        connection.query(`select count(*) from clients where telephone = ${telephone}`, function (error, results, fields) {
            if (error)
                throw error;
            console.log(results);
        });

        //connection.query(`insert into clients(id, status, telephone) values(0, ${telephone})`, function (error, results, fields) {
        //    if (error)
        //        throw error;
        //    console.log("Ошибка добавления клиента. The solution is: ", results[0].solution);
        //});

        return true;
    }
    catch {
        return false;
    }
}*/