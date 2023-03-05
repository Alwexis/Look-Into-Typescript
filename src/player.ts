import { Entity } from "./entity";

export class Player extends Entity {
    private _name: string;
    private _level: number;
    private _exp: number;
    private _money: number;
    private _actualHP: number;

    constructor(name: string, hp: number, attack: number, defense: number, speed: number, level: number, exp: number, money: number, skills: string[]) {
        super(skills, { hp: hp, actualHP: hp, attack: attack, defense: defense, speed: speed })
        this._name = name;
        this._level = level;
        this._exp = exp;
        this._money = money;
        this._actualHP = hp;
    }

    displayDeathMessage(): void {
        console.error("You are dead.");
    }

    getName(): string {
        return this._name;
    }

    getLevel(): number {
        return this._level;
    }

    getExp(): number {
        return this._exp;
    }

    getMoney(): number {
        return this._money;
    }

    getHP(): number {
        return this._actualHP;
    }

    setHP(hp: number) {
        this._actualHP = hp;
    }

    setExp(exp: number) {
        this._exp = exp;
    }

    setLevel(level: number) {
        this._level = level;
    }

    setMoney(money: number) {
        this._money = money;
    }

    setStats(stats: { [key: string]: number; }): void {
        super.setStats(stats);
    }

    setSkills(skills: string[]): void {
        super.setSkills(skills);
    }

    getStats(): { [key: string]: number; } {
        return super.getStats();
    }

    getSkills(): string[] {
        return super.getSkills();
    }

}