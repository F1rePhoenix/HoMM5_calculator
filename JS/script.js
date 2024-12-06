const units = {
    "Инферно": {
    "Орден порядка": {
        "1": [
            { name: "Бесы", attack: 3, defense: 1, damage: "1-2", health: 4 },
            { name: "Черти", attack: 4, defense: 2, damage: "2-3", health: 6 },
            { name: "Дьяволята", attack: 5, defense: 2, damage: "3-4", health: 8 }
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
            { name: "Адские гончие", attack: 8, defense: 5, damage: "7-10", health: 25 },
            { name: "Церберы", attack: 10, defense: 6, damage: "8-12", health: 30 },
            { name: "Огненные гончие", attack: 12, defense: 8, damage: "10-15", health: 35 }
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
    "Орден порядка": {
    "Инферно": {
        "1": [
            { name: "Крестьяне", attack: 1, defense: 1, damage: "1", health: 3 },
            { name: "Ополченцы", attack: 2, defense: 2, damage: "1-2", health: 5 },
            { name: "Лендлорды", attack: 3, defense: 2, damage: "2-3", health: 7 }
            { name: "Бесы", attack: 2, defense: 1, damage: "1-2", health: 4 },
            { name: "Черти", attack: 3, defense: 2, damage: "2-3", health: 6 },
            { name: "Дьяволята", attack: 3, defense: 3, damage: "1-4", health: 6 }
        ],
        "2": [
            { name: "Лучники", attack: 4, defense: 3, damage: "2-5", health: 10 },
            { name: "Арбалетчики", attack: 6, defense: 4, damage: "3-6", health: 12 },
            { name: "Стрелки", attack: 8, defense: 5, damage: "4-8", health: 15 }
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
    }
};

const factionSelect = document.getElementById('faction');
const tierSelect = document.getElementById('tier');
const unitSelect = document.getElementById('unit');

for (let faction in units) {
    const option = document.createElement('option');
    option.value = faction;
    option.textContent = faction;
    factionSelect.appendChild(option);
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

unitSelect.addEventListener('change', () => {
    const selectedUnit = units[factionSelect.value][tierSelect.value][unitSelect.value];
    document.getElementById('neutral-min-damage').value = selectedUnit.damage.split('-')[0];
    document.getElementById('neutral-max-damage').value = selectedUnit.damage.split('-')[1];
    document.getElementById('neutral-attack').value = selectedUnit.attack;
    document.getElementById('neutral-defense').value = selectedUnit.defense;
    document.getElementById('neutral-health').value = selectedUnit.health;
});
// Модификаторы
let modifiers = {
    shooting: 1,
    longRange: 1
};

document.getElementById('perk-shooting').addEventListener('click', function () {
    modifiers.shooting = modifiers.shooting === 1 ? 1.2 : 1;
    this.classList.toggle('active');
});

document.getElementById('long-range-attack').addEventListener('click', function () {
    modifiers.longRange = modifiers.longRange === 1 ? 0.5 : 1;
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

    document.getElementById('damage-result').textContent = `${Math.floor(minDamage)}-${Math.floor(maxDamage)}`;
    document.getElementById('kill-result').textContent = killedUnits;
});
