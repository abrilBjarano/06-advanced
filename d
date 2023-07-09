[1mdiff --git a/src/concepts/03-promises.js b/src/concepts/03-promises.js[m
[1mindex 78f2bc5..9823e16 100644[m
[1m--- a/src/concepts/03-promises.js[m
[1m+++ b/src/concepts/03-promises.js[m
[36m@@ -29,26 +29,38 @@[m [mexport const promiseComponent = ( element ) => {[m
     const id1 = '5d86371f2343e37870b91ef1';[m
     const id2 = '5d86371f25a058e5b1c8a65e';[m
 [m
[31m-    let hero1, hero2;[m
[31m-[m
[31m-    findHero( id1 )[m
[31m-        .then( (hero1) => {[m
[31m-[m
[31m-            findHero( id2 )[m
[31m-                .then( hero2 => {[m
[31m-                    renderTwoHeroes(hero1, hero2)[m
[31m-                })[m
[31m-                .catch( renderError );[m
[32m+[m[32m    let hero1;[m
[32m+[m
[32m+[m[32m    findHero(id1)[m
[32m+[m[32m        .then( hero => {[m
[32m+[m[32m            hero1 = hero;[m
[32m+[m[32m            return findHero(id2);[m
[32m+[m[32m        }).then( hero2 => {[m
[32m+[m[32m            renderTwoHeroes( hero1, hero2 );[m
         })[m
         .catch( renderError );[m
 [m
[31m-}[m
[32m+[m[32m//     let hero1, hero2;[m
[32m+[m
[32m+[m[32m//     findHero( id1 )[m
[32m+[m[32m//         .then( (hero1) => {[m
[32m+[m
[32m+[m[32m//             findHero( id2 )[m
[32m+[m[32m//                 .then( hero2 => {[m
[32m+[m[32m//                     renderTwoHeroes(hero1, hero2)[m
[32m+[m[32m//                 })[m
[32m+[m[32m//                 .catch( renderError );[m
[32m+[m[32m//         })[m
[32m+[m[32m//         .catch( renderError );[m
[32m+[m
[32m+[m[32m// }[m
 [m
 /**[m
  * [m
  * @param {String} id [m
  * @returns {Promise}[m
  */[m
[32m+[m
 export const findHero = ( id ) => {[m
     return new Promise(( resolve, reject ) => {[m
 [m
[36m@@ -61,10 +73,5 @@[m [mexport const findHero = ( id ) => {[m
         }[m
 [m
         reject(`Hero with id ${ id } not found`);[m
[31m-    });[m
[31m-}[m
[31m-[m
[31m-[m
[31m-[m
[31m-[m
[31m-[m
[32m+[m[32m    })[m
[32m+[m[32m};[m
\ No newline at end of file[m
