# ExpressJS_Tutorial
- Routing
- Middleware (in app.js): 
    + Application-level Middleware
    + Router-level Middleware
    + Error-handling Middleware
    + Built-in middleware  
    + Third-party middleware
- Error handling
- Files handling
- Database: MongoDB

## How to run this project ?
Step 1: Clone and Installation
```bash
git clone https://github.com/ngothilinh20187179/ExpressJS_Tutorial.git
cd ExpressJS_Tutorial
npm install
```
Step 2: Create .env & Add your MongoDB connection string to .env file
```bash 
PORT=3000
MONGODB_URI_LOCAL="mongodb://localhost:27017/database_name"
MONGODB_ATLAS_URI="mongodb+srv://<username>:<password>@<cluster-url>/my_express_db?retryWrites=true&w=majority"
```
Step 3: Run
```bash
npm run dev
```

## How to init an Express project ?
Step 1: Install Node.js
https://nodejs.org/en/download
```bash
node -v
```
Step 2: Create a Project Directory
```bash
mkdir ExpressJS_Tutorial
cd ExpressJS_Tutorial
```
Step 3: Initialize npm
```bash
npm init -y
```
Step 4: Install Express 
```bash
npm install express
```
Step 5: Create an app.js (or server.js) file
Step 6: Run: 
```bash
node app.js
``` 
Step 6: Run use nodemon: 
```bash
npm install --save-dev nodemon
```
update code in 'package.json'
```bash
npm run dev
```