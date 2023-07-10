import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsAsyncComponent = async( element ) => {

    const heroGenerator = getHeroeGenerator();
    let isFinished = false;

    do {

        const { value, done } = await heroGenerator.next();
        isFinished = done;

        if( isFinished ) break;

        element.innerHTML = (await heroGenerator.next()).value;

    } while ( !isFinished )


    
}

async function* getHeroeGenerator(){

    for( const hero of heroes ){
        await sleep();
        yield hero.name;
    }

    return 'ya no hay mas';
}


const sleep = () => {
    return new Promise(( resolve ) => {
        setTimeout(() => {
            resolve();
        }, 200);
    })
}