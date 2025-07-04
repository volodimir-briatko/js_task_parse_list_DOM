'use strict';

// write code here
function sortList() {
  let list1 = [];

  document.querySelectorAll('ul li').forEach((el) => {
    list1.push({
      name: el.textContent.trim(),
      position: el.getAttribute('data-position'),
      salary: Number(
        el.getAttribute('data-salary').replaceAll(',', '').replaceAll('$', ''),
      ),
      age: el.getAttribute('data-age'),
    });
  });
  list1 = list1.sort((a, b) => b.salary - a.salary);

  document.querySelector('ul').innerHTML = '';

  for (const i of list1) {
    document.querySelector('ul').insertAdjacentHTML(
      'beforeend',
      `<li data-position="${i.position}"
        data-salary="$${i.salary.toLocaleString()}"
        data-age="${i.age}">${i.name}</li>`,
    );
  }
}

function getEmployees() {
  const employees = [];

  document.querySelectorAll('ul li').forEach((el) => {
    employees.push({
      name: el.textContent.trim(),
      position: el.getAttribute('data-position'),
      salary: el.getAttribute('data-salary'),
      age: el.getAttribute('data-age'),
    });
  });

  return employees;
}

sortList();
getEmployees();
