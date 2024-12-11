const units = {
    "Орден порядка": {
        "1": [
            { name: "Крестьяне", attack: 1, defense: 1, damage: "1-1", health: 3 },
            { name: "Ополченцы", attack: 1, defense: 2, damage: "1-2", health: 6 },
            { name: "Лендлорды", attack: 2, defense: 1, damage: "1-2", health: 6 }
        ],
        "2": [
            { name: "Лучники", attack: 4, defense: 3, damage: "2-4", health: 7 },
            { name: "Арбалетчики", attack: 4, defense: 4, damage: "2-8", health: 10 },
            { name: "Стрелки", attack: 5, defense: 4, damage: "2-8", health: 10 }
        ],
        "3": [
            { name: "Мечники", attack: 4, defense: 8, damage: "2-4", health: 16 },
            { name: "Латники", attack: 5, defense: 9, damage: "2-5", health: 26 },
            { name: "Ревнитель веры", attack: 8, defense: 8, damage: "2-5", health: 26 }
        ],
        "4": [
            { name: "Грифоны", attack: 7, defense: 5, damage: "5-10", health: 30 },
            { name: "Королевские грифоны", attack: 9, defense: 8, damage: "5-15", health: 35 },
            { name: "Боевые грифоны", attack: 7, defense: 12, damage: "6-12", health: 52 }
        ],
        "5": [
            { name: "Монахи", attack: 12, defense: 12, damage: "9-12", health: 54 },
            { name: "Инквизиторы", attack: 16, defense: 16, damage: "9-12", health: 80 },
            { name: "Адепты", attack: 20, defense: 14, damage: "9-12", health: 80 }
        ],
        "6": [
            { name: "Рыцари", attack: 23, defense: 21, damage: "20-30", health: 90 },
            { name: "Паладины", attack: 24, defense: 24, damage: "20-30", health: 100 },
            { name: "Рыцари Изабель", attack: 24, defense: 20, damage: "20-35", health: 100 }
        ],
        "7": [
            { name: "Ангелы", attack: 27, defense: 27, damage: "45-45", health: 180 },
            { name: "Архангелы", attack: 31, defense: 31, damage: "50-50", health: 220 },
            { name: "Серафим", attack: 35, defense: 25, damage: "25-75", health: 220 }
        ]
    },
    "Инферно": {
        "1": [
            { name: "Бесы", attack: 2, defense: 1, damage: "1-2", health: 4 },
            { name: "Черти", attack: 3, defense: 2, damage: "2-3", health: 6 },
            { name: "Дьяволята", attack: 3, defense: 3, damage: "1-4", health: 6 }
        ],
        "2": [
            { name: "Демоны", attack: 1, defense: 3, damage: "1-2", health: 13 },
            { name: "Огненные демоны", attack: 3, defense: 4, damage: "1-4", health: 15 },
            { name: "Старшие демоны", attack: 3, defense: 2, damage: "1-4", health: 13 }
        ],
        "3": [
            { name: "Адские гончие", attack: 4, defense: 3, damage: "3-5", health: 15 },
            { name: "Церберы", attack: 4, defense: 3, damage: "4-6", health: 16 },
            { name: "Огненные гончие", attack: 4, defense: 3, damage: "3-5", health: 15 }
        ],
        "4": [
            { name: "Суккубы", attack: 6, defense: 6, damage: "8-13", health: 20 },
            { name: "Демонессы", attack: 7, defense: 5, damage: "7-14", health: 29 },
            { name: "Искусительницы", attack: 6, defense: 6, damage: "6-13", health: 30 }
        ],
        "5": [
            { name: "Адские жеребцы", attack: 13, defense: 13, damage: "8-16", health: 50 },
            { name: "Кошмары", attack: 18, defense: 19, damage: "11-16", health: 66 },
            { name: "Кони преисподней", attack: 18, defense: 17, damage: "10-17", health: 66 }
        ],
        "6": [
            { name: "Пещерные демоны", attack: 21, defense: 21, damage: "13-26", health: 110 },
            { name: "Пещерные владыки", attack: 22, defense: 21, damage: "13-31", health: 120 },
            { name: "Пещерные отродья", attack: 27, defense: 23, damage: "13-31", health: 140 }
        ],
        "7": [
            { name: "Дьяволы", attack: 27, defense: 25, damage: "36-66", health: 166 },
            { name: "Архидьяволы", attack: 32, defense: 29, damage: "36-66", health: 199 },
            { name: "Архидемоны", attack: 32, defense: 31, damage: "36-66", health: 211 }
        ]
    },
    "Некрополис": {
        "1": [
            { name: "Костяные воины", attack: 1, defense: 2, damage: "1-1", health: 4 },
            { name: "Костяные лучники", attack: 2, defense: 2, damage: "1-2", health: 5 },
            { name: "Костяные воители", attack: 1, defense: 3, damage: "1-2", health: 5 }
        ],
        "2": [
            { name: "Зомби", attack: 1, defense: 2, damage: "1-2", health: 17 },
            { name: "Чумные зомби", attack: 2, defense: 2, damage: "2-3", health: 17 },
            { name: "Гниющие зомби", attack: 2, defense: 3, damage: "1-3", health: 19 }
        ],
        "3": [
            { name: "Привидения", attack: 5, defense: 4, damage: "2-4", health: 16 },
            { name: "Призраки", attack: 5, defense: 4, damage: "4-6", health: 19 },
            { name: "Духи", attack: 6, defense: 5, damage: "4-6", health: 20 }
        ],
        "4": [
            { name: "Вампиры", attack: 6, defense: 6, damage: "6-8", health: 30 },
            { name: "Высшие вампиры", attack: 9, defense: 9, damage: "7-11", health: 35 },
            { name: "Князья вампиров", attack: 9, defense: 9, damage: "5-13", health: 40 }
        ],
        "5": [
            { name: "Личи", attack: 15, defense: 15, damage: "12-17", health: 50 },
            { name: "Архиличи", attack: 19, defense: 19, damage: "17-20", health: 55 },
            { name: "Высшие личи", attack: 21, defense: 19, damage: "17-21", health: 55 }
        ],
        "6": [
            { name: "Умертвия", attack: 24, defense: 22, damage: "21-25", health: 95 },
            { name: "Вестники смерти", attack: 26, defense: 24, damage: "25-30", health: 100 },
            { name: "Баньши", attack: 23, defense: 23, damage: "22-27", health: 110 }
        ],
        "7": [
            { name: "Костяные драконы", attack: 27, defense: 28, damage: "15-30", health: 150 },
            { name: "Призрачные драконы", attack: 30, defense: 28, damage: "25-35", health: 160 },
            { name: "Астральные драконы", attack: 31, defense: 27, damage: "27-36", health: 150 }
        ]
    },
    "Лесной союз": {
        "1": [
            { name: "Феи", attack: 1, defense: 1, damage: "1-2", health: 5 },
            { name: "Дриады", attack: 2, defense: 1, damage: "2-2", health: 6 },
            { name: "Нимфы", attack: 2, defense: 1, damage: "2-3", health: 6 }
        ],
        "2": [
            { name: "Танцующие с клинками", attack: 3, defense: 2, damage: "2-5", health: 12 },
            { name: "Танцующие со смертью", attack: 5, defense: 3, damage: "3-5", health: 12 },
            { name: "Танцующие с ветром", attack: 6, defense: 6, damage: "4-6", health: 12 }
        ],
        "3": [
            { name: "Эльфийские лучники", attack: 4, defense: 1, damage: "4-7", health: 10 },
            { name: "Мастера лука", attack: 5, defense: 4, damage: "5-8", health: 14 },
            { name: "Лесные стрелки", attack: 6, defense: 5, damage: "8-10", health: 14 }
        ],
        "4": [
            { name: "Друиды", attack: 7, defense: 7, damage: "7-9", health: 34 },
            { name: "Верховные друиды", attack: 12, defense: 9, damage: "10-14", health: 34 },
            { name: "Старшие друиды", attack: 9, defense: 10, damage: "9-14", health: 34 }
        ],
        "5": [
            { name: "Единороги", attack: 12, defense: 12, damage: "10-20", health: 57 },
            { name: "Боевые единороги", attack: 17, defense: 17, damage: "10-20", health: 77 },
            { name: "Светлые единороги", attack: 15, defense: 15, damage: "9-24", health: 80 }
        ],
        "6": [
            { name: "Энты", attack: 19, defense: 27, damage: "7-17", health: 175 },
            { name: "Древние энты", attack: 19, defense: 29, damage: "10-20", health: 181 },
            { name: "Дикие энты", attack: 21, defense: 27, damage: "12-20", health: 175 }
        ],
        "7": [
            { name: "Зеленые драконы", attack: 27, defense: 25, damage: "30-50", health: 200 },
            { name: "Изумрудные драконы", attack: 31, defense: 27, damage: "33-57", health: 200 },
            { name: "Кристаллические драконы", attack: 30, defense: 26, damage: "30-60", health: 200 }
        ]
    },
    "Лига теней": {
        "1": [
            { name: "Лазутчики", attack: 3, defense: 3, damage: "2-4", health: 10 },
            { name: "Ассасины", attack: 4, defense: 3, damage: "2-4", health: 14 },
            { name: "Ловчие", attack: 5, defense: 4, damage: "3-5", health: 15 }
        ],
        "2": [
            { name: "Бестии", attack: 4, defense: 2, damage: "5-7", health: 16 },
            { name: "Фурии", attack: 5, defense: 3, damage: "5-7", health: 16 },
            { name: "Мегеры", attack: 5, defense: 4, damage: "3-8", health: 21 }
        ],
        "3": [
            { name: "Минотавры", attack: 5, defense: 4, damage: "4-7", health: 34 },
            { name: "Минотавры-стражи", attack: 6, defense: 5, damage: "4-7", health: 38 },
            { name: "Минотавры-надсмотрщики", attack: 8, defense: 8, damage: "5-8", health: 44 }
        ],
        "4": [
            { name: "Наездники на ящерах", attack: 9, defense: 7, damage: "7-12", health: 40 },
            { name: "Темные всадники", attack: 10, defense: 9, damage: "7-14", health: 60 },
            { name: "Проворные наездники", attack: 9, defense: 12, damage: "7-12", health: 65 }
        ],
        "5": [
            { name: "Гидры", attack: 15, defense: 12, damage: "7-14", health: 80 },
            { name: "Пещерные гидры", attack: 15, defense: 15, damage: "9-14", health: 125 },
            { name: "Темные гидры", attack: 15, defense: 14, damage: "9-12", health: 125 }
        ],
        "6": [
            { name: "Сумеречные ведьмы", attack: 18, defense: 18, damage: "17-24", health: 80 },
            { name: "Владычицы тени", attack: 20, defense: 20, damage: "17-27", health: 90 },
            { name: "Хозяйки ночи", attack: 20, defense: 20, damage: "20-30", health: 120 }
        ],
        "7": [
            { name: "Сумеречные драконы", attack: 25, defense: 24, damage: "45-70", health: 200 },
            { name: "Черные драконы", attack: 30, defense: 30, damage: "45-70", health: 240 },
            { name: "Красные драконы", attack: 30, defense: 30, damage: "45-60", health: 235 }
        ]
    },
    "Академия волшебства": {
        "1": [
            { name: "Гремлины", attack: 2, defense: 2, damage: "1-2", health: 5 },
            { name: "Старшие гремлины", attack: 2, defense: 2, damage: "1-2", health: 6 },
            { name: "Гремлины-вредители", attack: 5, defense: 3, damage: "1-2", health: 6 }
        ],
        "2": [
            { name: "Каменные горгульи", attack: 3, defense: 4, damage: "1-1", health: 15 },
            { name: "Обсидиановые горгульи", attack: 3, defense: 5, damage: "1-2", health: 20 },
            { name: "Стихийные горгульи", attack: 2, defense: 6, damage: "1-2", health: 20 }
        ],
        "3": [
            { name: "Железные големы", attack: 5, defense: 5, damage: "3-5", health: 18 },
            { name: "Стальные големы", attack: 6, defense: 6, damage: "5-7", health: 24 },
            { name: "Обсидиановые големы", attack: 6, defense: 4, damage: "5-7", health: 20 }
        ],
        "4": [
            { name: "Маги", attack: 10, defense: 10, damage: "7-7", health: 18 },
            { name: "Архимаги", attack: 10, defense: 10, damage: "7-7", health: 30 },
            { name: "Боевые маги", attack: 12, defense: 9, damage: "7-7", health: 29 }
        ],
        "5": [
            { name: "Джинны", attack: 11, defense: 10, damage: "12-14", health: 40 },
            { name: "Султаны джиннов", attack: 14, defense: 14, damage: "14-19", health: 45 },
            { name: "Визири джиннов", attack: 13, defense: 13, damage: "14-19", health: 50 }
        ],
        "6": [
            { name: "Принцессы ракшас", attack: 25, defense: 20, damage: "15-23", health: 120 },
            { name: "Раджи ракшас", attack: 25, defense: 25, damage: "23-30", health: 145 },
            { name: "Кшатрии ракшас", attack: 27, defense: 20, damage: "25-35", health: 135 }
        ],
        "7": [
            { name: "Колоссы", attack: 27, defense: 27, damage: "40-70", health: 175 },
            { name: "Титаны", attack: 30, defense: 30, damage: "40-70", health: 190 },
            { name: "Громовержцы", attack: 30, defense: 30, damage: "40-70", health: 190 }
        ]
    },
    "Подгорный народ": {
        "1": [
            { name: "Защитники гор", attack: 1, defense: 4, damage: "1-1", health: 7 },
            { name: "Воители", attack: 1, defense: 5, damage: "1-2", health: 12 },
            { name: "Горные стражи", attack: 2, defense: 6, damage: "1-2", health: 14 }
        ],
        "2": [
            { name: "Метатели копья", attack: 4, defense: 4, damage: "1-2", health: 9 },
            { name: "Мастера копья", attack: 4, defense: 4, damage: "2-3", health: 12 },
            { name: "Гарпунеры", attack: 5, defense: 3, damage: "2-5", health: 10 }
        ],
        "3": [
            { name: "Наездники на медведях", attack: 5, defense: 10, damage: "4-5", health: 25 },
            { name: "Хозяева медведей", attack: 6, defense: 14, damage: "5-6", health: 30 },
            { name: "Северные наездники", attack: 8, defense: 12, damage: "5-6", health: 30 }
        ],
        "4": [
            { name: "Костоломы", attack: 6, defense: 6, damage: "2-6", health: 20 },
            { name: "Берсерки", attack: 7, defense: 7, damage: "4-8", health: 25 },
            { name: "Воины Арката", attack: 7, defense: 7, damage: "3-7", health: 30 }
        ],
        "5": [
            { name: "Жрецы Рун", attack: 10, defense: 6, damage: "12-15", health: 60 },
            { name: "Жрецы Арката", attack: 9, defense: 9, damage: "14-17", health: 60 },
            { name: "Жрецы Пламени", attack: 10, defense: 9, damage: "17-20", health: 65 }
        ],
        "6": [
            { name: "Таны", attack: 15, defense: 24, damage: "4-12", health: 100 },
            { name: "Ярлы", attack: 15, defense: 24, damage: "21-26", health: 120 },
            { name: "Эрлы", attack: 16, defense: 23, damage: "5-13", health: 145 }
        ],
        "7": [
            { name: "Огненные драконы", attack: 25, defense: 32, damage: "40-50", health: 230 },
            { name: "Лавовые драконы", attack: 30, defense: 40, damage: "40-50", health: 280 },
            { name: "Драконы Арката", attack: 30, defense: 35, damage: "44-55", health: 275 }
        ]
    },
    "Великая орда": {
        "1": [
            { name: "Гоблины", attack: 1, defense: 1, damage: "1-1", health: 3 },
            { name: "Трапперы", attack: 1, defense: 3, damage: "1-1", health: 7 },
            { name: "Колдуны гоблинов", attack: 2, defense: 1, damage: "1-2", health: 5 }
        ],
        "2": [
            { name: "Кентавры", attack: 3, defense: 1, damage: "2-4", health: 6 },
            { name: "Кочевые кентавры", attack: 4, defense: 2, damage: "3-6", health: 10 },
            { name: "Боевые кентавры", attack: 4, defense: 4, damage: "3-5", health: 10 }
        ],
        "3": [
            { name: "Орочьи воины", attack: 5, defense: 2, damage: "2-5", health: 12 },
            { name: "Орочьи бойцы", attack: 6, defense: 4, damage: "4-6", health: 15 },
            { name: "Вармонгеры", attack: 4, defense: 6, damage: "3-5", health: 20 }
        ],
        "4": [
            { name: "Шаманки", attack: 5, defense: 5, damage: "6-9", health: 30 },
            { name: "Дочери неба", attack: 7, defense: 9, damage: "6-9", health: 35 },
            { name: "Дочери земли", attack: 10, defense: 7, damage: "7-11", health: 35 }
        ],
        "5": [
            { name: "Убийцы", attack: 11, defense: 8, damage: "7-10", health: 34 },
            { name: "Палачи", attack: 14, defense: 10, damage: "8-12", health: 40 },
            { name: "Вожаки", attack: 13, defense: 15, damage: "10-12", health: 48 }
        ],
        "6": [
            { name: "Виверны", attack: 17, defense: 17, damage: "15-25", health: 90 },
            { name: "Темные виверны", attack: 21, defense: 18, damage: "20-27", health: 105 },
            { name: "Паокаи", attack: 19, defense: 21, damage: "20-25", health: 120 }
        ],
        "7": [
            { name: "Циклопы", attack: 29, defense: 27, damage: "40-52", health: 220 },
            { name: "Свободные циклопы", attack: 30, defense: 27, damage: "45-57", health: 225 },
            { name: "Кровоглазые циклопы", attack: 28, defense: 28, damage: "35-50", health: 235 }
        ]
    }
};

