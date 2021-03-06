/**
 * A class to represent the base values of any stats that are modified by mods. All values should be represented as if
 * the character were capped out at 7* g12 but had no mods on.
 */
class BaseStats {
  /**
   * Constructor for the BaseStats class
   *
   * @param health The base health pool of the character
   * @param protection The base protection of the character
   * @param physDmg The physical damage of the character
   * @param specDmg The special damage of the character
   * @param physDmgPercent The percent of total offense that the character uses for physical damage (the rest is
   *  considered special damage)
   * @param speed The base speed of the character
   * @param armor The armor of the character
   * @param resistance The resistance of the character
   */
  constructor(health, protection, physDmg, specDmg, physDmgPercent, speed, armor, resistance) {
    this.health = health;
    this.protection = protection;
    this.offense = physDmg * physDmgPercent + specDmg * (1 - physDmgPercent);
    this.speed = speed;
    this.defense = (armor + resistance) / 2;

    this.physDmg = physDmg;
    this.specDmg = specDmg;
    this.physDmgPercent = physDmgPercent;

    this.armor = armor;
    this.resistance = resistance;
  }

  serialize() {
    let baseStatsObject = {};

    baseStatsObject.health = this.health;
    baseStatsObject.protection = this.protection;
    baseStatsObject.physDmg = this.physDmg;
    baseStatsObject.specDmg = this.specDmg;
    baseStatsObject.physDmgPercent = this.physDmgPercent;
    baseStatsObject.speed = this.speed;
    baseStatsObject.armor = this.armor;
    baseStatsObject.resistance = this.resistance;

    return baseStatsObject;
  }

  static deserialize(baseStatsJson) {
    return new BaseStats(
      baseStatsJson.health,
      baseStatsJson.protection,
      baseStatsJson.physDmg,
      baseStatsJson.specDmg,
      baseStatsJson.physDmgPercent,
      baseStatsJson.speed,
      baseStatsJson.armor,
      baseStatsJson.resistance
    );
  }
}

export default BaseStats;
