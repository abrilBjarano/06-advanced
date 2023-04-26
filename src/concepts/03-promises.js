import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
        
            <h1 style="color:red"> Error </h1>
            <h3 style="color:red" => ${ error } </h3>
         
        `;
    }

    const id1 = '5d86371f2343e37870b91ef1';

    findHero( id1 )
        .then( renderHero )
        .catch( renderError );

}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
export const findHero = ( id ) => {
    return new Promise(( resolve, reject ) => {

        
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);
    });
}





