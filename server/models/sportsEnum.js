var sports = require('../../public/shared/sports');
sports.splice(0, 1);    //removing all

module.exports = sports.map(function (sport){
    return sport.id;
});