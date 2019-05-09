// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
        let counter = 0;
        if (dadYearsOld === sonYearsOld * 2) {
                return counter;
        }
        if (dadYearsOld > sonYearsOld * 2) {
                for (let i = dadYearsOld; i > sonYearsOld * 2; i--) {
                        counter += 1;
                }
        } else {
                for (let i = dadYearsOld; i < sonYearsOld * 2; i++) {
                        counter += 1;
                }
        }
        return counter;
}
