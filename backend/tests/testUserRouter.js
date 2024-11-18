import {describe, expect, test} from '@jest/globals';
const userRoute = require('../routes/user.api');

describe("User Request to", () => {
    test.each(["/add", "/edit", "/delete"])("route %s", (route) => {
        test.each(["missing token", "invalid token"])("with %s", async (bodyCase) => {
        
        });
      }),
    test.each(["/add", "/edit"])("test route %s", (route) => {
        test.each([ "missing body", "invalid body"])("with %s", async (bodyCase) => {
        
        });
      });
})

describe("Create User", () => {
    test.each([
            ["valid", "valid@email.com"], 
            ["invalid", ["invalid@emailformat1", "invalidemailformat2.com"]], 
            ["duplicant", ["duplicant@email.com", "duplicant@email.com"]]]
        ("with %s Email, input : %s", async (bodyCase, email) => {
            
    }),
    test.each([
        ["under minimum length", "123"],
        ["over maximum length", "thisisaverylongpasswordthatshouldexceedthepasswordmaxlength"]
    ])("Create User with password which is %s", async (bodyCase, password) => {
    }))
})

describe("Delete User", () => {
    test("without token", () => {

    }),
})

describe("User Get Route", () => {
    test("", () => {

    }),
    
})

describe("User Update Route", () => {
    test("should return error when no token is provided", () => {

    }),
    test.each([
        ["email", "newemail@example.com"],
        ["password", "newPassword123"],
        ["name", "New Name"],
        ["address", "123 New Street"],
        ["zip", "12345"],
        ["location", "New Location"]])
        ("should update user %s with new value", async (str, expected) => {

    })

})


describe("User Login Route", () => {
    test("should return message \"test\"") /* This route is empty and always reponds with a json message "test" */
})