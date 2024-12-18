function parseCount(value) {
    const number = Number.parseFloat(value); 
    if (isNaN(number)) { 
        throw new Error("Невалидное значение");
    }
    return number; 
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) { 
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        // Проверка существования треугольника
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Геттер для периметра
    get perimeter() {
        return this.a + this.b + this.c; // Периметр = сумма всех сторон
    }

    // Геттер для площади
    get area() {
        const s = this.perimeter / 2; // Полупериметр
        return parseFloat(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}