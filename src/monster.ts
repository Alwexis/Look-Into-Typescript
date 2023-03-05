import { Entity } from "./entity";

export class Monster extends Entity {
    private _name: string;
    private _type: string;
    private _level: number;
    private _exp: number;
    private _deathMessage: string;

    constructor(name: string, type: string, deathMessage: string, hp: number, attack: number, defense: number, speed: number, level: number, exp: number, skills: string[]) {
        super(skills, { hp: hp, actualHP: hp, attack: attack, defense: defense, speed: speed })
        this._name = name;
        this._type = type;
        this._level = level;
        this._exp = exp;
        this._deathMessage = deathMessage;
    }

    displayDeathMessage(): void {
        console.error(this._deathMessage);
    }
    
    getSkills(): string[] {
        //throw new Error("Method not implemented.");
        return super.getSkills();
    }
    
    getStats(): { [key: string]: number; } {
        //throw new Error("Method not implemented.");
        return super.getStats();
    }

    setSkills(skills: string[]): void {
        //throw new Error("Method not implemented.");
        super.setSkills(skills);
    }

    setStats(stats: { [key: string]: number; }): void {
        //throw new Error("Method not implemented.");
        super.setStats(stats);
    }

    getName(): string {
        return this._name;
    }

    getType(): string {
        return this._type;
    }

    getLevel(): number {
        return this._level;
    }

    getExp(): number {
        return this._exp;
    }

    setName(name: string) {
        this._name = name;
    }

    setType(type: string) {
        this._type = type;
    }

    setLevel(level: number) {
        this._level = level;
    }

    setExp(exp: number) {
        this._exp = exp;
    }
}