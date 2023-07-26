import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://mdemranswe:3FT0XxSrDg3hbLBV@cluster0.jh1xka7.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function handler(req, res) {
  try {
    await client.connect();
    console.log("Database connected Successfully");

    const newsCollection = client.db("news_portal").collection("news");
    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: news });
    }

    if (req.method === "POST") {
      const news = req.body;
      const result = await newsCollection.insertOne(news);
      res.json(result);
    }
  } catch (e) {
    console.dir(e);
    res.status(500).send({ message: "Server error" });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
