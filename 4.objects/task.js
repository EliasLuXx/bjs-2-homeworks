function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; // Свойство для хранения оценок
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; // Устанавливаем значение предмета
};

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks) { // Проверяем, существует ли массив оценок
        this.marks.push(...marksToAdd); // Добавляем оценки в массив
    }
};

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0; // Возвращаем 0, если оценок нет
    }
    
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0); // Суммируем оценки
    return sum / this.marks.length; // Возвращаем среднее
};

Student.prototype.exclude = function (reason) {
    delete this.subject; // Удаляем предмет
    delete this.marks; // Удаляем оценки
    this.excluded = reason; // Устанавливаем причину исключения
};
