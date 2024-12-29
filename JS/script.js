const units = {
    "Орден порядка": {
        "1": [
            { name: "Крестьяне", attack: 1, defense: 1, damage: "1-1", health: 3, image: "CSS/img/Units/Humans/X1T1G0.png", unitData: 0 },
            { name: "Ополченцы", attack: 1, defense: 2, damage: "1-2", health: 6, image: "CSS/img/Units/Humans/X1T1G1.png", unitData: 0 },
            { name: "Лендлорды", attack: 2, defense: 1, damage: "1-2", health: 6, image: "CSS/img/Units/Humans/X1T1G2.png", unitData: 0 }
        ],
        "2": [
            { name: "Лучники", attack: 4, defense: 3, damage: "2-4", health: 7, image: "CSS/img/Units/Humans/X1T2G0.png", unitData: 12 },
            { name: "Арбалетчики", attack: 4, defense: 4, damage: "2-8", health: 10, image: "CSS/img/Units/Humans/X1T2G1.png", unitData: 1 },
            { name: "Стрелки", attack: 5, defense: 4, damage: "2-8", health: 10, image: "CSS/img/Units/Humans/X1T2G2.png", unitData: 2 }
        ],
        "3": [
            { name: "Мечники", attack: 4, defense: 8, damage: "2-4", health: 16, image: "CSS/img/Units/Humans/X1T3G0.png", unitData: 14 },
            { name: "Латники", attack: 5, defense: 9, damage: "2-5", health: 26, image: "CSS/img/Units/Humans/X1T3G1.png", unitData: 14 },
            { name: "Ревнитель веры", attack: 8, defense: 8, damage: "2-5", health: 26, image: "CSS/img/Units/Humans/X1T3G2.png", unitData: 14 }
        ],
        "4": [
            { name: "Грифоны", attack: 7, defense: 5, damage: "5-10", health: 30, image: "CSS/img/Units/Humans/X1T4G0.png", unitData: 11 },
            { name: "Королевские грифоны", attack: 9, defense: 8, damage: "5-15", health: 35, image: "CSS/img/Units/Humans/X1T4G1.png", unitData: 11 },
            { name: "Боевые грифоны", attack: 7, defense: 12, damage: "6-12", health: 52, image: "CSS/img/Units/Humans/X1T4G2.png", unitData: 0 }
        ],
        "5": [
            { name: "Монахи", attack: 12, defense: 12, damage: "9-12", health: 54, image: "CSS/img/Units/Humans/X1T5G0.png", unitData: 3 },
            { name: "Инквизиторы", attack: 16, defense: 16, damage: "9-12", health: 80, image: "CSS/img/Units/Humans/X1T5G1.png", unitData: 3 },
            { name: "Адепты", attack: 20, defense: 14, damage: "9-12", health: 80, image: "CSS/img/Units/Humans/X1T5G2.png", unitData: 3 }
        ],
        "6": [
            { name: "Рыцари", attack: 23, defense: 21, damage: "20-30", health: 90, image: "CSS/img/Units/Humans/X1T6G0.png", unitData: 0 },
            { name: "Паладины", attack: 24, defense: 24, damage: "20-30", health: 100, image: "CSS/img/Units/Humans/X1T6G1.png", unitData: 0 },
            { name: "Рыцари Изабель", attack: 24, defense: 20, damage: "20-35", health: 100, image: "CSS/img/Units/Humans/X1T6G2.png", unitData: 0 }
        ],
        "7": [
            { name: "Ангелы", attack: 27, defense: 27, damage: "45-45", health: 180, image: "CSS/img/Units/Humans/X1T7G0.png", unitData: 0 },
            { name: "Архангелы", attack: 31, defense: 31, damage: "50-50", health: 220, image: "CSS/img/Units/Humans/X1T7G1.png", unitData: 0 },
            { name: "Серафим", attack: 35, defense: 25, damage: "25-75", health: 220, image: "CSS/img/Units/Humans/X1T7G2.png", unitData: 0 }
        ]
    },
    "Инферно": {
    "1": [
        { name: "Бесы", attack: 2, defense: 1, damage: "1-2", health: 4, image: "CSS/img/Units/Inferno/X2T1G0.png", unitData: 0 },
        { name: "Черти", attack: 3, defense: 2, damage: "2-3", health: 6, image: "CSS/img/Units/Inferno/X2T1G1.png", unitData: 0 },
        { name: "Дьяволята", attack: 3, defense: 3, damage: "1-4", health: 6, image: "CSS/img/Units/Inferno/X2T1G2.png", unitData: 0 }
    ],
    "2": [
        { name: "Демоны", attack: 1, defense: 3, damage: "1-2", health: 13, image: "CSS/img/Units/Inferno/X2T2G0.png", unitData: 0 },
        { name: "Огненные демоны", attack: 3, defense: 4, damage: "1-4", health: 15, image: "CSS/img/Units/Inferno/X2T2G1.png", unitData: 0 },
        { name: "Старшие демоны", attack: 3, defense: 2, damage: "1-4", health: 13, image: "CSS/img/Units/Inferno/X2T2G2.png", unitData: 0 }
    ],
    "3": [
        { name: "Адские гончие", attack: 4, defense: 3, damage: "3-5", health: 15, image: "CSS/img/Units/Inferno/X2T3G0.png", unitData: 0 },
        { name: "Церберы", attack: 4, defense: 3, damage: "4-6", health: 16, image: "CSS/img/Units/Inferno/X2T3G1.png", unitData: 0 },
        { name: "Огненные гончие", attack: 4, defense: 3, damage: "3-5", health: 15, image: "CSS/img/Units/Inferno/X2T3G2.png", unitData: 0 }
    ],
    "4": [
        { name: "Суккубы", attack: 6, defense: 6, damage: "8-13", health: 20, image: "CSS/img/Units/Inferno/X2T4G0.png", unitData: 1 },
        { name: "Демонессы", attack: 7, defense: 5, damage: "7-14", health: 29, image: "CSS/img/Units/Inferno/X2T4G1.png", unitData: 1 },
        { name: "Искусительницы", attack: 6, defense: 6, damage: "6-13", health: 30, image: "CSS/img/Units/Inferno/X2T4G2.png", unitData: 1 }
    ],
    "5": [
        { name: "Адские жеребцы", attack: 13, defense: 13, damage: "8-16", health: 50, image: "CSS/img/Units/Inferno/X2T5G0.png", unitData: 0 },
        { name: "Кошмары", attack: 18, defense: 19, damage: "11-16", health: 66, image: "CSS/img/Units/Inferno/X2T5G1.png", unitData: 0 },
        { name: "Кони преисподней", attack: 18, defense: 17, damage: "10-17", health: 66, image: "CSS/img/Units/Inferno/X2T5G2.png", unitData: 0 }
    ],
    "6": [
        { name: "Пещерные демоны", attack: 21, defense: 21, damage: "13-26", health: 110, image: "CSS/img/Units/Inferno/X2T6G0.png", unitData: 0 },
        { name: "Пещерные владыки", attack: 22, defense: 21, damage: "13-31", health: 120, image: "CSS/img/Units/Inferno/X2T6G1.png", unitData: 6 },
        { name: "Пещерные отродья", attack: 27, defense: 23, damage: "13-31", health: 140, image: "CSS/img/Units/Inferno/X2T6G2.png", unitData: 7 }
    ],
    "7": [
        { name: "Дьяволы", attack: 27, defense: 25, damage: "36-66", health: 166, image: "CSS/img/Units/Inferno/X2T7G0.png", unitData: 0 },
        { name: "Архидьяволы", attack: 32, defense: 29, damage: "36-66", health: 199, image: "CSS/img/Units/Inferno/X2T7G1.png", unitData: 0 },
        { name: "Архидемоны", attack: 32, defense: 31, damage: "36-66", health: 211, image: "CSS/img/Units/Inferno/X2T7G2.png", unitData: 0 }
        ]
    },
    "Некрополис": {
    "1": [
        { name: "Костяные воины", attack: 1, defense: 2, damage: "1-1", health: 4, image: "CSS/img/Units/Necropolis/X3T1G0.png", unitData: 0 },
        { name: "Костяные лучники", attack: 2, defense: 2, damage: "1-2", health: 5, image: "CSS/img/Units/Necropolis/X3T1G1.png", unitData: 1 },
        { name: "Костяные воители", attack: 1, defense: 3, damage: "1-2", health: 5, image: "CSS/img/Units/Necropolis/X3T1G2.png", unitData: 14 }
    ],
    "2": [
        { name: "Зомби", attack: 1, defense: 2, damage: "1-2", health: 17, image: "CSS/img/Units/Necropolis/X3T2G0.png", unitData: 0 },
        { name: "Чумные зомби", attack: 2, defense: 2, damage: "2-3", health: 17, image: "CSS/img/Units/Necropolis/X3T2G1.png", unitData: 0 },
        { name: "Гниющие зомби", attack: 2, defense: 3, damage: "1-3", health: 19, image: "CSS/img/Units/Necropolis/X3T2G2.png", unitData: 0 }
    ],
    "3": [
        { name: "Привидения", attack: 5, defense: 4, damage: "2-4", health: 16, image: "CSS/img/Units/Necropolis/X3T3G0.png", unitData: 0 },
        { name: "Призраки", attack: 5, defense: 4, damage: "4-6", health: 19, image: "CSS/img/Units/Necropolis/X3T3G1.png", unitData: 0 },
        { name: "Духи", attack: 6, defense: 5, damage: "4-6", health: 20, image: "CSS/img/Units/Necropolis/X3T3G2.png", unitData: 0 }
    ],
    "4": [
        { name: "Вампиры", attack: 6, defense: 6, damage: "6-8", health: 30, image: "CSS/img/Units/Necropolis/X3T4G0.png", unitData: 0 },
        { name: "Высшие вампиры", attack: 9, defense: 9, damage: "7-11", health: 35, image: "CSS/img/Units/Necropolis/X3T4G1.png", unitData: 0 },
        { name: "Князья вампиров", attack: 9, defense: 9, damage: "5-13", health: 40, image: "CSS/img/Units/Necropolis/X3T4G2.png", unitData: 0 }
    ],
    "5": [
        { name: "Личи", attack: 15, defense: 15, damage: "12-17", health: 50, image: "CSS/img/Units/Necropolis/X3T5G0.png", unitData: 1 },
        { name: "Архиличи", attack: 19, defense: 19, damage: "17-20", health: 55, image: "CSS/img/Units/Necropolis/X3T5G1.png", unitData: 1 },
        { name: "Высшие личи", attack: 21, defense: 19, damage: "17-21", health: 55, image: "CSS/img/Units/Necropolis/X3T5G2.png", unitData: 1 }
    ],
    "6": [
        { name: "Умертвия", attack: 24, defense: 22, damage: "21-25", health: 95, image: "CSS/img/Units/Necropolis/X3T6G0.png", unitData: 0 },
        { name: "Вестники смерти", attack: 26, defense: 24, damage: "25-30", health: 100, image: "CSS/img/Units/Necropolis/X3T6G1.png", unitData: 0 },
        { name: "Баньши", attack: 23, defense: 23, damage: "22-27", health: 110, image: "CSS/img/Units/Necropolis/X3T6G2.png", unitData: 0 }
    ],
    "7": [
        { name: "Костяные драконы", attack: 27, defense: 28, damage: "15-30", health: 150, image: "CSS/img/Units/Necropolis/X3T7G0.png", unitData: 0 },
        { name: "Призрачные драконы", attack: 30, defense: 28, damage: "25-35", health: 160, image: "CSS/img/Units/Necropolis/X3T7G1.png", unitData: 0 },
        { name: "Астральные драконы", attack: 31, defense: 27, damage: "27-36", health: 150, image: "CSS/img/Units/Necropolis/X3T7G2.png", unitData: 0 }
        ]
    },

    "Лесной союз": {
    "1": [
        { name: "Феи", attack: 1, defense: 1, damage: "1-2", health: 5, image: "CSS/img/Units/Elves/X4T1G0.png", unitData: 0 },
        { name: "Дриады", attack: 2, defense: 1, damage: "2-2", health: 6, image: "CSS/img/Units/Elves/X4T1G1.png", unitData: 0 },
        { name: "Нимфы", attack: 2, defense: 1, damage: "2-3", health: 6, image: "CSS/img/Units/Elves/X4T1G2.png", unitData: 0 }
    ],
    "2": [
        { name: "Танцующие с клинками", attack: 3, defense: 2, damage: "2-5", health: 12, image: "CSS/img/Units/Elves/X4T2G0.png", unitData: 0 },
        { name: "Танцующие со смертью", attack: 5, defense: 3, damage: "3-5", health: 12, image: "CSS/img/Units/Elves/X4T2G1.png", unitData: 0 },
        { name: "Танцующие с ветром", attack: 6, defense: 6, damage: "4-6", health: 12, image: "CSS/img/Units/Elves/X4T2G2.png", unitData: 0 }
    ],
    "3": [
        { name: "Эльфийские лучники", attack: 4, defense: 1, damage: "4-7", health: 10, image: "CSS/img/Units/Elves/X4T3G0.png", unitData: 5 },
        { name: "Мастера лука", attack: 5, defense: 4, damage: "5-8", health: 14, image: "CSS/img/Units/Elves/X4T3G1.png", unitData: 5 },
        { name: "Лесные стрелки", attack: 6, defense: 5, damage: "8-10", health: 14, image: "CSS/img/Units/Elves/X4T3G2.png", unitData: 8 }
    ],
    "4": [
        { name: "Друиды", attack: 7, defense: 7, damage: "7-9", health: 34, image: "CSS/img/Units/Elves/X4T4G0.png", unitData: 1},
        { name: "Верховные друиды", attack: 12, defense: 9, damage: "10-14", health: 34, image: "CSS/img/Units/Elves/X4T4G1.png", unitData: 1 },
        { name: "Старшие друиды", attack: 9, defense: 10, damage: "9-14", health: 34, image: "CSS/img/Units/Elves/X4T4G2.png", unitData: 1 }
    ],
    "5": [
        { name: "Единороги", attack: 12, defense: 12, damage: "10-20", health: 57, image: "CSS/img/Units/Elves/X4T5G0.png", unitData: 0 },
        { name: "Боевые единороги", attack: 17, defense: 17, damage: "10-20", health: 77, image: "CSS/img/Units/Elves/X4T5G1.png", unitData: 0 },
        { name: "Светлые единороги", attack: 15, defense: 15, damage: "9-24", health: 80, image: "CSS/img/Units/Elves/X4T5G2.png", unitData: 0 }
    ],
    "6": [
        { name: "Энты", attack: 19, defense: 27, damage: "7-17", health: 175, image: "CSS/img/Units/Elves/X4T6G0.png", unitData: 0 },
        { name: "Древние энты", attack: 19, defense: 29, damage: "10-20", health: 181, image: "CSS/img/Units/Elves/X4T6G1.png", unitData: 0 },
        { name: "Дикие энты", attack: 21, defense: 27, damage: "12-20", health: 175, image: "CSS/img/Units/Elves/X4T6G2.png", unitData: 10 }
    ],
    "7": [
        { name: "Зеленые драконы", attack: 27, defense: 25, damage: "30-50", health: 200, image: "CSS/img/Units/Elves/X4T7G0.png", unitData: 0 },
        { name: "Изумрудные драконы", attack: 31, defense: 27, damage: "33-57", health: 200, image: "CSS/img/Units/Elves/X4T7G1.png", unitData: 0 },
        { name: "Кристаллические драконы", attack: 30, defense: 26, damage: "30-60", health: 200, image: "CSS/img/Units/Elves/X4T7G2.png", unitData: 0 }
         ]
    },
    "Лига теней": {
    "1": [
        { name: "Лазутчики", attack: 3, defense: 3, damage: "2-4", health: 10, image: "CSS/img/Units/Liga/X5T1G0.png", unitData: 4 },
        { name: "Ассасины", attack: 4, defense: 3, damage: "2-4", health: 14, image: "CSS/img/Units/Liga/X5T1G1.png", unitData: 4 },
        { name: "Ловчие", attack: 5, defense: 4, damage: "3-5", health: 15, image: "CSS/img/Units/Liga/X5T1G2.png", unitData: 0 }
    ],
    "2": [
        { name: "Бестии", attack: 4, defense: 2, damage: "5-7", health: 16, image: "CSS/img/Units/Liga/X5T2G0.png", unitData: 0 },
        { name: "Фурии", attack: 5, defense: 3, damage: "5-7", health: 16, image: "CSS/img/Units/Liga/X5T2G1.png", unitData: 0 },
        { name: "Мегеры", attack: 5, defense: 4, damage: "3-8", health: 21, image: "CSS/img/Units/Liga/X5T2G2.png", unitData: 0 }
    ],
    "3": [
        { name: "Минотавры", attack: 5, defense: 4, damage: "4-7", health: 34, image: "CSS/img/Units/Liga/X5T3G0.png", unitData: 0 },
        { name: "Минотавры-стражи", attack: 6, defense: 5, damage: "4-7", health: 38, image: "CSS/img/Units/Liga/X5T3G1.png", unitData: 0 },
        { name: "Минотавры-надсмотрщики", attack: 8, defense: 8, damage: "5-8", health: 44, image: "CSS/img/Units/Liga/X5T3G2.png", unitData: 0 }
    ],
    "4": [
        { name: "Наездники на ящерах", attack: 9, defense: 7, damage: "7-12", health: 40, image: "CSS/img/Units/Liga/X5T4G0.png", unitData: 0 },
        { name: "Темные всадники", attack: 10, defense: 9, damage: "7-14", health: 60, image: "CSS/img/Units/Liga/X5T4G1.png", unitData: 0 },
        { name: "Проворные наездники", attack: 9, defense: 12, damage: "7-12", health: 65, image: "CSS/img/Units/Liga/X5T4G2.png", unitData: 0 }
    ],
    "5": [
        { name: "Гидры", attack: 15, defense: 12, damage: "7-14", health: 80, image: "CSS/img/Units/Liga/X5T5G0.png", unitData: 0 },
        { name: "Пещерные гидры", attack: 15, defense: 15, damage: "9-14", health: 125, image: "CSS/img/Units/Liga/X5T5G1.png", unitData: 0 },
        { name: "Темные гидры", attack: 15, defense: 14, damage: "9-12", health: 125, image: "CSS/img/Units/Liga/X5T5G2.png", unitData: 0 }
    ],
    "6": [
        { name: "Сумеречные ведьмы", attack: 18, defense: 18, damage: "17-24", health: 80, image: "CSS/img/Units/Liga/X5T6G0.png", unitData: 1 },
        { name: "Владычицы тени", attack: 20, defense: 20, damage: "17-27", health: 90, image: "CSS/img/Units/Liga/X5T6G1.png", unitData: 1 },
        { name: "Хозяйки ночи", attack: 20, defense: 20, damage: "20-30", health: 120, image: "CSS/img/Units/Liga/X5T6G2.png", unitData: 0 }
    ],
    "7": [
        { name: "Сумеречные драконы", attack: 25, defense: 24, damage: "45-70", health: 200, image: "CSS/img/Units/Liga/X5T7G0.png", unitData: 0 },
        { name: "Черные драконы", attack: 30, defense: 30, damage: "45-70", health: 240, image: "CSS/img/Units/Liga/X5T7G1.png", unitData: 0 },
        { name: "Красные драконы", attack: 30, defense: 30, damage: "45-60", health: 235, image: "CSS/img/Units/Liga/X5T7G2.png", unitData: 0 }
        ]
    },
    "Академия волшебства": {
    "1": [
        { name: "Гремлины", attack: 2, defense: 2, damage: "1-2", health: 5, image: "CSS/img/Units/Mages/X6T1G0.png", unitData: 1 },
        { name: "Старшие гремлины", attack: 2, defense: 2, damage: "1-2", health: 6, image: "CSS/img/Units/Mages/X6T1G1.png", unitData: 1 },
        { name: "Гремлины-вредители", attack: 5, defense: 3, damage: "1-2", health: 6, image: "CSS/img/Units/Mages/X6T1G2.png", unitData: 1 }
    ],
    "2": [
        { name: "Каменные горгульи", attack: 3, defense: 4, damage: "1-1", health: 15, image: "CSS/img/Units/Mages/X6T2G0.png", unitData: 0 },
        { name: "Обсидиановые горгульи", attack: 3, defense: 5, damage: "1-2", health: 20, image: "CSS/img/Units/Mages/X6T2G1.png", unitData: 0 },
        { name: "Стихийные горгульи", attack: 2, defense: 6, damage: "1-2", health: 20, image: "CSS/img/Units/Mages/X6T2G2.png", unitData: 0 }
    ],
    "3": [
        { name: "Железные големы", attack: 5, defense: 5, damage: "3-5", health: 18, image: "CSS/img/Units/Mages/X6T3G0.png", unitData: 0 },
        { name: "Стальные големы", attack: 6, defense: 6, damage: "5-7", health: 24, image: "CSS/img/Units/Mages/X6T3G1.png", unitData: 0 },
        { name: "Обсидиановые големы", attack: 6, defense: 4, damage: "5-7", health: 20, image: "CSS/img/Units/Mages/X6T3G2.png", unitData: 0 }
    ],
    "4": [
        { name: "Маги", attack: 10, defense: 10, damage: "7-7", health: 18, image: "CSS/img/Units/Mages/X6T4G0.png", unitData: 2 },
        { name: "Архимаги", attack: 10, defense: 10, damage: "7-7", health: 30, image: "CSS/img/Units/Mages/X6T4G1.png", unitData: 2 },
        { name: "Боевые маги", attack: 12, defense: 9, damage: "7-7", health: 29, image: "CSS/img/Units/Mages/X6T4G2.png", unitData: 2 }
    ],
    "5": [
        { name: "Джинны", attack: 11, defense: 10, damage: "12-14", health: 40, image: "CSS/img/Units/Mages/X6T5G0.png", unitData: 0 },
        { name: "Султаны джиннов", attack: 14, defense: 14, damage: "14-19", health: 45, image: "CSS/img/Units/Mages/X6T5G1.png", unitData: 0 },
        { name: "Визири джиннов", attack: 13, defense: 13, damage: "14-19", health: 50, image: "CSS/img/Units/Mages/X6T5G2.png", unitData: 0 }
    ],
    "6": [
        { name: "Принцессы ракшас", attack: 25, defense: 20, damage: "15-23", health: 120, image: "CSS/img/Units/Mages/X6T6G0.png", unitData: 0 },
        { name: "Раджи ракшас", attack: 25, defense: 25, damage: "23-30", health: 145, image: "CSS/img/Units/Mages/X6T6G1.png", unitData: 0 },
        { name: "Кшатрии ракшас", attack: 27, defense: 20, damage: "25-35", health: 135, image: "CSS/img/Units/Mages/X6T6G2.png", unitData: 0 }
    ],
    "7": [
        { name: "Колоссы", attack: 27, defense: 27, damage: "40-70", health: 175, image: "CSS/img/Units/Mages/X6T7G0.png", unitData: 0 },
        { name: "Титаны", attack: 30, defense: 30, damage: "40-70", health: 190, image: "CSS/img/Units/Mages/X6T7G1.png", unitData: 3 },
        { name: "Громовержцы", attack: 30, defense: 30, damage: "40-70", health: 190, image: "CSS/img/Units/Mages/X6T7G2.png", unitData: 3 }
        ]
    },
    "Подгорный народ": {
    "1": [
        { name: "Защитники гор", attack: 1, defense: 4, damage: "1-1", health: 7, image: "CSS/img/Units/Dwarfs/X7T1G0.png", unitData: 14 },
        { name: "Воители", attack: 1, defense: 5, damage: "1-2", health: 12, image: "CSS/img/Units/Dwarfs/X7T1G1.png", unitData: 14 },
        { name: "Горные стражи", attack: 2, defense: 6, damage: "1-2", health: 14, image: "CSS/img/Units/Dwarfs/X7T1G2.png", unitData: 13 }
    ],
    "2": [
        { name: "Метатели копья", attack: 4, defense: 4, damage: "1-2", health: 9, image: "CSS/img/Units/Dwarfs/X7T2G0.png", unitData: 1 },
        { name: "Мастера копья", attack: 4, defense: 4, damage: "2-3", health: 12, image: "CSS/img/Units/Dwarfs/X7T2G1.png", unitData: 3 },
        { name: "Гарпунеры", attack: 5, defense: 3, damage: "2-5", health: 10, image: "CSS/img/Units/Dwarfs/X7T2G2.png", unitData: 1 }
    ],
    "3": [
        { name: "Наездники на медведях", attack: 5, defense: 10, damage: "4-5", health: 25, image: "CSS/img/Units/Dwarfs/X7T3G0.png", unitData: 0 },
        { name: "Хозяева медведей", attack: 6, defense: 14, damage: "5-6", health: 30, image: "CSS/img/Units/Dwarfs/X7T3G1.png", unitData: 0 },
        { name: "Северные наездники", attack: 8, defense: 12, damage: "5-6", health: 30, image: "CSS/img/Units/Dwarfs/X7T3G2.png", unitData: 0 }
    ],
    "4": [
        { name: "Костоломы", attack: 6, defense: 6, damage: "2-6", health: 20, image: "CSS/img/Units/Dwarfs/X7T4G0.png", unitData: 0 },
        { name: "Берсерки", attack: 7, defense: 7, damage: "4-8", health: 25, image: "CSS/img/Units/Dwarfs/X7T4G1.png", unitData: 0 },
        { name: "Воины Арката", attack: 7, defense: 7, damage: "3-7", health: 30, image: "CSS/img/Units/Dwarfs/X7T4G2.png", unitData: 0 }
    ],
    "5": [
        { name: "Жрецы Рун", attack: 10, defense: 6, damage: "12-15", health: 60, image: "CSS/img/Units/Dwarfs/X7T5G0.png", unitData: 1 },
        { name: "Жрецы Арката", attack: 9, defense: 9, damage: "14-17", health: 60, image: "CSS/img/Units/Dwarfs/X7T5G1.png", unitData: 1 },
        { name: "Жрецы Пламени", attack: 10, defense: 9, damage: "17-20", health: 65, image: "CSS/img/Units/Dwarfs/X7T5G2.png", unitData: 1 }
    ],
    "6": [
        { name: "Таны", attack: 15, defense: 24, damage: "4-12", health: 100, image: "CSS/img/Units/Dwarfs/X7T6G0.png", unitData: 9 },
        { name: "Ярлы", attack: 15, defense: 24, damage: "21-26", health: 120, image: "CSS/img/Units/Dwarfs/X7T6G1.png", unitData: 0 },
        { name: "Эрлы", attack: 16, defense: 23, damage: "5-13", health: 145, image: "CSS/img/Units/Dwarfs/X7T6G2.png", unitData: 9 }
    ],
    "7": [
        { name: "Огненные драконы", attack: 25, defense: 32, damage: "40-50", health: 230, image: "CSS/img/Units/Dwarfs/X7T7G0.png", unitData: 0 },
        { name: "Лавовые драконы", attack: 30, defense: 40, damage: "40-50", health: 280, image: "CSS/img/Units/Dwarfs/X7T7G1.png", unitData: 0 },
        { name: "Драконы Арката", attack: 30, defense: 35, damage: "44-55", health: 275, image: "CSS/img/Units/Dwarfs/X7T7G2.png", unitData: 0 }
        ]
    },
    "Великая орда": {
    "1": [
        { name: "Гоблины", attack: 1, defense: 1, damage: "1-1", health: 3, image: "CSS/img/Units/Horde/X8T1G0.png", unitData: 0 },
        { name: "Трапперы", attack: 1, defense: 3, damage: "1-1", health: 7, image: "CSS/img/Units/Horde/X8T1G1.png", unitData: 0 },
        { name: "Колдуны гоблинов", attack: 2, defense: 1, damage: "1-2", health: 5, image: "CSS/img/Units/Horde/X8T1G2.png", unitData: 0 }
    ],
    "2": [
        { name: "Кентавры", attack: 3, defense: 1, damage: "2-4", health: 6, image: "CSS/img/Units/Horde/X8T2G0.png", unitData: 1 },
        { name: "Кочевые кентавры", attack: 4, defense: 2, damage: "3-6", health: 10, image: "CSS/img/Units/Horde/X8T2G1.png", unitData: 1 },
        { name: "Боевые кентавры", attack: 4, defense: 4, damage: "3-5", health: 10, image: "CSS/img/Units/Horde/X8T2G2.png", unitData: 1 }
    ],
    "3": [
        { name: "Орочьи воины", attack: 5, defense: 2, damage: "2-5", health: 12, image: "CSS/img/Units/Horde/X8T3G0.png", unitData: 0 },
        { name: "Орочьи бойцы", attack: 6, defense: 4, damage: "4-6", health: 15, image: "CSS/img/Units/Horde/X8T3G1.png", unitData: 0 },
        { name: "Вармонгеры", attack: 4, defense: 6, damage: "3-5", health: 20, image: "CSS/img/Units/Horde/X8T3G2.png", unitData: 0 }
    ],
    "4": [
        { name: "Шаманки", attack: 5, defense: 5, damage: "6-9", health: 30, image: "CSS/img/Units/Horde/X8T4G0.png", unitData: 0 },
        { name: "Дочери неба", attack: 7, defense: 9, damage: "6-9", health: 35, image: "CSS/img/Units/Horde/X8T4G1.png", unitData: 0 },
        { name: "Дочери земли", attack: 10, defense: 7, damage: "7-11", health: 35, image: "CSS/img/Units/Horde/X8T4G2.png", unitData: 0 }
    ],
    "5": [
        { name: "Убийцы", attack: 11, defense: 8, damage: "7-10", health: 34, image: "CSS/img/Units/Horde/X8T5G0.png", unitData: 0 },
        { name: "Палачи", attack: 14, defense: 10, damage: "8-12", health: 40, image: "CSS/img/Units/Horde/X8T5G1.png", unitData: 0 },
        { name: "Вожаки", attack: 13, defense: 15, damage: "10-12", health: 48, image: "CSS/img/Units/Horde/X8T5G2.png", unitData: 0 }
    ],
    "6": [
        { name: "Виверны", attack: 17, defense: 17, damage: "15-25", health: 90, image: "CSS/img/Units/Horde/X8T6G0.png", unitData: 0 },
        { name: "Темные виверны", attack: 21, defense: 18, damage: "20-27", health: 105, image: "CSS/img/Units/Horde/X8T6G1.png", unitData: 0 },
        { name: "Паокаи", attack: 19, defense: 21, damage: "20-25", health: 120, image: "CSS/img/Units/Horde/X8T6G2.png", unitData: 0 }
    ],
    "7": [
        { name: "Циклопы", attack: 29, defense: 27, damage: "40-52", health: 220, image: "CSS/img/Units/Horde/X8T7G0.png", unitData: 0 },
        { name: "Свободные циклопы", attack: 30, defense: 27, damage: "45-57", health: 225, image: "CSS/img/Units/Horde/X8T7G1.png", unitData: 4 },
        { name: "Кровоглазые циклопы", attack: 28, defense: 28, damage: "35-50", health: 235, image: "CSS/img/Units/Horde/X8T7G2.png", unitData: 4 }
        ]
    },
    "Нейтральные существа": {
    "-":[
        { name: "Рыцари смерти", attack: 23, defense: 23, damage: "25-35", health: 90, image: "CSS/img/Units/Neutrals/DeathKnight.png", unitData: 0 },
        { name: "Фениксы", attack: 33, defense: 33, damage: "30-50", health: 150, image: "CSS/img/Units/Neutrals/Phoenix.png", unitData: 0 },
        { name: "Воздушные элементали", attack: 10, defense: 4, damage: "6-8", health: 38, image: "CSS/img/Units/Neutrals/AirElemental.png", unitData: 0 },
        { name: "Земные элементали", attack: 8, defense: 14, damage: "10-14", health: 72, image: "CSS/img/Units/Neutrals/EarthElemental.png", unitData: 0 },
        { name: "Огненные элементали", attack: 12, defense: 4, damage: "11-20", health: 33, image: "CSS/img/Units/Neutrals/FireElemental.png", unitData: 1 },
        { name: "Водные элементали", attack: 10, defense: 10, damage: "8-12", health: 48, image: "CSS/img/Units/Neutrals/WaterElemental.png", unitData: 0 },
        { name: "Мумии", attack: 8, defense: 9, damage: "20-30", health: 50, image: "CSS/img/Units/Neutrals/Mummy.png", unitData: 0 },
        { name: "Мантикоры", attack: 15, defense: 15, damage: "30-50", health: 120, image: "CSS/img/Units/Neutrals/Mantikora.png", unitData: 0 },
        { name: "Волки", attack: 5, defense: 3, damage: "3-5", health: 25, image: "CSS/img/Units/Neutrals/Wolf.png", unitData: 0 }
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
    tierSelect.innerHTML = '<option disabled selected>Тир</option>';
    unitSelect.innerHTML = '<option disabled selected>Существо</option>';
    if (factionSelect.value === "Нейтральные существа") {
        const option = document.createElement('option');
        option.value = "-";
        option.textContent = "-";
        tierSelect.appendChild(option);
        tierSelect.value = "-";
        const event = new Event('change');
        tierSelect.dispatchEvent(event);
    } else {
        const tiers = units[factionSelect.value];
        for (let tier in tiers) {
            const option = document.createElement('option');
            option.value = tier;
            option.textContent = tier;
            tierSelect.appendChild(option);
        }
    }
});


yourFactionSelect.addEventListener('change', () => {
    yourTierSelect.innerHTML = '<option disabled selected>Тир</option>';
    yourUnitSelect.innerHTML = '<option disabled selected>Существо</option>';
    if (yourFactionSelect.value === "Нейтральные существа") {
        const option = document.createElement('option');
        option.value = "-";
        option.textContent = "-";
        yourTierSelect.appendChild(option);
        yourTierSelect.value = "-"; 
        const event = new Event('change');
        yourTierSelect.dispatchEvent(event);
    } else {
        const tiers = units[yourFactionSelect.value];
        for (let tier in tiers) {
            const option = document.createElement('option');
            option.value = tier;
            option.textContent = tier;
            yourTierSelect.appendChild(option);
        }
    }
});

tierSelect.addEventListener('change', () => {
    unitSelect.innerHTML = '<option disabled selected>Существо</option>';
    const selectedUnits = units[factionSelect.value][tierSelect.value];
    selectedUnits.forEach((unit, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = unit.name;
        unitSelect.appendChild(option);
    });
});

yourTierSelect.addEventListener('change', () => {
    yourUnitSelect.innerHTML = '<option disabled selected>Существо</option>';
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
    const imgElement = document.getElementById('neutral-unit-image');
    imgElement.src = selectedUnit.image;
    for (let key in neutralHiddenModifiers) {
        if (key === 'pitLord' || key === 'pitSpawn') {
            neutralHiddenModifiers[key] = 0;
        } else {
            neutralHiddenModifiers[key] = 1;
        }
    }
    document.getElementById('neutral-range-penalty').classList.remove('active');
    document.getElementById('neutral-range-penalty').dataset.tooltip = "Стрельба без штрафа";
    document.getElementById('neutral-big-shield').classList.remove('active');
    applyNeutralArcherModifiers()
    applyNeutralActiveModifiers()
    if (isSwitchingSides){
        updateAttackState(selectedUnit);
    }
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
    const imgElement = document.getElementById('your-unit-image');
    imgElement.src = selectedUnit.image;
    for (let key in hiddenModifiers) {
        if (key === 'pitLord' || key === 'pitSpawn') {
            hiddenModifiers[key] = 0;
        } else {
            hiddenModifiers[key] = 1;
        }
    }
    document.getElementById('range-penalty').classList.remove('active');
    document.getElementById('range-penalty').dataset.tooltip = "Стрельба без штрафа";
    document.getElementById('big-shield').classList.remove('active');
    applyUnitDataModifiers();
    applyActiveModifiers();
    if (!isSwitchingSides){
        updateAttackState(selectedUnit);
    }
});
const heroAttackInput = document.getElementById('hero-attack');
const heroDefenseInput = document.getElementById('hero-defense');

// Функция обновления характеристик
function updateHeroStats() {
    const selectedUnit = units[yourFactionSelect.value][yourTierSelect.value][yourUnitSelect.value];
    const heroAttack = parseInt(document.getElementById('hero-attack').value) || 0;
    const heroDefense = parseInt(document.getElementById('hero-defense').value) || 0;
    if (typeof selectedUnit !== 'undefined') {
        const finalAttack = selectedUnit.attack + heroAttack;
        const finalDefense = selectedUnit.defense + heroDefense;
        document.getElementById('your-attack').value = finalAttack;
        document.getElementById('your-defense').value = finalDefense;
    }
}
heroAttackInput.addEventListener('blur', updateHeroStats);
heroDefenseInput.addEventListener('blur', updateHeroStats);
//  кнопки "Смена стороны" и "Смена типа атаки"
let isSwitchingSides = false;
let isRangedAttack = false;
// Функция автоматического выставления типа атаки.
function updateAttackState(selectedUnit) {
    const restrictedUnitDataValues = [0, 6, 7, 9, 10, 11, 13, 14];
    if (restrictedUnitDataValues.includes(selectedUnit.unitData)) {
        isRangedAttack = false;
        switchWeaponBtn.disabled = true;
        switchWeaponBtn.style.opacity = "0.5";
    } else {
        isRangedAttack = true;
        switchWeaponBtn.disabled = false;
        switchWeaponBtn.style.opacity = "1";
    }
    const calculateImage = isSwitchingSides && isRangedAttack 
        ? "CSS/img/arrow_button_flipped.png" 
        : isSwitchingSides && !isRangedAttack 
        ? "CSS/img/sword_flipped.png" 
        : !isSwitchingSides && isRangedAttack 
        ? "CSS/img/arrow_button.png" 
        : "CSS/img/sword.png";

    const switchWeaponImage = isSwitchingSides && isRangedAttack 
        ? "CSS/img/sword_flipped.png" 
        : isSwitchingSides && !isRangedAttack 
        ? "CSS/img/arrow_button_flipped.png" 
        : !isSwitchingSides && isRangedAttack 
        ? "CSS/img/sword.png" 
        : "CSS/img/arrow_button.png";
    calculate.style.backgroundImage = `url('${calculateImage}')`;
    switchWeaponBtn.style.backgroundImage = `url('${switchWeaponImage}')`;
}


const calculate = document.getElementById('calculate');
const switchWeaponBtn = document.getElementById('switch-weapon');
function handleSwitchSides() {
    if (isSwitchingSides) {
        document.getElementById('your-unit-image').classList.add('glowing-border');
        document.getElementById('neutral-unit-image').classList.remove('glowing-border');
    } else {
        document.getElementById('neutral-unit-image').classList.add('glowing-border');
        document.getElementById('your-unit-image').classList.remove('glowing-border');
    }
    const calculateImage = !isSwitchingSides && isRangedAttack
        ? "CSS/img/arrow_button_flipped.png"
        : !isSwitchingSides && !isRangedAttack
        ? "CSS/img/sword_flipped.png"
        : isSwitchingSides && isRangedAttack
        ? "CSS/img/arrow_button.png"
        : "CSS/img/sword.png";
    const switchWeaponImage = !isSwitchingSides && isRangedAttack
        ? "CSS/img/sword_flipped.png"
        : !isSwitchingSides && !isRangedAttack
        ? "CSS/img/arrow_button_flipped.png"
        : isSwitchingSides && isRangedAttack
        ? "CSS/img/sword.png"
        : "CSS/img/arrow_button.png";

    calculate.style.backgroundImage = `url('${calculateImage}')`;
    switchWeaponBtn.style.backgroundImage = `url('${switchWeaponImage}')`;
    isSwitchingSides = !isSwitchingSides;
    document.getElementById('switch-sides').classList.toggle('active');
    calculate.classList.add('spin-effect');
    switchWeaponBtn.classList.add('spin-effect');
    setTimeout(() => {
        calculate.classList.remove('spin-effect');
        switchWeaponBtn.classList.remove('spin-effect');
    }, 300);
    const selectedUnit = isSwitchingSides
        ? units[factionSelect.value]?.[tierSelect.value]?.[unitSelect.value] // Нейтральное существо
        : units[yourFactionSelect.value]?.[yourTierSelect.value]?.[yourUnitSelect.value]; // Свое существо
    if (selectedUnit) {
        updateAttackState(selectedUnit);
    }
}

// Привязываем обработчик к кнопке
document.getElementById('switch-sides').addEventListener('click', handleSwitchSides);



switchWeaponBtn.addEventListener('click', () => {
    isRangedAttack = !isRangedAttack;
    const tempBackground = calculate.style.backgroundImage;
    calculate.style.backgroundImage = switchWeaponBtn.style.backgroundImage;
    switchWeaponBtn.style.backgroundImage = tempBackground;
});

// Модификаторы
let modifiers = {
    basicOffense: 1,
    advancedOffense: 1,
    expertOffense: 1,
    basicDefense: 1,
    advancedDefense: 1,
    expertDefense: 1,
    shooting: 1,
    retribution: 1,
    evasion: 1,
    fogVeil: 1,
    rangePenalty: 1,
    neutralRangePenalty: 1,
    blowHeaven: 1,
    curvedFire: 1,
    neutralBlowHeaven: 1,
    neutralCurvedFire: 1,
    bigShield: 1,
    neutralBigShield: 1
};

let hiddenModifiers = {
    doubleShoot: 1,
    meleePenalty: 1,
    rangePenalty2: 1,
    pitLord: 0,
    pitSpawn: 0,
    powerArrow: 1,
    blowStorm: 1,
}

let neutralHiddenModifiers = {
    doubleShoot: 1,
    meleePenalty: 1,
    rangePenalty2: 1,
    pitLord: 0,
    pitSpawn: 0,
    powerArrow: 1,
    blowStorm: 1,
}

const modifiersFunctions = {
    'frenzy': applyFrenzyModifier,
    'vitality': applyVitalityModifier,
    'home-road': applyHomeRoadModifier,
    'defense': applyDefenseModifier,
    'forest-rage': applyForestRageModifier,
    'bloody-claw': applyFrenzyModifier,
    'bloody-claw': applyFrenzyModifier,
    'ring-of-life1':applyVitalityModifier,
    'ring-of-life2':applyVitalityModifier,
    'forest-rage-ent': applyForestRageEntModifier,
    'defensive-position': applyDefensivePositionModifier
};
const modifiersNeutralFunctions = {
    'neutral-home-road': applyNeutralHomeRoadModifier,
    'neutral-forest-rage-ent': applyNeutralForestRageEntModifier,
    'neutral-defensive-position': applyNeutralDefensivePositionModifier
};
const idToModifierMap = {
    'basic-offense': 'basicOffense',
    'advanced-offense': 'advancedOffense',
    'expert-offense': 'expertOffense',
    'basic-defense': 'basicDefense',
    'advanced-defense': 'advancedDefense',
    'expert-defense': 'expertDefense',
    'shooting': 'shooting',
    'retribution': 'retribution',
    'evasion': 'evasion',
    'fog-veil': 'fogVeil',
    'range-penalty': 'rangePenalty',
    'neutral-range-penalty': 'neutralRangePenalty',
    'blow-heaven': 'blowHeaven',
    'neutral-blow-heaven': 'neutralBlowHeaven',
    'curved-fire': 'curvedFire',
    'neutral-curved-fire': 'neutralCurvedFire',
    'big-shield': 'bigShield',
    'neutral-big-shield': 'neutralBigShield'
};
function applyActiveModifiers() {
    document.querySelectorAll('.modifier.active').forEach(modifier => {
        const id = modifier.id;
        if (modifiersFunctions[id]) {
            modifiersFunctions[id](true);
        }
    });
}
function applyNeutralActiveModifiers() {
    document.querySelectorAll('.modifier.active').forEach(modifier => {
        const id = modifier.id;
        if (modifiersNeutralFunctions[id]) {
            modifiersNeutralFunctions[id](true);
        }
    });
}
function applyDefenseModifier(isActive) {
    const yourDefenseField = document.getElementById('your-defense');
    const isHoldGroundActive = document.getElementById('hold-ground').classList.contains('active');
    const selectedUnitName = yourUnitSelect.options[yourUnitSelect.selectedIndex].text;
    const isAncientEnt = selectedUnitName === 'Древние энты';
    let baseDefense = parseInt(yourDefenseField.value) || 0;
    let defenseBonus = 0;
    if (isActive) {
        if (isAncientEnt && isHoldGroundActive) {
            defenseBonus = Math.floor(baseDefense);  
        } else if (isAncientEnt) {
            defenseBonus = Math.floor(baseDefense * 0.5);
        } else if (isHoldGroundActive) {
            defenseBonus = Math.floor(baseDefense * 0.6);
        } else {
            defenseBonus = Math.floor(baseDefense * 0.3);
        }
        yourDefenseField.value = baseDefense + defenseBonus;
        yourDefenseField.dataset.baseDefense = baseDefense;
    } else {
        yourDefenseField.value = yourDefenseField.dataset.baseDefense || baseDefense;
    }
}

function applyFrenzyModifier(isActive) {
    const yourMinField = document.getElementById('your-min-damage');
    const yourMaxField = document.getElementById('your-max-damage');
    const minDamage = parseInt(yourMinField.value) || 0;
    const maxDamage = parseInt(yourMaxField.value) || 0;
    yourMinField.value = isActive ? minDamage + 1 : minDamage - 1;
    yourMaxField.value = isActive ? maxDamage + 1 : maxDamage - 1;
}

function applyVitalityModifier(isActive) {
    const healthField = document.getElementById('your-health');
    const currentHealth = parseInt(healthField.value) || 0;
    healthField.value = isActive ? currentHealth + 2 : currentHealth - 2;
}

function applyHomeRoadModifier(isActive) {
    const attackField = document.getElementById('your-attack');
    const defenseField = document.getElementById('your-defense');
    const currentAttack = parseInt(attackField.value) || 0;
    const currentDefense = parseInt(defenseField.value) || 0;
    attackField.value = isActive ? currentAttack + 1 : currentAttack - 1;
    defenseField.value = isActive ? currentDefense + 1 : currentDefense - 1;
}

function applyNeutralHomeRoadModifier(isActive) {
    const attackField = document.getElementById('neutral-attack');
    const defenseField = document.getElementById('neutral-defense');
    const currentAttack = parseInt(attackField.value) || 0;
    const currentDefense = parseInt(defenseField.value) || 0;
    attackField.value = isActive ? currentAttack + 1 : currentAttack - 1;
    defenseField.value = isActive ? currentDefense + 1 : currentDefense - 1;
}

function applyForestRageModifier(isActive) {
    const yourMaxField = document.getElementById('your-max-damage');
    const selectedFaction = yourFactionSelect.options[yourFactionSelect.selectedIndex].text;
    const baseMaxDamage = parseInt(yourMaxField.value) || 0;
    if (selectedFaction === 'Лесной союз' && baseMaxDamage > 0) {
        yourMaxField.value = isActive ? baseMaxDamage + 1 : baseMaxDamage - 1;
    }
}
function applyForestRageEntModifier(isActive) {
    const yourAttackField = document.getElementById('your-attack');
    const yourDefenseField = document.getElementById('your-defense');
    let baseAttack = parseInt(yourAttackField.value);
    let baseDefense = parseInt(yourDefenseField.value);
    let transferredDefense = Math.floor(baseDefense / 2);
    if (isActive) {
        yourAttackField.dataset.baseAttack = baseAttack;
        yourDefenseField.dataset.baseDefense = baseDefense;
        yourAttackField.value = baseAttack + transferredDefense;
        yourDefenseField.value = baseDefense - transferredDefense;
    } else {
        yourAttackField.value = yourAttackField.dataset.baseAttack || baseAttack;
        yourDefenseField.value = yourDefenseField.dataset.baseDefense || baseDefense;
    }
}
function applyNeutralForestRageEntModifier(isActive) {
    const neutralAttackField = document.getElementById('neutral-attack');
    const neutralDefenseField = document.getElementById('neutral-defense');
    let baseAttack = parseInt(neutralAttackField.value);
    let baseDefense = parseInt(neutralDefenseField.value);
    let transferredDefense = Math.floor(baseDefense / 2);
    if (isActive) {
        neutralAttackField.dataset.baseAttack = baseAttack;
        neutralDefenseField.dataset.baseDefense = baseDefense;
        neutralAttackField.value = baseAttack + transferredDefense;
        neutralDefenseField.value = baseDefense - transferredDefense;
    } else {
        neutralAttackField.value = neutralAttackField.dataset.baseAttack || baseAttack;
        neutralDefenseField.value = neutralDefenseField.dataset.baseDefense || baseDefense;
    }
}
function applyDefensivePositionModifier(isActive) {
    const defenseField = document.getElementById('your-defense');
    const currentDefense = parseInt(defenseField.value) || 0;
    defenseField.value = isActive ? currentDefense + 7 : currentDefense - 7;
}
function applyNeutralDefensivePositionModifier(isActive) {
    const defenseField = document.getElementById('neutral-defense');
    const currentDefense = parseInt(defenseField.value) || 0;
    defenseField.value = isActive ? currentDefense + 7 : currentDefense - 7;
}
function removeUnitAbility(){
    abilityButton = document.querySelector('.unit-ability')
    abilityButton.style.visibility = 'hidden';
    abilityButton.removeAttribute('id');
    abilityButton.classList.remove('active');
    abilityButton.dataset.tooltip = '';
}
function removeNeutralUnitAbility(){
    abilityButton = document.querySelector('.neutral-unit-ability')
    abilityButton.style.visibility = 'hidden';
    abilityButton.removeAttribute('id');
    abilityButton.classList.remove('active');
    abilityButton.dataset.tooltip = '';
}
function applyUnitDataModifiers() {
    const selectedUnit = units[yourFactionSelect.value][yourTierSelect.value][yourUnitSelect.value];
    const unitDataIndex = selectedUnit.unitData || 0;
    removeUnitAbility();
    switch (unitDataIndex) {
        case 0: // Юнит ближнего боя

            break;
        case 1: // Стрелок
            document.getElementById('range-penalty').classList.add('active');
            document.getElementById('range-penalty').dataset.tooltip = "Стрельба со штрафом";
            hiddenModifiers.meleePenalty = 0.5;
            break;
        case 2: // Стрелок без штрафа к стрельбе
            hiddenModifiers.meleePenalty = 0.5;
            break;
        case 3: // Стрелок без штрафа в ближнем бою
            document.getElementById('range-penalty').classList.add('active');
            document.getElementById('range-penalty').dataset.tooltip = "Стрельба со штрафом";
            break;
        case 4: // Стрелок без штрафа в ближнем бою, но с дополнительным штрафом к стрельбе
            document.getElementById('range-penalty').classList.add('active');
            document.getElementById('range-penalty').dataset.tooltip = "Стрельба со штрафом";
            hiddenModifiers.rangePenalty2 = 0.5;
            break;
        case 5: // Эльфийские лучники и мастера лука
            document.getElementById('range-penalty').classList.add('active');
            document.getElementById('range-penalty').dataset.tooltip = "Стрельба со штрафом";
            hiddenModifiers.doubleShoot = 2;
            hiddenModifiers.meleePenalty = 0.5;
            break;
        case 6: // Пещерные владыки
            hiddenModifiers.pitLord = 1;
            break;
        case 7: // Пещерные владыки
            hiddenModifiers.pitSpawn = 2;
            break;
        case 8: // Усиленная стрела у лесных стрелков
            hiddenModifiers.meleePenalty = 0.5;
            hiddenModifiers.powerArrow = 0.667;
            break;
        case 9: // Удар бури у танов и эрлов
            hiddenModifiers.blowStorm = 2;
            console.log(hiddenModifiers.blowStorm)
            break;
        case 10: // Способность ярость леса у Диких энтов
            abilityButton = document.querySelector('.unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'forest-rage-ent';
            abilityButton.dataset.tooltip = 'Ярость леса';
            break;
        case 11: // Способность удар с небес у грифонов
            abilityButton = document.querySelector('.unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'blow-heaven';
            abilityButton.dataset.tooltip = 'Удар с небес';
            break;
        case 12: // Способность стрельба навесом у лучников
            document.getElementById('range-penalty').classList.add('active');
            document.getElementById('range-penalty').dataset.tooltip = "Стрельба со штрафом";
            hiddenModifiers.meleePenalty = 0.5;
            abilityButton = document.querySelector('.unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'curved-fire';
            abilityButton.dataset.tooltip = 'Стрельба навесом';
            break;
        case 13: // Способность оборонительная позиция у горных стражей
            document.getElementById('big-shield').classList.add('active');
            abilityButton = document.querySelector('.unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'defensive-position';
            abilityButton.dataset.tooltip = 'Оборонительная позиция';
            break;
        case 14: // Юниты со способностью большой щит
            document.getElementById('big-shield').classList.add('active');
            break;
    }
}
function applyNeutralArcherModifiers() {
    const selectedUnit = units[factionSelect.value][tierSelect.value][unitSelect.value];
    const unitDataIndex = selectedUnit.unitData || 0;
    removeNeutralUnitAbility();
    switch (unitDataIndex) {
        case 0: // Юнит ближнего боя
            break;
        case 1: // Стрелок
            document.getElementById('neutral-range-penalty').classList.add('active');
            document.getElementById('neutral-range-penalty').dataset.tooltip = "Стрельба со штрафом";
            neutralHiddenModifiers.meleePenalty = 0.5;
            break;
        case 2: // Стрелок без штрафа к стрельбе
            neutralHiddenModifiers.meleePenalty = 0.5;
            break;
        case 3: // Стрелок без штрафа в ближнем бою
            document.getElementById('neutral-range-penalty').classList.add('active');
            document.getElementById('neutral-range-penalty').dataset.tooltip = "Стрельба со штрафом";
            break;
        case 4: // Стрелок без штрафа в ближнем бою, но с дополнительным штрафом к стрельбе
            document.getElementById('neutral-range-penalty').classList.add('active');
            document.getElementById('neutral-range-penalty').dataset.tooltip = "Стрельба со штрафом";
            neutralHiddenModifiers.rangePenalty2 = 0.5;
            break;
        case 5: // Эльфийские лучники и мастера лука
            document.getElementById('neutral-range-penalty').classList.add('active');
            document.getElementById('neutral-range-penalty').dataset.tooltip = "Стрельба со штрафом";
            neutralHiddenModifiers.doubleShoot = 2;
            neutralHiddenModifiers.meleePenalty = 0.5;
            break;
        case 6: // Пещерные владыки
            neutralHiddenModifiers.pitLord = 1;
            break;
        case 7: // Пещерные владыки
            neutralHiddenModifiers.pitSpawn = 2;
            break;
        case 8: // Усиленная стрела у лесных стрелков
            neutralHiddenModifiers.meleePenalty = 0.5;
            neutralHiddenModifiers.powerArrow = 0.667;
            break;
        case 9: // Удар бури у танов и эрлов
            neutralHiddenModifiers.blowStorm = 2;
            break;
        case 10: // Способность ярость леса у Диких энтов
            abilityButton = document.querySelector('.neutral-unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'neutral-forest-rage-ent';
            abilityButton.dataset.tooltip = 'Ярость леса';
            break;
        case 11: // Способность удар с небес у грифонов
            abilityButton = document.querySelector('.neutral-unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'neutral-blow-heaven';
            abilityButton.dataset.tooltip = 'Удар с небес';
            break;
        case 12: // Способность стрельба навесом у лучников
            document.getElementById('neutral-range-penalty').classList.add('active');
            document.getElementById('neutral-range-penalty').dataset.tooltip = "Стрельба со штрафом";
            neutralHiddenModifiers.meleePenalty = 0.5;
            abilityButton = document.querySelector('.neutral-unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'neutral-curved-fire';
            abilityButton.dataset.tooltip = 'Стрельба навесом';
            break;
        case 13: // Способность оборонительная позиция у горных стражей
            document.getElementById('neutral-big-shield').classList.add('active');
            abilityButton = document.querySelector('.neutral-unit-ability')
            abilityButton.style.visibility = 'visible';
            abilityButton.id = 'neutral-defensive-position';
            abilityButton.dataset.tooltip = 'Оборонительная позиция';
            break;
        case 14: // Юниты со способностью большой щит
            document.getElementById('neutral-big-shield').classList.add('active');
            break;
    }
}

document.querySelectorAll('.modifiers-column').forEach(column => {
    column.addEventListener('click', (event) => {
        if (event.target.classList.contains('modifier')) {
            const isAbilityRow = column.classList.contains('ability');
            const isActive = event.target.classList.contains('active');
            if (event.target.id !== 'range-penalty') {
                if (isAbilityRow) {
                    column.querySelectorAll('.modifier').forEach(mod => mod.classList.remove('active'));
                }
                if (!isAbilityRow || !isActive) {
                    event.target.classList.toggle('active');
                    const modifierFunction = modifiersFunctions[event.target.id];
                    const modifierNeutralFunction = modifiersNeutralFunctions[event.target.id]
                    if (modifierFunction) {
                        modifierFunction(!isActive);
                    }
                    if (modifierNeutralFunction){
                        modifierNeutralFunction(!isActive)
                    }
                }
            }
        }
    });
});
document.getElementById('range-penalty').addEventListener('click', function (event) {
    const isActive = this.classList.toggle('active');
    this.dataset.tooltip = isActive ? "Стрельба со штрафом" : "Стрельба без штрафа";
    event.stopPropagation();
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
    // Сброс модификаторов
    for (let key in modifiers) {
        modifiers[key] = 1;
    }
    // Применение активных модификаторов
    document.querySelectorAll('.modifier.active').forEach(mod => {
        const modKey = idToModifierMap[mod.id];  // Получаем ключ словаря по id кнопки
        if (modKey) {
            switch (modKey) {
                case 'basicOffense':
                    modifiers[modKey] = 1.05;
                    break;
                case 'advancedOffense':
                    modifiers[modKey] = 1.1;
                    break;
                case 'expertOffense':
                    modifiers[modKey] = 1.15;
                    break;
                case 'basicDefense':
                    modifiers[modKey] = 0.9;
                    break;
                case 'advancedDefense':
                    modifiers[modKey] = 0.8;
                    break;
                case 'expertDefense':
                    modifiers[modKey] = 0.7;
                    break;
                case 'shooting':
                    modifiers[modKey] = 1.2;
                    break;
                case 'retribution':
                    const selectedFaction = yourFactionSelect.options[yourFactionSelect.selectedIndex].text;
                    if (selectedFaction === 'Некрополис'){
                        modifiers[modKey] = 1;
                    }
                    else{
                        modifiers[modKey] = 1 + 0.05 * (parseInt(document.getElementById('hero-FS').value) || 0);
                    }
                    break;
                case 'evasion':
                    modifiers[modKey] = 0.8;
                    break;
                case 'fogVeil':
                    modifiers[modKey] = 0.8;
                    break;
                case 'rangePenalty':
                    modifiers[modKey] = 0.5;
                    break;
                case 'neutralRangePenalty':
                    modifiers[modKey] = 0.5;
                    break;
                case 'blowHeaven':
                    modifiers[modKey] = 2;
                    break;
                case 'neutralBlowHeaven':
                    modifiers[modKey] = 2;
                    break;
                case 'curvedFire':
                    modifiers[modKey] = 0.5;
                    break;
                case 'neutralCurvedFire':
                    modifiers[modKey] = 0.5;
                    break;
                case 'bigShield':
                    modifiers[modKey] = 0.5;
                    break;
                case 'neutralBigShield':
                    modifiers[modKey] = 0.5;
                    break;
            }
        }
    });
    // Коэффициенты модификаторов
    const yourRangedModifiers = modifiers.rangePenalty*modifiers.shooting*modifiers.retribution*hiddenModifiers.doubleShoot*hiddenModifiers.rangePenalty2*modifiers.curvedFire*modifiers.neutralBigShield;
    const yourMeleeModifiers = modifiers.basicOffense*modifiers.advancedOffense*modifiers.expertOffense*modifiers.retribution*hiddenModifiers.meleePenalty*hiddenModifiers.blowStorm*modifiers.blowHeaven;
    const neutralRangedModifiers = modifiers.neutralRangePenalty*modifiers.fogVeil*modifiers.evasion*neutralHiddenModifiers.doubleShoot*neutralHiddenModifiers.rangePenalty2*modifiers.neutralCurvedFire*modifiers.bigShield;
    const neutralMeleeModifiers = modifiers.basicDefense*modifiers.advancedDefense*modifiers.expertDefense*neutralHiddenModifiers.meleePenalty*neutralHiddenModifiers.blowStorm*modifiers.neutralBlowHeaven;
    let minDamage, maxDamage, killedUnits;
    if (isSwitchingSides) {
        // Нейтральная сторона атакует
        const finalModifiers = isRangedAttack ? neutralRangedModifiers : neutralMeleeModifiers;
        if (neutralAttack >= yourDefense) {
            minDamage = neutralMin * neutralQuantity * (1 + (neutralAttack - Math.floor(yourDefense*neutralHiddenModifiers.powerArrow)) * 0.05) * finalModifiers + neutralHiddenModifiers.pitLord*yourHealth + neutralHiddenModifiers.pitSpawn*yourQuantity;
            maxDamage = neutralMax * neutralQuantity * (1 + (neutralAttack - Math.floor(yourDefense*neutralHiddenModifiers.powerArrow)) * 0.05) * finalModifiers + neutralHiddenModifiers.pitLord*yourHealth + neutralHiddenModifiers.pitSpawn*yourQuantity;
        } else {
            minDamage = neutralMin * neutralQuantity / (1 + (Math.floor(yourDefense*neutralHiddenModifiers.powerArrow) - neutralAttack) * 0.05) * finalModifiers + neutralHiddenModifiers.pitLord*yourHealth + neutralHiddenModifiers.pitSpawn*yourQuantity;
            maxDamage = neutralMax * neutralQuantity / (1 + (Math.floor(yourDefense*neutralHiddenModifiers.powerArrow) - neutralAttack) * 0.05) * finalModifiers + neutralHiddenModifiers.pitLord*yourHealth + neutralHiddenModifiers.pitSpawn*yourQuantity;
        }
        killedUnits = `${Math.floor(minDamage / yourHealth)}-${Math.floor(maxDamage / yourHealth)}`;
    } else {
        // Ваша сторона атакует
        const finalModifiers = isRangedAttack ? yourRangedModifiers : yourMeleeModifiers;
        if (yourAttack >= neutralDefense) {
            minDamage = (yourMin * yourQuantity * (1 + (yourAttack - Math.floor(neutralDefense*hiddenModifiers.powerArrow)) * 0.05) * finalModifiers + hiddenModifiers.pitLord*neutralHealth + hiddenModifiers.pitSpawn*neutralQuantity);
            maxDamage = (yourMax * yourQuantity * (1 + (yourAttack - Math.floor(neutralDefense*hiddenModifiers.powerArrow)) * 0.05) * finalModifiers + hiddenModifiers.pitLord*neutralHealth + hiddenModifiers.pitSpawn*neutralQuantity);
        } else {
            minDamage = (yourMin * yourQuantity / (1 + (Math.floor(neutralDefense*hiddenModifiers.powerArrow) - yourAttack) * 0.05) * finalModifiers + hiddenModifiers.pitLord*neutralHealth + hiddenModifiers.pitSpawn*neutralQuantity);
            maxDamage = (yourMax * yourQuantity / (1 + (Math.floor(neutralDefense*hiddenModifiers.powerArrow) - yourAttack) * 0.05) * finalModifiers + hiddenModifiers.pitLord*neutralHealth + hiddenModifiers.pitSpawn*neutralQuantity);
        }
        killedUnits = `${Math.floor(minDamage / neutralHealth)}-${Math.floor(maxDamage / neutralHealth)}`;
    }
    // Обновляем результаты на странице
    document.getElementById('damage-result').textContent = `${Math.floor(minDamage)}-${Math.floor(maxDamage)}`;
    document.getElementById('kill-result').textContent = killedUnits;
});
