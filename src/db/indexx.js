import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config({path:'../../.env'})


const DBConnect = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        console.log(`\n MONGODB connected! DB host: ${connectioninstance.connection.host}`);
        if (connectioninstance) {
            return connectioninstance;
        }
    } catch (error) {
        console.error("Error:", error);
        process.exit(1); // Exit the application on failure
    }
};
export default DBConnect
