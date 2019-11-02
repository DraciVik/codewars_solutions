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
    this.warriorExperience = 100;
    this.warriorLevel = 1;
    this.warriorRank = "Pushover";
    this.warriorAchievements = [];
  }
  level() {
    return this.warriorLevel;
  }
  rank() {
    return this.warriorRank;
  }
  experience() {
    return this.warriorExperience;
  }
  achievements() {
    return this.warriorAchievements;
  }

  training(event) {
    if (this.warriorLevel >= event[2]) {
      this.warriorAchievements.push(event[0]);
      this.warriorExperience += event[1];
      if (this.warriorExperience > 10000) {
        this.warriorExperience = 10000;
      }
      this.warriorLevel = Math.floor(this.warriorExperience / 100);
      this.warriorRank = RANKS[Math.floor(warriorExperience / 100 / 10)];
      return event[0];
    } else {
      return "Not strong enough";
    }
  }

  battle(enemy_level) {
    if (enemy_level < 1 || enemy_level > 100) {
      return "Invalid level";
    }
    if (enemy_level === this.warriorLevel) {
      this.warriorExperience += 10;
      return "A good fight";
    }
    if (enemy_level === this.warriorLevel - 1) {
      this.warriorExperience += 5;
      return "A good fight";
    }
    if (enemy_level < this.warriorLevel - 1) {
      this.warriorExperience += 0;
      return "Easy fight";
    }
    if (
      enemy_level - this.warriorLevel >= 5 &&
      this.warriorRank !== RANKS[Math.floor(enemy_level / 10)]
    ) {
      return "You've been defeated";
    }
    this.warriorExperience +=
      20 *
      (enemy_level - this.warriorLevel) *
      (enemy_level - this.warriorLevel);
    if (this.warriorExperience > 10000) {
      this.warriorExperience = 10000;
    }
    return "An intense fight";
  }
}
