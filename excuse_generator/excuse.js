// List of possible excuses
const excuses = [
    "съм на родителска среща",
    "съм на зъболекар",
    "съм убер",
    "имам доставка от ИКЕЯ",
    "съм на майстор",
    "едно от чааветата се разболя и треа го водя на личен",
    "ще ходя да ми сменят гумите",
    "трябва да взимам децата от градина",
    "трябва да мина през Спийди",
    "чакам доставка от Еконт",
    "дойдоха майстори вкъщи",
    "съм на нотариус",
    "мия салати",
    "трябва да вадя паспорти на децата",
    "водя чавето на преглед",
    "нещо не мога се логна през VPN'а",
    "нещо не мога да си отворя лаптопа",
    "съм на изследвания към Дженерали",
    "съм на представление на децата",
    "съм по задачи",
    "се опитвам да си включа лаптопа",
    "съм на мед преглед",
    "се занимавам с гумите на колата",
    "трябва да платя на малкия някаква такса в градината",
    "ще карам колата за боя",
    "приспивам детето",
    "бях в общината",
    "ми се изключи лаптопа.. ще вляза веднага щом запали",
    "въвеждам щети по колата",
    "съм бейбиситър",
    "от дск са бавни та бавни",
    "отивам да взема едни 3м корнизи от Горубляне",
    "се занимавам с каското",
    "съм на фризьор",
    "ме задържаха в Булстрад",
    "съм от около 10 мин на Орлов",
    "получавам една доставка на мебели",
    "карам колата за боя",
    "имах малко ВиК неща за правене",
    "ще си приемам апартамента от хазяина",
    "съм в една консултация",
    "трябва да мина през градината и през сервиза",
    "съм в КАТ, чакам си реда",
    "ще ходя да опитам да заведа две паркинг щети като една"
    ]; // replace with your actual reasons

function generateExcuse() {
    const lateSelect = document.getElementById('late');
    const updateSelect = document.getElementById('update');
    const nameSelect = document.getElementById('name');
    
    let message = lateSelect.value === "I'll be late" ? "Ще закъснея за дейлито, че " : "Ще пропусна дейлито, че ";
    
    // Append a random excuse
    message += excuses[Math.floor(Math.random() * excuses.length)];
    
    // If "Yes" selected, append the name
    if (updateSelect.value === "Yes") {
        message += ", " + nameSelect.value + " ще даде ъпдейта";
    }
    
    document.getElementById('excuse').innerText = message;
}

function toggleNames(selectElement) {
    const namesP = document.getElementById('names');
    if (selectElement.value === "Yes") {
        namesP.style.display = 'block';
    } else {
        namesP.style.display = 'none';
    }
}

function toggleQA(selectElement) {
    console.log(selectElement)
    const notQADiv = document.getElementById('notQA');
    const excuseP = document.getElementById('excuse');
    console.log(selectElement.value)
    if (selectElement.value === "Yes") {
        notQADiv.style.display = 'none';
        excuseP.innerText = "QA са винаги на време!";
    } else {
        notQADiv.style.display = 'block';
        excuseP.innerText = "";
    }
}

