class Character {
  constructor({
    characterId = 'Not provided',
    nickname = 'Not provided',
    image = 'Not provided',
    description = 'Not provided',
    superpowers = [],
    role = 'Not provided',
  }) {
    this.characterId = characterId;
    this.nickname = nickname;
    this.image = image;
    this.description = description;
    this.superpowers = superpowers;
    this.role = role;
  }
}

module.exports = Character;
