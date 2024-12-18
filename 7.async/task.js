class AlarmClock {
    constructor() {
        this.alarmCollection = []; // Коллекция звонков
        this.intervalId = null; // ID таймера
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы'); 
        }

        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время'); 
            return;
        }

        this.alarmCollection.push({
            time, 
            callback, 
            canCall: true 
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time); // Удаление звонка по времени
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`; // Текущее время в формате HH:MM
    }

    start() {
        if (this.intervalId) {
            return; // Если интервал уже запущен, выходим
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.callback(); // Вызываем коллбек
                    alarm.canCall = false; // Устанавливаем canCall в false
                }
            });
        }, 1000); // Запускаем интервал каждую секунду
    }

    stop() {
        clearInterval(this.intervalId); // Останавливаем интервал
        this.intervalId = null; // Сбрасываем значение интервала
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true); // Сбрасываем возможность вызова для всех звонков
    }

    clearAlarms() {
        this.stop(); // Останавливаем будильник
        this.alarmCollection = []; // Очищаем все звонки
    }
}