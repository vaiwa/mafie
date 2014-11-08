var request = require('supertest');
var app = require('../../index');

//to search 50000 metres around Longitude 50.05 and Latitude 14.42
//http://localhost:8060/api/ads?conditions={ "location": { "$nearSphere": {"$geometry":{"type":"Point", "coordinates" : [ 50.05, 14.42 ]}, "$maxDistance": 50000}} }