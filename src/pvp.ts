import { Monster } from "./monster";
import { Player } from "./player";

function main() {
    const player: Player = new Player(
        "Alexis",
        50,
        5,
        5,
        15,
        5,
        0,
        500,
        ["Attack", "Defend", "Heal", "Dodger"]
    );

    const slime: Monster = new Monster(
        "Slime",
        "Slime",
        "The slime has been defeated.",
        20,
        5,
        2,
        2,
        2,
        10,
        ["Jump", "Heal", "Mitosis"]
    )

    while (player.isAlive() && slime.isAlive()) {
        const playerTurnPriority = Math.floor(Math.random() * 101) + player.getStats().speed / 100 * 2;
        const slimeTurnPriority = Math.floor(Math.random() * 101) + slime.getStats().speed / 100 * 2;
        const whoAttacksFirst = playerTurnPriority > slimeTurnPriority ? "Player" : "Slime";

        console.info(`\n${whoAttacksFirst}'s turn.`);

        if (playerTurnPriority > slimeTurnPriority) {
            player.damage(slime, player.getStats().attack);
            if (slime.isAlive()) {
                console.log(`The slime has ${slime.getStats().actualHP} HP left.`);
            } else {
                slime.displayDeathMessage();
            }
            slime.damage(player, slime.getStats().attack);
            if (player.isAlive()) {
                console.warn(`You have ${player.getStats().actualHP} HP left.`);
            } else {
                player.displayDeathMessage();
            }
        } else {
            slime.damage(player, slime.getStats().attack);
            if (player.isAlive()) {
                console.warn(`You have ${player.getStats().actualHP} HP left.`);
            } else {
                player.displayDeathMessage();
            }
            player.damage(slime, player.getStats().attack);
            if (slime.isAlive()) {
                console.log(`The slime has ${slime.getStats().actualHP} HP left.`);
            } else {
                slime.displayDeathMessage();
            }
        }
    }
}

main();