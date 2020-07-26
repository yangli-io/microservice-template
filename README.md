## Standard Express Microservice Template

- [x] Typescript
- [x] Dockerized
- [x] Jest Unit Testing
- [x] Pre-commit check
- [x] YAML swagger file
- [] Correlation Id

### Purpose
The purpose of this template repository is to have something simple to get you started with. This microservice is written in Express.js and Typescript. A standard dockerfile has been setup to go with this microservice.

#### Express.js
Express is great for microservices, it provides enough low level apis for you debug and figure out. There is not a lot of hot wiring or magic that takes care of stuff for you which means you might have to write a bit more code but at the same time, if something goes wrong, it's not hard to figure out.

#### Typescript
Type checking is possibly one of the best improvements to Javascript since its birth. If you are beginning out with Javascript, this may seem like a nuance to you or perhaps it feels like it's more designed for less skilled programmers to prevent them from making mistakes. After working on many projects, you will come to realise that implicit type errors are just errors which can easily be avoided by adding something like Typescript so why not. 

#### Docker
Docker makes deployments extremely simple. 

### For Local Server

```bash
npm install

npm run dev
```

### For Production Server

```bash
npm run build

npm start
```

### For Docker Compose

```bash
npm install

npm run build
docker-compose build

# Run Docker
docker-compose up
```