const factionSelect = document.getElementById('faction');
const tierSelect = document.getElementById('tier');
const unitSelect = document.getElementById('unit');
const yourFactionSelect = document.getElementById('your_faction');
const yourTierSelect = document.getElementById('your_tier');
const yourUnitSelect = document.getElementById('your_unit');
for (let faction in units) {
    const option = document.createElement('option');
    option.value = faction;
    option.textContent = faction;
    factionSelect.appendChild(option);
}

for (let faction in units) {
    const option = document.createElement('option');
    option.value = faction;
    option.textContent = faction;
    yourFactionSelect.appendChild(option);
}

factionSelect.addEventListener('change', () => {
    tierSelect.innerHTML = '<option disabled selected>Выберите уровень</option>';
    unitSelect.innerHTML = '<option disabled selected>Выберите юнита</option>';
    const tiers = units[factionSelect.value];
    for (let tier in tiers) {
        const option = document.createElement('option');
        option.value = tier;
        option.textContent = tier;
        tierSelect.appendChild(option);
    }
});

yourFactionSelect.addEventListener('change', () => {
    yourTierSelect.innerHTML = '<option disabled selected>Выберите уровень</option>';
    yourUnitSelect.innerHTML = '<option disabled selected>Выберите юнита</option>';
    const tiers = units[yourFactionSelect.value];
    for (let tier in tiers) {
        const option = document.createElement('option');
        option.value = tier;
        option.textContent = tier;
        yourTierSelect.appendChild(option);
    }
});

