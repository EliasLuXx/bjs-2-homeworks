"use strict";

function solveEquation(a, b, c) {
    const d = b ** 2 - 4 * a * c; // Вычисляем дискриминант
    if (d < 0) {
        return []; // Корней нет
    } else if (d === 0) {
        const root = -b / (2 * a); // Один корень
        return [root];
    } else {
        const root1 = (-b + Math.sqrt(d)) / (2 * a); // Первый корень
        const root2 = (-b - Math.sqrt(d)) / (2 * a); // Второй корень
        return [root1, root2];
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки
  const monthlyRate = (percent / 100) / 12;
  
  // Тело кредита
  const loanBody = amount - contribution;
  
  // Если тело кредита меньше или равно нулю, значит, ничего не нужно возвращать
  if (loanBody <= 0) {
      return 0;
  }
  
  // Формула для расчета ежемесячного платежа
  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / ((1 + monthlyRate) ** countMonths - 1)));
  
  // Общая сумма, которую придется заплатить
  const totalPayment = monthlyPayment * countMonths;
  
  // Округляем до двух знаков после запятой
  return Number(totalPayment.toFixed(2));
}