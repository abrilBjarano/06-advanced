import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    const id = '5d86371f233c9f2425f16916';
    findHero( id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No hay heroe';

        if ( error ) {
            element.innerHTML = error;
            return;
        }

        element.innerHTML = hero.name;
    });
}

/**
 * 
 * @param {String} id 
 * @param { ( error: String|Mull, hero: Object ) => void } callback 
 */
const  findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id);

    if ( !hero ) {
        callback(`Hero with id ${ id } not found.`);
        return;
    }

    callback( null, hero );
}