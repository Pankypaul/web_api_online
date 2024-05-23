const { request , response } = requiere("express");
const { robots } = requiere ("../robots");
 
const getRobots = (req =  request, res = response)=>{
    return res.json({
        robots:robots
    });
}

const getRobotsById = (req =  request, res = response) =>{
    const id = req.params.id;

    let robots = "";

    robots = robots.find((robots )=>{
        return robots.id ===id;
    })
    
    if (robots){
        return res.json({
            ok:true,
            robots,
            statusCode:200
        });
        
    }else{
        return res.json({
            ok:false,
            msg:"Error, no hay un robot con ese id",
            statusCode:404
        });
    }

const getRobotBySeries = (req =  request, res = response) =>{
    let series = parseInt (req.params.series);

    let robotf = "";

    robotf = robots.filter((robot )=> {
        return robot.series === series;
    })

    if (robotf){
        return res.json({
            ok:true,
            series,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"Error, no hay esta series",
            statusCode:404
        });
    }
    
}









}

module.exports = {
    getRobots,
    getRobotsById
}