const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require("cors");
const fs = require('fs');

const uri = 'mongodb+srv://kailiu989:HcHQj9JtDXpkuQ0q@eventscluster0.0tvjj.mongodb.net/?retryWrites=true&w=majority&appName=EventsCluster0';
const dbName = 'Events';
const collectionName = 'Events'; // Replace 'yourCollectionName' with the actual name

// const path = require('backend\fetchedData.json');

// app.use(express.static(path.join(__dirname))); // Assuming 'fetchedData.json' is in the 'public' folder


// Connect to MongoDB with mongoose
async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

// Fetch data using MongoClient
async function fetchData() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const data = await collection.find({}).toArray();

        console.log("Fetched Data:", JSON.stringify(data, null, 2));
        // Save data to JSON file in local directory
        fs.writeFileSync('./fetchedData.json', JSON.stringify(data, null, 2));
        console.log("Data written to fetchedData.json");
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        await client.close();
    }
}

// Define Mongoose schema and model
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true, unique: true },
    startTime: { type: Date, default: Date.now },
    location: { type: String, required: true, unique: true },
    endTime: { type: Date, default: Date.now },
});
const User = mongoose.model('User', UserSchema);

// Express setup
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
    resp.send("App is Working");
    // console.log(req);
});

app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(result);
            console.log("User registered:", result);
        } else {
            console.log("User already registered");
        }
    } catch (e) {
        console.error("Error:", e);
        resp.send("Something went wrong");
    }
});

app.listen(5000, () => {
    console.log("App listening on port 5000");
});

connectDB();
fetchData();
