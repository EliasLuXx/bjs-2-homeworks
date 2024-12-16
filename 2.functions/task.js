function getArrayParams(...arr) {
  // Проверяем, есть ли элементы в массиве
  if (arr.length === 0) {
      return { min: 0, max: 0, avg: 0 };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let num of arr) {
      if (num > max) {
          max = num; // Обновляем максимум
      }
      if (num < min) {
          min = num; // Обновляем минимум
      }
      sum += num; // Добавляем к сумме
  }

  const avg = (sum / arr.length).toFixed(2); // Среднее с округлением до 2 знаков
  return {
      min: min,
      max: max,
      avg: Number(avg) // Приводим к числу
  };
}

function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0; // Проверка на наличие элементов
    }
    return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0; // Проверка на наличие элементов
    }
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0; // Проверка на наличие элементов
    }

    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num; // Четный
        } else {
            sumOddElement += num; // Нечетный
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0; // Проверка на наличие элементов
    }

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEvenElement += num; // Суммируем четные элементы
            countEvenElement += 1;
        }
    }

    return countEvenElement === 0 ? 0 : +(sumEvenElement / countEvenElement).toFixed(2); // При необходимости округляем до двух знаков
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (const arr of arrOfArr) {
        const result = func(...arr); // Применяем насадку, передавая в нее текущий массив
        if (result > maxWorkerResult) {
            maxWorkerResult = result; // Обновляем максимум, если новое значение больше
        }
    }

    return maxWorkerResult; // Возвращаем максимальный результат
}
