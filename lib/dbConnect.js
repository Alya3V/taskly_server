import { MongoClient, ServerApiVersion } from "mongodb";
const { MONGODB_URI, MONGODB_DATABASE } = process.env;
const client = new MongoClient(MONGODB_URI, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
},
});
try {
// Подключаем клиент к серверу
await client.connect();
// Отправляем ping для подтверждения успешного подключения
await client.db().command({ ping: 1 });
console.log("Подключение к MongoDB успешно!");
} catch (err) {
console.error(err);
}
export const db = client.db(MONGODB_DATABASE);