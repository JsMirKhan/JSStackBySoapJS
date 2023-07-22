// WHAT IS A STACK?
    // In JavaScript, a stack is a linear data structure
    // that follows the Last-In-First-Out (LIFO) principle
    // meaning the last element added to the stack is the first one to be removed.
    // Stacks are commonly used in many programming scenarios
    // such as managing function calls, parsing expressions
    // and handling browser history.
/*

LIFO (Last in => First Out)
    [Added Third]
    [Added Second]
    [Added First]
*/


// methods
    // push() - pushes or adds elements to the stack
    // pop() - pops or removes elements
    // peek() - returns the last element but does not remove it

    // isEmpty() - returns true/false
    // size() - returns the length of stack
    // clear() - removes all stack items


class Stack {

    constructor(){
        this.items = []; // empty array for our stack object
    }

    push(element){
        this.items.push(element); // using built in .push() method - we will create custom methods too
    }

    // this will pop or remove the LAST element of the stack
    pop(){
        if(!this.isEmpty()){ // the isEmpty() we will create it
            return this.items.pop(); // using the built in .pop() method

        }else{
            // give error if the stack object is empty
            throw new Error("Stack is empty");
        }
    }

    // OUR CUSTOM METHODS (isempty(), peek(), size(), clear())

    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length - 1]; // returns the last element in the stack (without removing it like in pop method)

        }else{
            // throw an error if empty
            throw new Error("Stack is Empty");
        }
    }

    // Define the isEmpty method which checks if the stack is empty or not

    isEmpty(){
        return this.items.length === 0;
        // if stack's length is = 0 it returns true otherwise false
    }

    // Return the size or number of items in the stack

    size(){
        return this.items.length;

        // returns length or number of items
    }

    // Clear everythin or remove all items in our stack
    clear(){
        this.items = [] // empty array
    }
}

// Create an object of our Stack

const videoGames = new Stack();
videoGames.push("GTA 5")
videoGames.push("Far Cry 4")
videoGames.push("Assassin's Creed")

videoGames.pop() // remove last element
console.log(videoGames.items)

const FavoriteGame = videoGames.peek();
console.log(FavoriteGame)

let sizeOfGames = videoGames.size();
console.log(sizeOfGames);

videoGames.clear() // remove all elements
console.log(videoGames)

