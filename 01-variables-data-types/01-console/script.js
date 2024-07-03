console.log(100);

console.log('Buna dimineata')

const x = 100;

console.log(x);

console.error('Alert')
console.warn('Warning')
console.table({name: 'Brad', email: 'brad@gmail.com'})

console.group('simple')
console.error('Alert')
console.warn('Warning')
console.table({name: 'Brad', email: 'brad@gmail.com'})
console.groupEnd()

const styles = 'padding: 100px; background-color: white; color: green';

console.log('%c Hello World!', styles);