// 2. Функции
// Функция, которая принимает два числа и возвращает их сумму
function sum(a, b) {
    return a + b;
  }

  console.log(sum(10, 3));
  
  // Функция-конструктор для объекта "Студент"
  function Student(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Использование функции-конструктора для создания объекта "Студент"
  let student1 = new Student("Даня", 19);
  let student2 = new Student("Даша", 18);
  console.log(student1.name);
  console.log(student1.age);
  console.log(student2.name);
  console.log(student2.age); 