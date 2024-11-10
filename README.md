# be-nestjs

## Features
+ Payment Gateway integrated
+ Get list
+ Authentication: JWT, OAuth
+ Authorization: RBAC
+ Microservices
+ Cache
+ Chat (Peer, Group, Meeting)
+ Notification


## Layers
+ Controller
+ Service
+ Repository (TypeORM)
+ Middleware 
+ Exception filters
+ Pipes
+ Guards
+ Interceptors
+ Swagger

## Routes


## Applied code
+ Base Controller, Base Service, Base Dto, Base Entity
+ Alternative key for common primary key between SQL table and NoSQL Collections
+ RBAC 
+ Clean Code, Scalable code


## Models. Please check file src/common/migrations/database.ts

##      Modules              Endpoints                  Constraints
HR      Account              /hr/accounts

HR      Employee             /hr/employees

AUTH    User                 /auth/users

TRANS   Payment              /trans/payments

SOC     PeerChat             /soc/peer-chat
SOC     MeetChet             /soc/meet-chat



+ Open API SDK
+ Openapi generator
+ nestjs swagger document write file


## Issues:
+ Error: dependency circulus
+ import relative path instead of "from '.' "

https://wanago.io/2022/02/28/api-nestjs-circular-dependencies/

https://stackoverflow.com/questions/72393168/in-the-next-major-version-nest-will-not-allow-classes-annotated-with-injectabl

+ CircularDependencyException [Error]: A circular dependency has been detected inside @InjectRepository()

https://github.com/nestjs/nest/issues/3555


nestjs A circular dependency has been detected inside @InjectRepository
https://stackoverflow.com/questions/63257409/nest-js-circular-reference-at-the-moment-to-inject-a-repository


nestjs service on another service
https://stackoverflow.com/questions/51819504/inject-nestjs-service-from-another-module


Unable to get class properties
https://stackoverflow.com/questions/75057430/how-to-list-properties-of-a-nestjs-dto-class


typescript get class properties with empty values
https://stackoverflow.com/questions/53430373/how-to-get-properties-of-a-class-with-empty-constructor-using-typescript-in-the

Swagger
ApiExtraModels
https://stackoverflow.com/questions/61143316/nestjs-swagger-what-model-is-the-apiextramodel-expecting-as-a-parameter

+ 
https://stackoverflow.com/questions/70093170/nestjs-assets-views-folder-not-being-added-to-dist






## References:

https://stackoverflow.com/questions/41054507/postgresql-array-of-elements-that-each-are-a-foreign-key

Base Service
https://stackoverflow.com/questions/51056158/nestjs-create-base-crud-service


Repository pattern TypeORM

nestjs typeorm
https://viblo.asia/p/nestjs-xay-dung-project-tich-hop-typeorm-repository-pattern-Eb85o9VBZ2G





## Request Life cycle:

- Middleware
+ What? A function which is called before the route handler, have access to request, response, and next object.
+ How? 
1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.
5. If the current middleware function does not end the request-response cycle,it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.


- Exception filters



- Factory
+ Bind Dto to Entity
+ Bind Entity to Dto





## Backlogs:

- Middleware: 
+ Route wildcards



data

{
    "username": "nguyenvana",
    "email": "nguyenvana@gmail.com",
    "password": "abc123@",
    "name": "Nguyễn Văn A",
    "phone": "0123456789",
    "avatar": "",
    "gender": "MALE",
    "birthDay": "",
    "salary": 0,
    "role": "MEMBER",
    "managerId": "",
    "positionId": "",
    "departmentId": "",
    "projectIds": []
}



Issues:
[
    yarn run v1.22.22
    warning ../../../../package.json: No license field
    $ nest start
    node:internal/modules/cjs/loader:1051
    throw err;
    ^

    Error: Cannot find module '@nestjs/common'
    Require stack:
]

Solution
https://stackoverflow.com/questions/45690202/i-have-a-license-in-my-package-json-why-is-npm-yarn-saying-it-is-missing