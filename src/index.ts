import express from "express"; // Use default ES Module import

const app=express();
const PORT=Number(process.env.PORT) || 8000;
app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
});

app.listen(PORT,()=>console.log("Server started ",PORT));