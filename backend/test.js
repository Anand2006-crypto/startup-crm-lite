import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://udaykumaranand072002_db_user:AnandCRM2006@cluster0.hkq4pai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();