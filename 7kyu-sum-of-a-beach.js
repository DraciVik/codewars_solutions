// Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
// Examples

// sumOfABeach("WAtErSlIde")                    ==>  1
// sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
// sumOfABeach("gOfIshsunesunFiSh")             ==>  4
// sumOfABeach("cItYTowNcARShoW")               ==>  0

function sumOfABeach(beach) {
        const regex = /sand|water|fish|sun/gi;
        const repeatBeach = beach.match(regex);
        if (repeatBeach === null) {
                return 0;
        }
        return repeatBeach.length;
}
