'use strict';

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('normal');

/*

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {

}

console.log('Still normal');

*/