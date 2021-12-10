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
const DOWNLOAD_STATUSES = {
  pending: 'Pending',
  success: 'Done',
  failed: 'Failed',
};

const row = document.getElementById('status');
const button = document.getElementById('btn');
const DELAY = 3000;
const REPEAT = 5000;

const downloadStatus = DOWNLOADS.map(file => file.status);
const statuses = downloadStatus.join(',');

function changeStatus() {
  button.addEventListener("click", function changeStatus() {
    if (downloadStatus != DOWNLOAD_STATUSES.pending) {
      const replacedStatus = statuses.replace(/pending/gi, DOWNLOAD_STATUSES.success);
      const endValueList = replacedStatus.split(',');
      let counter = 0;
      const arrayLength = endValueList.length - 1;

      const timer = setInterval(() =>
        setTimeout(() => {
          counter++;
          row.cells[counter].innerText = endValueList[counter];

          console.log('Check started');

          if (counter === arrayLength) {
            clearInterval(timer);
          }

        }, DELAY), REPEAT);
    };
  });
};

changeStatus();


