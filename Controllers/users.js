let users =[{
    name: "kirti",
    age: "21",
    lovesTo: "code"
}];

// THIS IS GET OPERATION
export const getUsers=(req,res) =>{
    console.log(`Users in database: ${users}`);
    console.log("hello");
    res.send(users);
}

// THIS IS POST OPERATION
export const createUser = (req, res) => {   
    const user = req.body;
   //In the below statement we are spreding the already users object and adding id as well  
    users.push({...user, id: uuid()});
    console.log(`User [${user.username}] added to the database.`);
};

//THIS IS GET A PARTICULAR USER WITH A ID
export const getUser = (req, res) => {
    res.send(req.params.id)
};
// FOR deleting a particular user
export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};
//Update a particular user
export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};