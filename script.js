const archiveRegistry = [
    { key: "сапожниковы", title: "Документы купеческого рода Сапожниковых (Астрахань)", body: "Фонд №12, опись №1, дело №142. Журналы заседаний Астраханской городской думы. Содержит отчеты о состоянии рыбных промыслов, контракты и прошения за 1874 год. Оцифровано: 48 листов." },
    { key: "фонд 52", title: "Фонд №52 — Астраханская духовная консистория", body: "Период: 1730 — 1918 гг. Включает в себя церковные метрические книги, клировые ведомости и регистрационные записи о рождении, браке и смерти жителей Астраханской губернии. Полностью переведено в электронный вид." },
    { key: "межевание", title: "Планы генерального межевания уездов Астраханской губернии", body: "Фонд №94, опись №3. Высококачественные графические скан-копии межевых планов Астраханского и Красноярского уездов XIX века. Доступны для детального масштабирования." }
];

function showNotification(message) {
    document.getElementById("alertText").innerText = message;
    document.getElementById("customAlert").classList.remove("hidden");
}

function closeAlert() {
    document.getElementById("customAlert").classList.add("hidden");
}

function executeArchiveSearch() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsBlock = document.getElementById("searchResults");
    
    if (searchInput === "") {
        showNotification("Внимание: Поисковый запрос не должен быть пустым. Введите ключевое слово или номер архивного фонда.");
        resultsBlock.classList.add("hidden");
        return;
    }
    
    const recordMatch = archiveRegistry.find(item => searchInput.includes(item.key) || item.key.includes(searchInput));
    
    resultsBlock.classList.remove("hidden");
    
    if (recordMatch) {
        resultsBlock.innerHTML = `
            <strong style="color: #00e5c5; display: block; font-size: 15px; margin-bottom: 6px; font-weight: 600;">${recordMatch.title}</strong>
            <p style="font-size: 13.5px; color: #a2a2a8; line-height: 1.5;">${recordMatch.body}</p>
        `;
    } else {
        resultsBlock.innerHTML = `
            <p style="font-size: 13.5px; color: #c4a02d;">По запросу "${searchInput}" записей в локальном цифровом индексе не обнаружено. Вы можете направить официальный запрос в архив через форму обратной связи.</p>
        `;
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("senderName").value;
    const email = document.getElementById("senderEmail").value;
    
    showNotification(`Обращение принято.\nГражданин(ка) ${name}, Ваша техническая заявка успешно зарегистрирована автоматизированной системой ИС «Цифровой Архив» под номером #GA-AST-${Math.floor(Math.random() * 8000) + 1000}.\nОфициальный ответ ИТ-отдела будет направлен на адрес: ${email}.`);
    
    document.getElementById("ticketForm").reset();
}