export class Entity {
    private _skills: string[];
    private _stats: { [key: string]: number };

    constructor(skills: string[], stats: { [key: string]: number }) {
        this._skills = skills;
        this._stats = stats;
    }

    isAlive(): boolean {
        return this._stats.actualHP > 0;
    }

    damage(entity: Entity, amount: number): boolean {
        const actualHP = entity.getStats().actualHP;
        if (actualHP - amount > 0) {
            entity.setStats({ ...entity.getStats(), actualHP: actualHP - amount });
            return false;
        } else {
            entity.setStats({ ...entity.getStats(), actualHP: 0 });
            return true;
        }
    }

    getSkills(): string[] {
        return this._skills;
    }

    getStats(): { [key: string]: number } {
        return this._stats;
    }

    setSkills(skills: string[]) {
        this._skills = skills;
    }

    setStats(stats: { [key: string]: number }) {
        this._stats = stats;
    }

}