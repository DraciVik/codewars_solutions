// Task Overview:

// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus.
//     wait is the number of people waiting to get on to the bus.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:

// enough(10, 5, 5);
// // 0, He can fit all 5 passengers
// enough(100, 60, 50);
// // 10, He can't fit 10 out of 50 waiting

function enough(cap, on, wait) {
        if (cap >= on + wait) {
                return 0;
        }
        if (cap < on + wait) {
                return -(cap - (on + wait));
        }
}
