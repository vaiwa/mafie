
//to search 50000 metres around lan
//http://localhost:8060/api/ads?conditions={ "location": { "$nearSphere": {"$geometry":{"type":"Point", "coordinates" : [ 50.05, 14.42 ]}, "$maxDistance": 50000}} }