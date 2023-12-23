// Функция, возвращающая Promise, который разрешается через 1 секунду
function delay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise выполнено через 1 секунду');
      }, 1000);
    });
  }
  
  // Используем async/await для вызова функции delay и вывода результата в консоль
  async function asyncFunction() {
    try {
      const result = await delay();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Вызываем asyncFunction
  asyncFunction();