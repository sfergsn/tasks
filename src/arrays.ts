/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let nums: number[] = [];
    if (numbers.length > 0) {
        if (numbers.length > 1) {
            nums = [numbers[0], numbers[numbers.length - 1]];
        } else {
            nums = [numbers[0], numbers[0]];
        }
    }
    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((num: string): number => Number(num));
    const nums2 = nums.map((num: number): number => (isNaN(num) ? 0 : num));
    return nums2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const ams = amounts.map((amount: string): string =>
        amount.charAt(0) === "$" ? amount.substring(1) : amount
    );
    const nums = ams.map((num: string): number => Number(num));
    const nums2 = nums.map((num: number): number => (isNaN(num) ? 0 : num));
    return nums2;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const mes = messages.map((message: string): string =>
        message.charAt(message.length - 1) === "!"
            ? message.toUpperCase()
            : message
    );
    const mes2 = mes.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    return mes2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    const num = shortWords.length;
    return num;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let bool = false;
    const RGB = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (RGB.length === colors.length) {
        bool = true;
    }
    return bool;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let elements = "";
    if (addends.length > 0) {
        elements = addends.join("+");
    } else {
        elements = "0";
    }
    const start = sum + "=";
    return start + elements;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0
    );
    let newValues: number[] = [];
    if (firstNegative > -1) {
        newValues = values.slice(0, firstNegative);
    } else {
        newValues = values;
    }
    const sum = newValues.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let newerValues: number[] = [];
    if (firstNegative > -1) {
        newerValues = [...values];
        newerValues.splice(firstNegative + 1, 0, sum);
    } else {
        newerValues = [...values, sum];
    }
    return newerValues;
}