tierSelect.addEventListener('change', () => {
    unitSelect.innerHTML = '<option disabled selected>Выберите юнита</option>';
    const selectedUnits = units[factionSelect.value][tierSelect.value];
    selectedUnits.forEach((unit, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = unit.name;
        unitSelect.appendChild(option);
    });
});

yourTierSelect.addEventListener('change', () => {
    yourUnitSelect.innerHTML = '<option disabled selected>Выберите юнита</option>';
    const selectedUnits = units[yourFactionSelect.value][yourTierSelect.value];
    selectedUnits.forEach((unit, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = unit.name;
        yourUnitSelect.appendChild(option);
    });
});

unitSelect.addEventListener('change', () => {
    const selectedUnit = units[factionSelect.value][tierSelect.value][unitSelect.value];
    document.getElementById('neutral-min-damage').value = selectedUnit.damage.split('-')[0];
    document.getElementById('neutral-max-damage').value = selectedUnit.damage.split('-')[1];
    document.getElementById('neutral-attack').value = selectedUnit.attack;
    document.getElementById('neutral-defense').value = selectedUnit.defense;
    document.getElementById('neutral-health').value = selectedUnit.health;
});

yourUnitSelect.addEventListener('change', () => {
    const selectedUnit = units[yourFactionSelect.value][yourTierSelect.value][yourUnitSelect.value];
    const heroAttack = parseInt(document.getElementById('hero-attack').value) || 0;
    const heroDefense = parseInt(document.getElementById('hero-defense').value) || 0;
    const finalAttack = selectedUnit.attack + heroAttack;
    const finalDefense = selectedUnit.defense + heroDefense;
    document.getElementById('your-min-damage').value = selectedUnit.damage.split('-')[0];
    document.getElementById('your-max-damage').value = selectedUnit.damage.split('-')[1];
    document.getElementById('your-attack').value = finalAttack;
    document.getElementById('your-defense').value = finalDefense;
    document.getElementById('your-health').value = selectedUnit.health;
});
// Модификаторы
let modifiers = {
    shooting: 1,
    longRange: 1,
    Defense: 1,
    Attack: 1,
    frenzy: false,
    ringOfLife: false
};
document.getElementById('perk-shooting').addEventListener('click', function () {
    modifiers.shooting = modifiers.shooting === 1 ? 1.2 : 1;
    this.classList.toggle('active');
});

