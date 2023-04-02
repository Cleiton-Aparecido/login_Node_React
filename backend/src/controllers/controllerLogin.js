
const users = [{
    id: 1,
    name: 'cleiton',
    email: 'Cleiton@gmail.com',
    password: '123456'
},  {
    id: 2,
    name: 'hudson',
    email: 'hudson@gmail.com',
    password: '123456'
}
];

class ControllerLogin{

    static async ValidarLogin(req,res){
        const {email , password } = req.body;
    
       
        const user = users.find(user => user.email == email && user.password == password);
        if(user){
            res.status(200).json(user);
        }
        
        else{
            res.status(401).json({ message: 'Invalid Credentials '});
        }

    };

};

module.exports = ControllerLogin