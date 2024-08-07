require("dotenv").config();
const express = require("express");
const { getDatabase } = require("firebase/database");
const app = express();
const cors = require('cors')
const port = 3012;
const {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} = require("firebase/firestore");
const { db } = require("./firebase");
app.use(cors())
// Define a route to retrieve data
app.get("/latest", async (req, res) => {
  try {
    // // , where("date", "==", new Date())
    const q = query(collection(db, "forexRates"), where("date", "==",new Date().toISOString().split('T')[0] ));
    const docSnap = await getDocs(q);
    let t=[]
    docSnap.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    t.push(doc.data())
    });
 
    res.json(t)
  } catch (error) {
    console.log(error);
    // res.status(500).send("Error retrieving data");
  }
});
app.get("/", (req, res) => {
  res.json("hello world");
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
