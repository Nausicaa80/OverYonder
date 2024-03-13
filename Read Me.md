
## Running (EVERY time you return to project – after you have already set things up (see below))

### Start expresss server

1. In the terminal run:

```
npm start
```

Don't kill it; let it run.

### Start frontend dev server

2. In a fresh, second terminal run:

```
cd client
npm run dev
```

Don't kill it; let it run.

### Run mysql

3. In a third terminal run:

```
mysql -u root -p
<enter your mysql password>=(root)
USE <db name (donations)>;
```



Now you are free to run your queries, such as:

```
SHOW tables;
SELECT * FROM <tablename>;
DESC <tablename>;
```

Fin! You are done! Now get developing!

## Setting up repository on machine

### Fork project to your GitHub account

1. Follow the guide [**here**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository)

### Cloning project to your machine

2. Follow the guide [**here**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#cloning-your-forked-repository)

## Setting up project (just the first time)

### Open project in VSCode

1. Once the project is on your machine, drag the folder and drop it in VSCode to open it or run the [shortcut](https://www.freecodecamp.org/news/how-to-open-visual-studio-code-from-your-terminal/):

```
cd <path to project directory>
code .
```

### Add DOT env with your DB password

2. Create a .env file at the top level of your project with the following (all other details are already in the model/database.js file)

```
DB_PASS=<your password>
```

### Create DB

3. Open up the terminal in VSCode and run

```
mysql -u root -p
<enter your mysql password>
CREATE DATABASE <db name (it's in the model/database.js file)>;
```

Or if you already have set up mysql so you skip entering password:

```
mysql
CREATE DATABASE <db name (it's in the model/database.js file)>;
```

You can kill terminal.

## Installation steps (just the first time)

### Install backend packages and set up db tables and populate with initial data

1. In the terminal run:

```
npm i
npm run migrate
```

### Install frontend packages

2. In the same terminal run:

```
cd client
npm i


```