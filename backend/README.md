# Backend API to fetch data

## ▶️ Getting Started

1. Open terminal & clone the repo in your project directory
```
git clone https://github.com/arunabharjun/ssr-vs-csr.git
```

3. Now create a MongoDB instance with two collections -
    * dataset1
    * dataset2

4. Create a .env file in the 'backend' directory like so -
```
NODE_ENV = DEVELOPMENT
PORT = 8000
DATABASE = <Your-Link-to-MongoDB-instance>
```

5. Replace DATABASE with your respective MongoDB instance link.

6. Using terminal from 'backend' directory, install the dependencies
```
npm install
```

## 🖥 Viewing the app

1. Using terminal in your 'backend' directory, start the app
```
npm start
```

2. Visit the app in your favourite browser -
[http://localhost:8000/api](http://localhost:8000/api)

3. Endpoint for Database 1 [http://localhost:8000/api/database1](http://localhost:8000/api/database1)
4. Endpoint for Database 2 [http://localhost:8000/api/database2](http://localhost:8000/api/database2)
