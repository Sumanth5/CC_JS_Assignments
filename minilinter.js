let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords);

const betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
});
console.log('There are ' + betterWords.length + ' words in this paragraph');

let really = 0;
let very = 0;
let basically = 0;
for (let i=0; i < betterWords.length; i++){
  const worde = betterWords[i];
  if (worde === 'really'){
    really++;
  }else if (worde === 'very'){
    very++;
  }else if (worde === 'basically'){
    basically++;
  }
};
console.log(`overused word 'really' count - ${really}
overused word 'very'count - ${very}
overused word 'basically' count - ${basically}`);

let sentence = 0;
for(let i=0; i< story.length; i++){
  const sent = story[i];
  if(story[i] === '.' || story[i] === '!'){
    sentence++;
  }
}
console.log(`There are ${sentence} sentences in this paragraph`);

console.log(betterWords.join(' '));


