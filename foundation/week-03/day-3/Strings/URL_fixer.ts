'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let re: string = 'bots';

let newurl: string = url.replace(re, 'odds');

console.log(newurl);

let missing: string = ':';

let position = 5;

let completeurl: string = [newurl.slice(0, position), missing, newurl.slice(position)].join(''); 
    //slice: Kezdő és végpont értéket ad meg, a végső értéket nem veszi fel 

console.log(completeurl);