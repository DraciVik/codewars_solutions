function checkExam(array1, array2) {
        let counter = 0;
        for (let i = 0; i < array1.length; i += 1) {
                if (array2[i] === '') {
                        // eslint-disable-next-line no-continue
                        continue;
                } else if (array1[i] === array2[i]) {
                        counter += 4;
                } else {
                        counter -= 1;
                }
        }
        if (counter < 0) {
                return 0;
        }
        return counter;
}
