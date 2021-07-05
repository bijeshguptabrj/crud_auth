const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "Aidea1234567890",
    mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://nodeCRUD:Aidea123@cluster0.ncv43.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
   }
   export default config