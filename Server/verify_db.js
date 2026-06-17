const mongoose = require("mongoose");

const verifyDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ShopEz");
    console.log("Connected to ShopEz DB");

    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    if (!collectionNames.includes('users')) {
      await mongoose.connection.db.createCollection('users');
      console.log('Created users collection');
    }
    if (!collectionNames.includes('orders')) {
      await mongoose.connection.db.createCollection('orders');
      console.log('Created orders collection');
    }

    const Product = mongoose.model("Product", new mongoose.Schema({}, { strict: false }));
    const Users = mongoose.model("Users", new mongoose.Schema({}, { strict: false }));
    const Orders = mongoose.model("Orders", new mongoose.Schema({}, { strict: false }));

    const productCount = await Product.countDocuments();
    const userCount = await Users.countDocuments();
    const orderCount = await Orders.countDocuments();

    console.log(`Product count: ${productCount}`);
    console.log(`Users count: ${userCount}`);
    console.log(`Orders count: ${orderCount}`);

    if (userCount === 0) {
      let cart = {};
      for (let i = 0; i < 300; i++) {
        cart[i] = 0;
      }
      await Users.create({
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        cartData: cart,
      });
      console.log("Created test user: test@example.com / password123");
    }

    process.exit(0);
  } catch (error) {
    console.error("Verification Error:", error);
    process.exit(1);
  }
};

verifyDB();
