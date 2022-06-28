//! 1 cb2.0
const ACTIONS = {
  addPost: () => console.log('addPost...'),
  findPost: () => console.log('findPost...'),
  addUser: () => console.log('addUser...'),
  findUser: () => console.log('findUser...'),
  findUserQuick: () => console.log('findUserQuick...'),
}

const state = {
  action: 'find',
  entity: 'post',
  mode: '',
}

const capitalize = (word) => word ? word[0].toUpperCase() + word.slice(1) : '' // valid for empty strs
// joinName implementations: (1) === (2)
const joinName = (firstWord, ...otherWords) => 
  firstWord + otherWords.map(capitalize).join('') // (1)
  // otherWords.reduce((name, word) => name + capitalize(word), firstWord) // (2) 

 
function execute() {
  return ACTIONS[joinName( state.action, state.entity, state.mode )]()
}
function executeStateFree(...args) {
  return ACTIONS[joinName(...args)]()
}
function executeWithArgs(nameParts, args) {
  return someLib[joinName(...nameParts)](args)
}

// USAGE:
// mutating state we 

// stateBased
execute() // findPost()

state.action = 'add'
execute() // addPost()

state.action = 'find'
state.entity = 'user'
state.mode = 'quick'
execute() // findUserQuick()


// stateFree 'lambda'
executeStateFree('find', 'post') // findPost()
executeStateFree('add', 'user') // addUser()