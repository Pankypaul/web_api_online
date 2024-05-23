const { request , response } = requiere("express");
const { robots } = requiere ("../robots");
 
const getRobots = (req =  request, res = response)=>{
    return res.json({
        robots:robots
    });
}

const getRobotsById = (req =  request, res = response) =>{
    const id = req.params.id;
}

module.exports = {
    getRobots,
    getRobotsById
}