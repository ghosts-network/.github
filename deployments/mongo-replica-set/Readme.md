run in terminal

```bash
openssl rand -base64 741 > keyfile
chmod 600 keyfile
docker compose up -d
docker exec -it mongo_rs_1 mongosh admin
```

run in mongo instance

```js
rs.initiate();
db.createUser({"user": "root", "pwd": "root", "roles": ["root"]});
db.auth("root", "root");
rs.add("mongo_rs_2");
rs.add("mongo_rs_3");
```
