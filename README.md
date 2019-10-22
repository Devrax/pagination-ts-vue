# Pagination with VUE/Typescript

### How to make it run

first you need to install mongodb in your computer and start the service (From command line is like this)

#### Linux
```bash
sudo service mongod start
```
#### Windows
```bash
service mongod start
```

to stop it only change `start` for `stop`.

Later you have to install the depencies in both folders running the command `npm install` as in the **server** folder as in the **client** folder.

After both installations are done, run first `npm run start` inside the server directory and generate dummy data throught the `/create` endpoint, for default it will generate 100 articles, you can change that in `Pagination/server/routes/index.js`, after that go to the client and run it with `npm run server`. you should see something like this...

![alt text](./img/Screenshot&#32;from&#32;2019-10-20&#32;19-25-44.png "Pagination page top")
![alt text](./img/Screenshot&#32;from&#32;2019-10-20&#32;19-26-49.png "Pagination page bottom")
