# twitter clone

## Aplication
The challenge consists of creating a simple post timeline. The posts consist of text but it can
also refer to data from employees, such as username. The employees can be added and
removed from the database.

## Technologies used

* Angular 8
* git
* Nodejs
* npm
* Bootstrap
* jquery
* fvi-angular-mentions
* fontawesome
* angular-in-memory-web-api
* subsink

## System Requirements

| Technology | Site |
| ------ | ------ |
| Angular CLI v 8.x.x | [https://cli.angular.io] |
| Git | [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git] |
| Nodejs v 12.x.x | [https://nodejs.org/en/download/] |
|

---

## angular-in-memory-web-api
An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.

It intercepts Angular Http and HttpClient requests that would otherwise go to the remote server and redirects them to an in-memory data store that you control.
View more in [github](https://github.com/angular/in-memory-web-api).

## subsink
SubSink is a dead simple class to absorb RxJS subscriptions in an array.
View more in [github](https://github.com/wardbell/subsink#readme).

## Folders organization

### Core

* interceptors: http-error.interceptor - Responsible for intercept the http errors. 
* services: Responsible for maintaining the application's global services.
* services/data.service.ts: Service with responsible for maintaining the database global(Look angular-in-memory-web-api).

### Models

* Responsible for maintaining the application's global models.


### Modules

* Due to the use of the [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules) this application is subdivided into the following module:

    #### admin

    * Contains the administration page

    #### post

    * Contains the post page

---

## Run the application

Clone the project located in the repository of [github](https://github.com/bobsk8/post-manager).

```sh
$ git clone https://github.com/bobsk8/post-manager
```

Enter the project folder with the command
```sh
$ cd post-manager
```

Install the front dependencies with the command
```sh
$ npm i
```

Run the application
```sh
$ ng serve
```

Open browsed on
```sh
http://localhost:4200/
```