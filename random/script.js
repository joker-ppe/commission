function displayNumbers(columnId, numbers) {
    const column = document.getElementById(columnId);
    column.querySelector('.column-header').textContent = `Số lượng: ${numbers.length}`;
    column.innerHTML += numbers.join('<br>');
}

// Tạo một mảng chứa tất cả các số từ 00 đến 99
const allNumbers = Array.from({length: 100}, (_, i) => i.toString().padStart(2, '0'));

// Xáo trộn mảng
const shuffledNumbers = allNumbers.sort(() => 0.5 - Math.random());

// Tạo số cho mỗi cột
const columnSize = () => Math.floor(Math.random() * (20 - 5 + 1) + 5);
let currentIndex = 0;

const columnA = shuffledNumbers.slice(currentIndex, currentIndex += columnSize());
const columnB = shuffledNumbers.slice(currentIndex, currentIndex += columnSize());
const columnC = shuffledNumbers.slice(currentIndex, currentIndex += columnSize());
const columnD = shuffledNumbers.slice(currentIndex, currentIndex += columnSize());
const columnE = shuffledNumbers.slice(currentIndex, currentIndex += columnSize());

// Hiển thị số trong các cột
displayNumbers('columnA', columnA);
displayNumbers('columnB', columnB);
displayNumbers('columnC', columnC);
displayNumbers('columnD', columnD);
displayNumbers('columnE', columnE);