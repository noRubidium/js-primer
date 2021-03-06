
/* String operations */
let firstName  = 'alex';
let secondName = 'afzal';

/* Strings can be concatenated with the + operator */
const fullName = firstName + ' ' + secondName;

// we can also use template literals to format strings as so
const altFullName = `${firstName} ${secondName}`;

// but maybe we want to capitalise the first letters.
// turns out to do that it's kinda gross.
// we can't simply index as we can in other languages
const properNoun = noun => 
      noun.charAt(0).toUpperCase() + noun.substring(1);

// so to combine that.
const properFullName =
   `${properNoun(firstName)} ${properNoun(secondName)}`;
