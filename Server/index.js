import  express from'express'; 
import cors from "cors";
const app = express();
import router from './Router/route.js';
app.use(express.json()); 


// function loader(req, res, next) {
//     const admin = false;

//     if (admin) {
        
//         return res.send("You are an admin: yahhh");
//     }

    
//     console.log('User is not an admin, proceeding...');
//     next();
// }


// app.use(loader);


app.use(cors({
    origin: "http://localhost:5173",
    methods:["POST","GET","PATCH","PUT"],
    credentials:true,
}));


app.use('/listings',router);

const port = 5000;
app.listen(port, () => {
    console.log(`Server Running on ${port}`); 
});
