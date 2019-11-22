
// Object properties, tworzenie w najdłuższy sposób.
var sawmill = {
    Level: 3,
    Area: "Dessert", // sawmill.Desert = -40% 
    Production: function() {
        // this.Level + this.Area(poperty) = earning
        // if (sawmill) return wood += earning
        // else if (stone_pit) return rock +=earnings
        // else if(no forest nearby) alert("No forest")
    },
    Name: "Sawmill" + this.Area
};

sawmill.Production(); // object.function (object+function)= M e t h o d 

// W ten sposób tworzone obiekty zapełniają pamięć roboączą wieloma podobnymi funkcjami

function ProductionBuildings (Type, Level, Area) {
    return {
        Type: "StonePit",
        Level: Level,
        Area: Area,
        Production: function() {
            // this.Level + this.Area(poperty) = earning
            // if (sawmill) return wood += earning
            // else if (stone_pit) return rock +=earnings
            // else if(no forest nearby) alert("No forest")
        },
        Name: productionBuildings.constructor.name + Area
    }
}

var stonePit1 = ProductionBuilding("StonePit", 2, "Jungle");

// Drugi sposób - tworzenie Klasy i obiektu który czeka na dziedziczenie

function ProductionBuildings2 (Type, Level, Area) {
        this.Type = Type,
        this.Level = Level,
        this.Area = Area,
        Production = function() {
            // this.Level + this.Area(poperty) = earning
            // if (sawmill) return wood += earning
            // else if (stone_pit) return rock +=earnings
            // else if(no forest nearby) alert("No forest")
        },
        Name = productionBuildings2.constructor.name + Area
    
}

var stonePit2 = new ProductionBuildings2("StonePit", 1, "Forest");

// Next Step:
// prototype oszczędzamy ilość funkcji w pamięci roboczej, (nie tworzą się 
// kolejne takie same przy każdym obiekcie)

// [class name].prototype.[function name] = true/false (for example)
// - Shared value for every single [class name] type

function ProductionBuildings3 (Type, Level, Area) {
    this.Type = Type,
    this.Level = Level,
    this.Area = Area,
    Name = productionBuilding.constructor.name + Area
}

ProductionBuildings3.prototype.Production = function() {
    // this.Level + this.Area(poperty) = earning
    // if (sawmill) return wood += earning
    // else if (stone_pit) return rock +=earnings
    // else if(no forest nearby) alert("No forest")
}



// Każdy obiekt dziedziczy z istniejącego zawsze "Object"
var brickyard = new ProductionBuildings3("Brickyard", 7, "Dessert")

// Łańcuch hierarchi:
Object.prototype
ProductionBuildings3.prototype
brickyard.bonus // Output: UncaughtType Error: brickyard.bonus is not a function
// Dzieje się tak gdyż na drodze Obiect ani ProductionBuildings3 nie została stworzona funkcja "bonus"


// ...
// Short Addition
// Extends quick remind:
class Human {
    constructor(name) {
    this.damage = damage
    this.distance = distance
    } 
}

class Archer extends Human { 
    constructor(name) {
        this.name = name
        this.distance = distance
    }
    LongBow(){
        this.distance += super.distance
        this.damage += super.damage
    }
}

// Or

Archer.prototype.ShortBow = function () {
    this.distance += SBdistance
    this.damage += SBdamage
}
