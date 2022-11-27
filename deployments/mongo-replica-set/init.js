rs.initiate();
db.createUser({"user": "root", "pwd": "root", "roles": ["root"]});
db.auth("root", "root");
rs.add("mongo_rs_2");
rs.add("mongo_rs_3");
