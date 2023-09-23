const request = require('supertest');
const server = 'http://localhost:3000';
const Cookies = require("js-cookie");
const { mockClient } = require('aws-sdk-client-mock');
const functionController = require('../server/controllers/js/functionControllers.js')
//import functionController from '../server/controllers/functionController';

const { LambdaClient, UpdateFunctionConfigurationCommand, GetFunctionCommand} = require('@aws-sdk/client-lambda');
// import { LambdaClient, UpdateFunctionConfigurationCommand, GetFunctionConfigurationCommand} from '@aws-sdk/client-lambda';
//const lambdaDB = new LambdaClient;
const lambdaMock = mockClient(LambdaClient);
jest.mock('../server/models/js/userModels', () => {
  return {
    create: jest.fn(),
    findOne: jest.fn(),
  }
})

describe('Route integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })
  xdescribe('/layers routes', () => {
    // GET to /layers/list
    describe('GET to /list', () => {
      it('response with 200 status and application json', () => {
        return request(server)
          .get('/layers/list')
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    // POST to /layers/remove
    //takes object {ARN:string, functionName:string, LayerName:string}
    describe('POST to /remove', () => {
      it('response with 200 status and application json', () => {
        
        return request(server)
          .post('/layers/remove')
          .send()
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    // POST to /layers/add
    //takes {ARN, arrayOfCheckedFunctions, layerName}
    describe('POST to /add', () => {
      it('response with 200 status and application json', () => {
        return request(server)
          .post('/layers/add')
          .send()
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
    // POST to / layers/function
    //takes {ARN}
    describe('POST to /functions', () => {
      it('response with 200 status ad application json', () => {
        return request(server)
          .post('/layers/functions')
          .send()
          .expect('Content-Type', /application\/json/)
          .expect(200);
      })
    })
  })
  xdescribe('/functions routes', () => {
    // GET to /functions/list
    xdescribe('GET to /list', () => {
        it('response with 200 status and application/json content type', async () => {
          const response = await request(server)
            .get('/functions/list')
            .set('Cookie', 'ARN=arn:aws:iam::082338669350:role/OSPTool')
            .expect('Content-Type', /application\/json/)
            .expect(200)
          expect(response.body.Functions).toBeTruthy();
        })
    })
    // POST to /functions/layers
    //takes {function ARN: layers:array}
    xdescribe('POST to /layers', () => {
        it('response with 200 status and application/json content type', async () => {
          const response = await request(server)
            .post('/functions/layers')
            .send({ARN: 'arn:aws:lambda:us-east-1:082338669350:function:Nhats1stFunction',
             layers: [{
              name: 'ZachLayer',
              versions: [ 1 ], 
              ARN: [ 'arn:aws:lambda:us-east-1:082338669350:layer:ZachLayer:1' ]},
            {
              name: 'GregLayer',
              versions: [ 1 ],
              ARN: [ 'arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1' ]
            }]})
            .expect('Content-Type', /application\/json/)
            .expect(200)
          expect(response.body).toEqual([{
              LayerArn: "arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1",
              LayerName: "GregLayer",
              LayerVersion: 1
            }]);
        })
    })
    // POST to /functions/remove
    // {ARN, funcationName, layerName}
    describe('POST to /remove', () => {
      it('responds with 200 status ', async () => {
        // const response = await request(server)
        //   .post('/functions/remove')
        //   .send({ARN: 'arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1',
        //   functionName: 'Nhats1stFunction'})
        //   .expect('Content-Type, /application\/json/')
        //   .expect(200)
        // expect(response.body).toBe(true);

        const data = {FunctionName: 'Nhats1stFunction'}
        const input = {FunctionName: 'Nhats1stFunction', Layers: ['arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1']};
        
        lambdaMock
        .on(GetFunctionCommand, data).resolves(
          {
            Configuration: {         
              Layers: [{Arn: 'arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1'}]
          }
        });
        lambdaMock.on(UpdateFunctionConfigurationCommand, input).resolves({
          FunctionName: 'Nhats1stFunction',
        });

        const mockreq = {body: {ARN: 'arn:aws:lambda:us-east-1:082338669350:layer:GregLayer:1', functionName: 'Nhats1stFunction'}};
        const mockres = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
          locals: {}
        };
        const mocknext = jest.fn()

        const response = await functionController.removeLayer(mockreq, mockres, mocknext)
        console.log('mockres:', mockres);
        console.log('response: ', response)
        expect(mockres.status).toHaveBeenCalledWith(200)
        expect(mockres.locals.successful).toBe(true)
        expect(mocknext).toHaveBeenCalled();
      
      })


      // import { mockClient } from "aws-sdk-client-mock";
      // import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

      // const ddbMock = mockClient(DynamoDBDocumentClient);

      // beforeEach(() => {
        //   ddbMock.reset();
        // });

      // getUserNames.spec.ts
      // import { getUserNames } from "./getUserNames";
      // import { GetCommand } from "@aws-sdk/lib-dynamodb";

      // it("should get user names from the DynamoDB", async () => {
      //   ddbMock.on(GetCommand).resolves({
      //     Item: { id: "user1", name: "John" },
      //   });
      //   const names = await getUserNames(["user1"]);
      //   expect(names).toStrictEqual(["John"]);
      // });


    })
    // POST to /functions/add <----- not currently used

    
  })
  describe('/users routes', () => {
    // POST to /users/signup
    describe('POST to /signup', () => {
      it('should create a user successfully', async () => {
        const response = await request(server)
          .post('/user/signup')
          .send({
            username: 'test',
            password: 'password',
            ARN: '1234'
          })
          .expect('Content-Type', /json/)
          .expect(200)
        expect(response.body.message).toBe('Successfully signed up')
        expect(User.create).toHaveBeenCalled();
      })
    })
    // POST to /users/login
    describe('POST to /login', () => {
      it('should log user in successfully', async () => {
        const response = await request(server)
          .post('/user/login')
          .send({
            username: 'test',
            password: 'password'
          })
          .expect(200)
        
        expect(response.body.message).toBe('Successfully signed up')
      })
      it('should handle incorrect username/password', async () => {
        try {
          const response = await request(server)
            .post('user/login')
            .send({
              username: 'WrongUsername',
              password: 'WrongPassword'
            })
            .expect(400)
        } catch(err) {
          console.log(err)
        }
      })
    })
    // DELETE to /users/logout <---- frontend button not implemented yet
    describe('DELETE to /logout', () => {
      // beforeEach(() => {
      //   Object.defineProperty(window.document, 'cookie', {
      //     writable: true,
      //     value: 'ARN=1234',
      //   });
      // })
      it('should handle logout successfully', async () => {
        const login = await request(server)
          .post('/user/login')
          .send({
            username: 'test',
            password: 'password'
          })
          .expect(200)
        expect(login.body.message).toBe('Successfully signed up')
        const logout = await request(server)
          .post('users/logout')
          .expect(200)
        expect(logout.header['set-cookie']).toBeUndefined();
      })
    })
  })
})