document.getElementById('long-range-attack').addEventListener('click', function () {
    modifiers.longRange = modifiers.longRange === 1 ? 0.5 : 1;
    this.classList.toggle('active');
});

document.getElementById('ring-of-life').addEventListener('click', function () {
    // Переключаем состояние модификатора
    modifiers.ringOfLife = !modifiers.ringOfLife;
    const yourHp = document.getElementById('your-health');
    if (modifiers.ringOfLife) {
        // При активации увеличиваем текущие значения на 2
        yourHp.value = (parseInt(yourHp.value) + 2).toString();
    } else {
        // При деактивации возвращаем текущие значения к оригинальным (уменьшаем на 2)
        yourHp.value = (parseInt(yourHp.value) - 2).toString();
    }
    // Переключаем CSS-класс активности
    this.classList.toggle('active');
});
document.getElementById('frenzy').addEventListener('click', function () {
    // Переключаем состояние модификатора
    modifiers.frenzy = !modifiers.frenzy;
    const yourMinField = document.getElementById('your-min-damage');
    const yourMaxField = document.getElementById('your-max-damage');
    if (modifiers.frenzy) {
        // При активации увеличиваем текущие значения на 1
        yourMinField.value = (parseInt(yourMinField.value) + 1).toString();
        yourMaxField.value = (parseInt(yourMaxField.value) + 1).toString();
    } else {
        // При деактивации возвращаем текущие значения к оригинальным (уменьшаем на 1)
        yourMinField.value = (parseInt(yourMinField.value) - 1).toString();
        yourMaxField.value = (parseInt(yourMaxField.value) - 1).toString();
    }

    // Переключаем CSS-класс активности
    this.classList.toggle('active');
});
// Переменная для отслеживания состояния кнопки "Смена стороны"
let isSwitchingSides = false;

