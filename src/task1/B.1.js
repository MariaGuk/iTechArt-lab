const notes = [
  {
    id: 1,
    title: 'Recipe',
    description: 'Ingredients include 2 eggs...',
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: 'Workouts',
    description: '3 sets of squats...',
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: 'Passwords',
    description: 'VISA ...',
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: 'To Do 2021',
    description: '1. Learn JS...',
    pagesCount: 3,
    isMarked: false,
    access: [],
  }];


Array.prototype.myMap = function (callback) {
  if (!callback || typeof callback !== 'function') {
    throw Error('The callback function is not a function');
  }

  if (!this) {
    throw Error('You cannot call map on null or undefined');
  }
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
}

const a = notes.map(item => {
  const container = {};
  container['id'] = item.id;
  container['title'] = item.title;
  return container
})
console.log(a);