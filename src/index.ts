import {NumbersCollection} from "./NumbersCollection";
import {CharactersCollection} from "./CharactersCollection";
import {LinkedList} from "./LinkedList";

const numbersCollection = new NumbersCollection([2, 1, 5, 0, 4, 3, -1, -10]);
numbersCollection.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(200);
linkedList.add(100);
linkedList.add(-30);
linkedList.add(-50);

linkedList.sort();
linkedList.print()
