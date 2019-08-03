// Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values (not necessarily in the same order) and false if they do not.

// The supplied arguments will be objects, arrays and strings.

// Examples:

// {laura:4, adam:3} & {laura:4, adam:3} => true
// {adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
// [{a:4},{b:3}] & [{b:3},{a:4}]) => true
// {a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
// 'Hello' & 'Hello' => true

function areEqual(value1, value2) {
        // if values are equal there is no need to check if they are objects
        if (value1 === value2) return true;

        // if they are not equal and they are not of type object (null is checked because typeof null returns object) return false
        if (typeof value1 !== 'object' || value1 === null || typeof value2 !== 'object' || value2 === null)
                return false;

        const value1Keys = Object.keys(value1);
        const value2Keys = Object.keys(value2);

        // if the length of them mismatches then we know they are not equal
        if (value1Keys.length !== value2Keys.length) return false;

        for (const key of value1Keys) {
                // checks each key of value1Keys to be in the value2Keys array and also checks for nested objects or arrays. If either returns false then we return false also
                if (!value2Keys.includes(key) || !areEqual(value1[key], value2[key])) return false;
        }
        // returns true if all other checks fail
        return true;
}
