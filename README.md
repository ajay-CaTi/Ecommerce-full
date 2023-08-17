# Notes

---

productController.js
The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model.

---

if (!product) {
return res.status(500).json({
success: false,
message: "Product not found",
});
}
// -------ABOVE replace by BELOW-----------
if (!product) {
return next(new ErrorHandler("Product not found", 404));
}

---

Error :- Unhandle Promise Rejection

DB_URI="mongodb://127.0.0.1:27017/Ecommerce"
DB_URI="mongo://127.0.0.1:27017/Ecommerce"
if above sting brakes(kharab) like above then Unhandle Promise Rejection comes

const server = app.listen(port, () => {
console.log(`Server is working on http://localhost:${port}`);
});

// Unhandle Promise Rejection
process.on("unhandledRejection", (err) => {
console.log(`Error: ${err.message}`);
console.log(`Shutting down server due to Unhandle Promise Rejection`);
server.close(() => {
process.exit(1);
});
});

---

// Handling UCAUGHT Exception

process.on("uncaughtException", (err) => {
console.log(`Error: ${err.message}`);
console.log(`Shutting down server due to Uncaught Exception`);
});

like
console.log(youtube): // Error not defined to handle this use above

// --------------------------------------
CAST ERROR

"message": "Cast to ObjectId failed for value \"64dda9905e5a3726ba8af2d\" (type string) at path \"\_id\" for model \"Product\""

// wrong MongoDB id error
if (err.name === "casteError") {
const message = `Resource not found. Invalid: ${err.path}`;
err = new ErrorHandler(message, 400);
}

Error done 01:24
