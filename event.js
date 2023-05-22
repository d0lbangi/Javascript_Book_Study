/**
 * Event
 */


//ex1
const resetButton = document.querySelector('.reset');

//case1
resetButton.addEventListener('click', function() {
  alert('안녕하세요');
});

//case2
resetButton.addEventListener('click', function(event) {
  console.dir(event);
});

//case3
resetButton.removeEventListener('click', function(event) {
  console.dir(event);
});

//case4
const onReset = function (event) {
  console.log(event.target);
};

resetButton.addEventListener('click', onReset);

