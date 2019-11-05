const RANKS = [
  "Pushover",
  "Novice",
  "Fighter",
  "Warrior",
  "Veteran",
  "Sage",
  "Elite",
  "Conqueror",
  "Champion",
  "Master",
  "Greatest"
];

class Warrior {
  constructor() {
    this._level = 1;
    this._experience = 100;
    this._achievements = [];
  }

  level() {
    this._level = Math.floor(this._experience / 100);
    return Math.min(this._level, 100);
  }

  experience() {
    return Math.min(this._experience, 10000);
  }

  rank() {
    return RANKS[Math.floor(this._level / 10)] || RANKS[RANKS.length - 1];
  }

  achievements() {
    return this._achievements;
  }

  training([description, exp, minLevel]) {
    if (minLevel > this._level) return "Not strong enough";
    this._achievements.push(description);
    this._experience += exp;
    this._level = Math.floor(this._experience / 100);
    return description;
  }

  isWarriorsSameRank(first, second) {
    return Math.floor(first / 10) === Math.floor(second / 10);
  }

  battle(enemyLevel) {
    if (enemyLevel < 1 || enemyLevel > 100) {
      return "Invalid level";
    }

    let fightResult = this.getFightResult(enemyLevel);

    this._level = Math.floor(this._experience / 100);

    return fightResult;
  }

  getFightResult(enemyLevel) {
    switch (true) {
      case this._level === enemyLevel:
        this._experience += 10;
        return "A good fight";
      case this._level - enemyLevel === 1:
        this._experience += 5;
        return "A good fight";
      case this._level - enemyLevel <= -5 &&
        !this.isWarriorsSameRank(this._level, enemyLevel):
        return `You've been defeated`;
      case this._level < enemyLevel:
        this._experience +=
          20 * ((enemyLevel - this._level) * (enemyLevel - this._level));
        return "An intense fight";
      default:
        return "Easy fight";
    }
  }
}
