import { PlayerObject } from "./PersonObjects/Player/PlayerObject";
import { sanitizeExploits } from "./Exploits/Exploit";

import { Reviver } from "./utils/JSONReviver";

export let Player = new PlayerObject();

(window as any).cheat = Object.assign({}, (window as any).cheat, {
  getPlayer: () => Player
})

export function loadPlayer(saveString: string): void {
  Player = JSON.parse(saveString, Reviver);
  Player.money = parseFloat(Player.money + "");
  Player.exploits = sanitizeExploits(Player.exploits);
}
