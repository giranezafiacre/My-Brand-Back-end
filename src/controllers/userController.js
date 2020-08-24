
import users from '../models/users';
const { MongoClient } = require("mongodb");
import generateToken from '../helpers/generateToken';
import hashPassword from '../helpers/hashPassword';
import checkPassword from '../helpers/checkPassword';
import { v4 as uuidv4 } from 'uuid';


const url = "mongodb+srv://Fiacre:Nyagatoma@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
const dbName = "test";

// export const readAll = (req, res) => {
//     return res.status(200).json({
//         status: 200,
//         message: 'users successfully retrieved',
//         data: {
//             users,
//         },
//     });
// };
// export const readById = (req, res) => {
//     const id = req.params.id;
//     const user = users.filter((user) => {
//         return user.id === id;
//     });
//     if (user[0]) {
//         return res.status(200).json({
//             status: 200,
//             message: 'user successfully retrieved',
//             data: user,
//         });
//     }
//     return res.status(404).json({
//         status: 404,
//         error: 'user not found',
//     });

// };
export async const create = (req, res) => {
    // const user = {
    //     id: uuidv4(),
    //     email: req.body.email,
    //     password:hashPassword(req.body.password),
    //     role: 'user'
    // };
    // const userf = users.filter((user1) => {
    //     return user1.email === user.email ;
    // });
    // if (userf[0]) {
    // return res.status(409).json({
    //     status: 409,
    //     error: `user with ${user.email} already exists`,
    // });
    // }else{
    //     users.push(user);
    //     return res.status(201).json({
    //         status: 201,
    //         message: 'user successfully created',
    //         data: user,
    //     });
    // }
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "people"
        const col = db.collection("people");

        // Construct a document                                                                                                                                                              
        let personDocument = {
            id: uuidv4(),
            email: req.body.email,
            password: hashPassword(req.body.password),
            role: 'user'
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }

    finally {
        await client.close();
    }

};
// export const login = (req, res) => {
//     const userFind = {
//         email: req.body.email,
//         password: req.body.password
//     };

//     const user = users.filter((user) => {
//         return user.email === userFind.email && checkPassword(userFind.password, user.password) && user.role;
//     });
//     if (user[0]) {
//         const token = generateToken(user[0].email, user[0].role);
//         return res.status(200).json({
//             status: 200,
//             message: 'successfully logged in',
//             data: user,
//             token
//         });
//     }
//     return res.status(404).json({
//         status: 404,
//         error: 'signup first',
//     });
// }

// export const update = (req, res) => {
//     const id = req.params.id;
//     const user = users.filter((user) => {
//         return user.id === id;
//     });
//     if (user[0]) {
//         user[0].email = req.body.email;
//         user[0].password = req.body.password;
//         return res.status(200).json({
//             status: 200,
//             message: 'user successfully updated',
//             data: user,
//         });
//     }
//     return res.status(404).json({
//         status: 404,
//         error: 'user not found',
//     });

// }

// export const deleteUser = (req, res) => {
//     const id = req.params.id;
//     const user = users.filter((user) => {
//         return user.id === id;
//     });
//     if (user[0]) {
//         var a = users.indexOf(user[0]);
//         users.splice(a, 1);
//         return res.status(200).json({
//             status: 200,
//             message: 'user successfully deleted',
//             data: user,
//         });
//     }
//     return res.status(404).json({
//         status: 404,
//         error: 'user not found',
//     });
// }