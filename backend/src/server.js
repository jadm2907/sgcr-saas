"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var data_source_1 = require("./data-source");
var userRoutes_1 = require("./routes/userRoutes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use("/api/users", userRoutes_1.default);
// Iniciar servidor
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected");
    app.listen(PORT, function () {
        console.log("Server running on port ".concat(PORT));
    });
})
    .catch(function (error) { return console.log(error); });
