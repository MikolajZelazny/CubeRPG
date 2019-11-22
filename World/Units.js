class Infantry {
    constructor (HitPoints, Damage, CritChance, Speed, Amount) {
        this.HP = HitPoints
        this.Dmg = Damage
        this.CC = CritChance // Max 10
        this.Speed = Speed
        this.Amount = Amount
    }
}

class Boss {
    constructor (HitPoints, Damage, CritChance, Speed, Type, Size) {
        this.HP = HitPoints
        this.Dmg = Damage
        this.CC = CritChance
        this.Speed = Speed
        this.Type = Type
        this.Size = Size
    }
}
// Other class for boss with many same atributs or one class for everything what has HP,DMGCC...
