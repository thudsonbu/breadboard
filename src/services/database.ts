import * as mongoDB from "mongodb";

export const collections: {
  tasks?: mongoDB.Collection;
  users?: mongoDB.Collection;
} = {};

export async function connect() {
  let client: mongoDB.MongoClient;
  let db: mongoDB.Db;

  if (process.env.NODE_ENV === "production") {
    client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    const env = process.env.NODE_ENV;
    const dbName = `breadboard-${env}`;

    db = client.db(dbName);
  } else {
    const env = process.env.NODE_ENV;
    const host = "mongodb://localhost:27017";
    const dbName = `breadboard-${env}`;

    client = new mongoDB.MongoClient(`${host}/${dbName}`);

    db = client.db(dbName);
  }

  const tasksCollection: mongoDB.Collection = db.collection("tasks");
  const usersCollection: mongoDB.Collection = db.collection("users");

  collections.tasks = tasksCollection;
  collections.users = usersCollection;
}
