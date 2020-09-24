    1. mkdir <MERN_Project>
    2. cd <MERN-Project>
    3. git init
    4. npm init (for json)
    5. .gitignore =>node_modules
    =======================
    Git
    6. git add .
    7. git commit -m "Initial commit"
    8. Creating a new GitHub repository <mern-project>
    9. $ git remote add origin https://github.com/tsvGithub/....git
    10. $ git push -u origin master
    11. $ git status
    ===============================
    Install dependencies:
    12. $ npm install express mongoose cors dotenv  --save
    13. $ npm install nodemon -g
    14. $ npm install concurrently -g
    15. $ npx create-react-app client

========================== 1. .env => • DATABASEURL=mongodb://localhost:27017/<databasetName> • Atlas_URI=…

    ==============================
    Scripts:
    1. backend: package.json =>
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node app",
        "client": "cd client && npm run start",
        "server": "nodemon app --ignore client/",
        "client-install": "cd client && npm install",
        "server-install": "npm install",
        "install-all": "concurrently \"npm run client-install\" \"npm run server-install\"",
        "dev": "concurrently \"npm run client\" \"npm run server\"",
        "heroku-postbuild": "cd client && npm install && npm run build"
    	  },
        ---------------------------
    2. client: package.json =>
     "proxy": "http://localhost:5000"

================================================
