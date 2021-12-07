const DOWNLOADS = [
  {
    id: 1,
    title: 'Recipe',
    status: 'Done'
  },
  {
    id: 2,
    title: 'Workouts',
    status: 'Pending'
  },
  {
    id: 3,
    title: 'Passwords',
    status: 'Pending'
  },
  {
    id: 4,
    title: 'To Do 2021',
    status: 'Pending'
  },
  {
    id: 5,
    title: 'Books',
    status: 'Failed'
  }
];

const row = document.getElementById('status');

let downloadStatus = DOWNLOADS.map(item => {
  return item.status;
});
const statuses = downloadStatus.join(',');


function changeStatus() {
  btn.addEventListener("click", function changeStatus() {
    if (downloadStatus != 'Pending') {
      const newStr = statuses.replace(/pending/gi, 'Done');
      const newArr = newStr.split(',');
      let counter = 0;
      const length = newArr.length - 1;

      const timer = setInterval(() =>
        setTimeout(() => {
          counter++;
          row.cells[counter].innerText = newArr[counter];

          console.log('Check started');

          if (counter === length) {
            clearInterval(timer);
          }

        }, 3000), 5000);
    };
  });
};

do {
  changeStatus();
} while ('Pending' in downloadStatus);


