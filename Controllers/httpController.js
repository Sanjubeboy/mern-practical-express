

const users = [
    {
        id:1,
        name:'beboy'
    },
    {
        id:2,
        name:'kumar'
    }
]

const getData = (req, res) => {
    res.status(200).json({message:'Displaying all users', data:users})
}

const getDataById = (req, res) => {
    const newuser = users.filter(item => item.id === Number(req.params.id))
    res.status(200).json({message:'success', data: newuser})
}


const postData = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    // res.status(200).send(`Created the new user with id: ${req.body.id}`)
    res.status(200).json({message:`Created the new user with id: ${req.body.id}`, data: users})
}

const updateData = (req, res) => {

    users.map(item => {
        if(item.id === Number(req.body.id))
        {
            item.name = req.body.name
        }
    })

    res.status(200).json({message:`Updated the user details with id: ${req.body.id}`,data:users})
}

const deleteData = (req, res) => {
    const newuser = users.filter(item => item.id !== Number(req.params.id))
    res.status(200).json({message:`Deleted the user with id ${req.params.id}`,data:newuser})
}


module.exports = {getData, postData, updateData, deleteData, getDataById}