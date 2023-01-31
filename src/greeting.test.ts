import { greeting } from "./greeting";

describe("index", () => {
    const defaultMessage = "Hello World";
    const customMessage = 'Hello Nodejs';

    test("should be return a default greeting", () => {

        const messageWithoutParam = greeting();
    
        expect(messageWithoutParam).not.toStrictEqual(customMessage);
        expect(messageWithoutParam).toStrictEqual(defaultMessage);
    });
    test('should be return a custom greeting', () => {
        
        const messageWithParam = greeting(customMessage);

        expect(messageWithParam).not.toStrictEqual(defaultMessage);
        expect(messageWithParam).toStrictEqual(customMessage);
    })
});
