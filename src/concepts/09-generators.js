
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();

    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );

}


function* myFirstGeneratorFunction() {

    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi cuarto valor';

    return 'No hay más valores';
    yield 'Ya no se puede hacer nada';
}