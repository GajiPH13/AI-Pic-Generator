// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URL);
// const db = client.db("pixgen");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
//   emailAndPassword: { 
//     enabled: true, 
//   }, 
//   socialProviders: {
//     google: {
//         prompt: "select_account", 
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
// }
// });
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error("Missing MONGODB_URL");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

const connectedClient = await clientPromise;
const db = connectedClient.db("pixgen");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client: connectedClient,
  }),

  emailAndPassword: {
    enabled: true,
  },

  
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});