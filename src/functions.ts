/*import {
    fahrenheitToCelius,
    add3,
    shout,
    isQuestion,
    convertYesNo,
    isOdd,
    length
} from "./functions";*/

/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let temp: number = temperature - 32;
    temp = temp * 5;
    temp = temp / 9;
    return temp;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let sum = 0;
    if (first > 0) {
        sum += first;
    }
    if (second > 0) {
        sum += second;
    }
    if (third > 0) {
        sum += third;
    }
    return sum;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const newMessage: string = message.toUpperCase();
    const newerMessage: string = newMessage.concat("!");
    return newerMessage;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    const bool: boolean =
        message.charAt(message.length - 1) === "?" ? true : false;
    return bool;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let bool = true;
    let count = 0;
    if (word.localeCompare("yes") === 0 || word.localeCompare("YES") === 0) {
        bool = true;
        count++;
    } else if (
        word.localeCompare("no") === 0 ||
        word.localeCompare("NO") === 0
    ) {
        bool = false;
        count++;
    }
    if (count > 0) {
        return bool;
    } else {
        return null;
    }
}

/**
 * Checks to see if number passed in is odd. Returns true if odd, and false if even
 *
 */
/*export function isOdd(num: number): boolean {
    return true;
}

export function length(word: string): number {
    return 0;
}*/
describe("Testing the basic functions", () => {
    test("Testing the fahrenheitToCelius function", () => {
        expect(fahrenheitToCelius(32)).toBe(0);
        expect(fahrenheitToCelius(-40)).toBe(-40);
        expect(fahrenheitToCelius(-22)).toBe(-30);
        expect(fahrenheitToCelius(14)).toBe(-10);
        expect(fahrenheitToCelius(68)).toBe(20);
        expect(fahrenheitToCelius(86)).toBe(30);
        expect(fahrenheitToCelius(212)).toBe(100);
    });

    test("Testing the add3 function", () => {
        expect(add3(1, 2, 3)).toBe(6);
        expect(add3(9, 7, 4)).toBe(20);
        expect(add3(6, -3, 9)).toBe(15);
        expect(add3(10, 1, -9)).toBe(11);
        expect(add3(-9, -100, -4)).toBe(0);
        expect(add3(-1, -1, 1)).toBe(1);
    });

    test("Testing the shout function", () => {
        expect(shout("Hello")).toBe("HELLO!");
        expect(shout("What?")).toBe("WHAT?!");
        expect(shout("oHo")).toBe("OHO!");
        expect(shout("AHHHH!!!")).toBe("AHHHH!!!!");
        expect(shout("")).toBe("!");
        expect(shout("Please go outside")).toBe("PLEASE GO OUTSIDE!");
    });

    test("Testing the isQuestion function", () => {
        expect(isQuestion("Is this a question?")).toBe(true);
        expect(isQuestion("Who are you?")).toBe(true);
        expect(isQuestion("WHAT ARE YOU !?")).toBe(true);
        expect(isQuestion("WHAT IS THIS?!")).toBe(false);
        expect(isQuestion("OH GOD!")).toBe(false);
        expect(isQuestion("Oh nevermind, it's fine.")).toBe(false);
        expect(isQuestion("")).toBe(false);
    });

    test("Testing the convertYesNo function", () => {
        expect(convertYesNo("yes")).toBe(true);
        expect(convertYesNo("YES")).toBe(true);
        expect(convertYesNo("NO")).toBe(false);
        expect(convertYesNo("no")).toBe(false);
        expect(convertYesNo("Apple")).toBe(null);
        expect(convertYesNo("Bananas")).toBe(null);
        expect(convertYesNo("Nope")).toBe(null);
        expect(convertYesNo("Yesterday")).toBe(null);
        expect(convertYesNo("Maybe")).toBe(null);
    });

    /*test("Testing the isOdd function", () => {
        expect(isOdd(9)).toBe(true);
    });

    test("Testing the length function", () => {
        expect(length("HI")).toBe(2);
    });*/
});