// Кнопка смены стороны
document.getElementById('switch-sides').addEventListener('click', function () {
    isSwitchingSides = !isSwitchingSides;
    this.classList.toggle('active');
});

    // Расчет урона
document.getElementById('calculate').addEventListener('click', function () {
    // Получение значений для вашей стороны
    const yourMin = parseFloat(document.getElementById('your-min-damage').value.replace(',', '.')) || 0;
    const yourMax = parseFloat(document.getElementById('your-max-damage').value.replace(',', '.')) || 0;
    const yourAttack = parseInt(document.getElementById('your-attack').value) || 0;
    const yourDefense = parseInt(document.getElementById('your-defense').value) || 0;
    const yourQuantity = parseInt(document.getElementById('your-quantity').value) || 1;
    const yourHealth = parseInt(document.getElementById('your-health').value) || 1;

    // Получение значений для нейтральной стороны
    const neutralMin = parseFloat(document.getElementById('neutral-min-damage').value.replace(',', '.')) || 0;
    const neutralMax = parseFloat(document.getElementById('neutral-max-damage').value.replace(',', '.')) || 0;
    const neutralAttack = parseInt(document.getElementById('neutral-attack').value) || 0;
    const neutralDefense = parseInt(document.getElementById('neutral-defense').value) || 0;
    const neutralQuantity = parseInt(document.getElementById('neutral-quantity').value) || 1;
    const neutralHealth = parseInt(document.getElementById('neutral-health').value) || 1;

    // Коэффициенты модификаторов
    const damageMultiplier = modifiers.shooting * modifiers.longRange;
    let minDamage, maxDamage, killedUnits;
    if (isSwitchingSides) {
        // Нейтральная сторона атакует
        if (neutralAttack >= yourDefense) {
            minDamage = neutralMin * neutralQuantity * (1 + (neutralAttack - yourDefense) * 0.05) * damageMultiplier;
            maxDamage = neutralMax * neutralQuantity * (1 + (neutralAttack - yourDefense) * 0.05) * damageMultiplier;
        } else {
            minDamage = neutralMin * neutralQuantity / (1 + (yourDefense - neutralAttack) * 0.05) * damageMultiplier;
            maxDamage = neutralMax * neutralQuantity / (1 + (yourDefense - neutralAttack) * 0.05) * damageMultiplier;
        }
        killedUnits = `${Math.floor(minDamage / yourHealth)}-${Math.floor(maxDamage / yourHealth)}`;
    } else {
        // Ваша сторона атакует
        if (yourAttack >= neutralDefense) {
            minDamage = yourMin * yourQuantity * (1 + (yourAttack - neutralDefense) * 0.05) * damageMultiplier;
            maxDamage = yourMax * yourQuantity * (1 + (yourAttack - neutralDefense) * 0.05) * damageMultiplier;
        } else {
            minDamage = yourMin * yourQuantity / (1 + (neutralDefense - yourAttack) * 0.05) * damageMultiplier;
            maxDamage = yourMax * yourQuantity / (1 + (neutralDefense - yourAttack) * 0.05) * damageMultiplier;
        }
        killedUnits = `${Math.floor(minDamage / neutralHealth)}-${Math.floor(maxDamage / neutralHealth)}`;
    }

    document.getElementById('damage-result').textContent = `${Math.round(minDamage)}-${Math.round(maxDamage)}`;
    document.getElementById('kill-result').textContent = killedUnits;
});
