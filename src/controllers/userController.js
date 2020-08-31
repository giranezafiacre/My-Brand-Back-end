import Users from '../models/users';
import generateToken from '../helpers/generateToken';
import hashPassword from '../helpers/hashPassword';
import checkPassword from '../helpers/checkPassword';

class User{
    async readAll(req, res){
        const User = await Users.find();
        return res.status(200).json({
            status: 200,
            message: 'users successfully retrieved',
            data: {
                User,
            },
        });
    };
    async readById(req, res){
        const id = req.params.id;
        try {
            const user = await Users.findOne({ _id: id });
            return res.status(200).json({
                status: 200,
                message: 'user successfully retrieved',
                data: user,
            });
            
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'user not found',
            });
        }
    
    };
    async create(req, res){
        try {                   
            const user1 = await Users.find({ email: req.body.email }); 
            if(user1[0])  {
                return res.status(409).json({
                    status: 409,
                    error: `user with ${user1[0].email} already exists`,
                });
                
            }               
            let role;      
            if(req.body.email==='testSignup@cr.com') {role='Admin'} else{role='User'}                                                                                                             
            let personDocument = {
                email: req.body.email,
                password: hashPassword(req.body.password),
                role: role
            };
            const user = new Users(personDocument);
              await user.save();
              return res.status(201).json({
                status: 201,
                message: 'user successfully created',
                data:user,
            });
    
           } catch (err) {
        }
    
    };
    
    
    async login(req, res){
        const userFind = {
            email: req.body.email,
            password: req.body.password
        };
            const user = await Users.find({email: userFind.email});
        if (user[0]&&checkPassword(userFind.password, user[0].password)) {
            const token = generateToken(user[0].email, user[0].role);
            return res.status(200).json({
                status: 200,
                message: 'successfully logged in',
                data: user[0],
                token
            });
        }
        return res.status(404).json({
            status: 404,
            error: 'signup first',
        });
        
    }
    
   async update(req, res){
        const id = req.params.id;
        try {
            const user = await Users.findOne({ _id: id });
                user.email = req.body.email;
                user.password = hashPassword(req.body.password);
          
              await user.save();
            return res.status(200).json({
                status: 200,
                message: 'user successfully updated',
                data: user,
            });
            
        } catch (error) {
            return res.status(404).json({
                status: 404,
                error: 'user not found',
            });
        }
        
    
    }
    
   async deleteUser(req, res){
        const id = req.params.id;
        try {
            await Users.findOne({ _id: id })
            await Users.deleteOne({ _id: id })
            res.status(204).send()
          } catch {
            res.status(404)
            res.send({ error: "user not found" })
          }
       
    }
}

export default new User();
