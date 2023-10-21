**Server**

1. Initialisasi awal

- npm init -y

2. Instalasi packagae
   - Dependencies: npm install express pg sequelize dotenv cors bcrypt jsonwebtoken
   - devDependencies: nodemon sequelize-cli --save-dev
3. buat file app.js, .gitignore, .env

4.Buat Router

5. Buat Controller

6. Error handling (Optional)

7. set Env

**DATABASE**

1. initialisasi awal

   - npx sequelize init

2. setting config.json

3. Create Database: myblog

   - npx sequelize db:create

4. Create Migration dan models

   - npx sequelize model:generate --name User --attributes username:string,password:string,nama:string,email:string,role:string
   - npx sequelize model:generate --name Posts --attributes Userid:integer,posting_status:integer,title:string,content:TEXT

5. Migrate dan membuat Table
   - npx sequelize db:migrate
