function updateLight(current) {
        if (current === 'green') {
                return 'yellow';
        }
        if (current === 'yellow') {
                return 'red';
        }
        return 'green';
}
