import uuid from 'uuid/v4';

export default class {
    constructor(name, initiative, type) {
        this.id = uuid();
        this.name = name;
        this.initiative = initiative;
        this.type = type;
    }
}

export const TYPE_PC = 'PC';
export const TYPE_NPC = 'NPC';
export const TYPE_ENEMY = 'ENEMY';
