export class Character {
    constructor(name, type, health, level, attack, defence) {
        if (typeof name !== 'string') {
            throw new Error('Имя должно быть строкой');
        }
        if (name.length < 2 || name.length > 10) {
            throw new Error('Длина имени должна быть от 2 до 10 символов');
        }
        
        const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof type !== 'string' || !allowedTypes.includes(type)) {
            throw new Error(`Тип должен быть одним из: ${allowedTypes.join(', ')}`);
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}

export class Bowerman extends Character {

}

export class Swordsman extends Character {

}

export class Magician extends Character {

}

export class Daemon extends Character {

}

export class Undead extends Character {

}

export class Zombie extends Character {

}