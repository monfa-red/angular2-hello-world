# Angular2 Hello World
A bare bone Angular 2 Hello World example to help you start with the Angular.io quick start in TypeScript

**Note:**  Angular 2.0 is still in Alpha Preview!


## How to start

#### Clone the repository
```bash
git clone https://github.com/monfa-red/angular2-hello-world.git
cd angular2-hello-world
```
#### Run TypeScript compiler
```bash
npm i -g typescript         # Install typescript if you haven't already
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata main.ts
```

#### Open it on a local HTTP server! 
```bash
npm install -g http-server  # Or sudo npm install -g http-server
http-server                 # Creates a server at localhost:8080
# In a browser, visit localhost:8080/index.html
```

