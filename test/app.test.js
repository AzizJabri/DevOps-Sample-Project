const request = require("supertest")
const app = require("../server")

describe("Test the root path", ()=>{
    test("It should respond to the GET method", () => {
        return request(app).get("/").then(
            response => {
                expect(response.statusCode).toBe(200);
            }
        )
    })
    test("It should respond with Hello World!", () => {
        return request(app).get("/").then(
            response => {
                expect(response.text).toBe("Hello World!")
            }
        )
    })
})

describe("Test the /user path", ()=>{
    test("It should respond with 201",()=>{
        return request(app).get("/user").then(
            response => {
                expect(response.statusCode).toBe(201)
            }
        )
    })
    test("It should return valid credentials", ()=>{
        return request(app).get("/user").then(
            response => {
                expect(response.body.username).toBe("Aziz")
                expect(response.body.role).toBe("Admin")
            }
        )
    })
})