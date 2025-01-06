require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const objectsRoutes = require("./routes/object");
const propertiesRoutes = require("./routes/object_properties");
const imagesRoutes = require("./routes/object_image");
const userRoutes = require("./routes/user");
const scanHistoryRoutes = require("./routes/scan_history");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/objects", objectsRoutes);
app.use("/api/properties", propertiesRoutes);
app.use("/api/image", imagesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/history", scanHistoryRoutes);
app.use("/api/auth", authRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} mode`);
});
