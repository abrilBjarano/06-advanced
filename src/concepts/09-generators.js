
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    // const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next().value );
    
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me :p';
    element.append( button );

    const renderButton = () => {
        const { value } = genId.next();
        button.innerHTML = `Click ${ value }`;
    }

    button.addEventListener('click', (event) => renderButton() );

}


function* idGenerator(){

    let currentId = 0;
    while(true){
        yield ++ currentId; 
    }

}


function* myFirstGeneratorFunction() {

    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi cuarto valor';

    return 'No hay más valores';
    yield 'Ya no se puede hacer nada';
}