document.getElementById('calculateBtn').addEventListener('click', calculateDamage);

let rangeAttackModifier = 1;
let perkShootingModifier = 1;

const rangeAttackBtn = document.getElementById('rangeAttackBtn');
const perkShootingBtn = document.getElementById('perkShootingBtn');

rangeAttackBtn.addEventListener('click', () => {
    rangeAttackModifier = rangeAttackModifier === 1 ? 0.5 : 1;
    rangeAttackBtn.classList.toggle('active');
});

perkShootingBtn.addEventListener('click', () => {
    perkShootingModifier = perkShootingModifier === 1 ? 1.2 : 1;
    perkShootingBtn.classList.toggle('active');
});

function calculateDamage() {
    const minDamage = parseInt(document.getElementById('minDamage').value);
    const maxDamage = parseInt(document.getElementById('maxDamage').value);
    const attack = parseInt(document.getElementById('attack').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const defense = parseInt(document.getElementById('defense').value);
    const hp = parseInt(document.getElementById('hp').value);

    let generalDamage;
    let result;

    if (attack >= defense) {
        generalDamage = [
            Math.floor(minDamage * quantity * (1 + (attack - defense) * 0.05) * rangeAttackModifier * perkShootingModifier),
            Math.floor(maxDamage * quantity * (1 + (attack - defense) * 0.05) * rangeAttackModifier * perkShootingModifier),
        ];
        result = [
            Math.floor(generalDamage[0] / hp),
            Math.floor(generalDamage[1] / hp),
        ];
    } else {
        generalDamage = [
            Math.floor(minDamage * quantity / (1 + (defense - attack) * 0.05) * rangeAttackModifier * perkShootingModifier),
            Math.floor(maxDamage * quantity / (1 + (defense - attack) * 0.05) * rangeAttackModifier * perkShootingModifier),
        ];
        result = [
            Math.floor(generalDamage[0] / hp),
            Math.floor(generalDamage[1] / hp),
        ];
    }

    document.getElementById('damageOutput').textContent = `${generalDamage[0]}-${generalDamage[1]}`;
    document.getElementById('killedOutput').textContent = `${result[0]}-${result[1]}`;
}
