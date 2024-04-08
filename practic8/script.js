import { speak as speakHello } from './SpeakHello.js';
import { speak as speakGoodBye } from './SpeakGoodBye.js';

var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
        speakGoodBye(names[i]);
    } else {
        speakHello(names[i]);
    }
}

function selectNamesByLength(names) {
    var selectedNames = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i].length % 2 === 0) {
            selectedNames.push(names[i]);
        }
    }
    return selectedNames;
}

var selectedNames = selectNamesByLength(names);
console.log("Selected names with even length:", selectedNames);
