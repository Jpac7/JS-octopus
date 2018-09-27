class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Street extends TownElement {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifySize() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        return classification.get(this.size);
    }
}

class Park extends TownElement {
    constructor(name, buildYear, area, trees) {
        super(name, buildYear);
        this.area = area; // Km2
        this.trees = trees;
    }

    treeDensity() {
        return this.trees/this.area;
    }

    age() {
        return new Date().getFullYear() - this.buildYear;
    }
}

class TownAdmin {
    constructor() {
        this.parks = [];
        this.streets = [];
    }

    addTownElements(newEls) {
        newEls.forEach(cur => {            
            const type = cur.constructor.name;
            if (type === 'Park') {
                this.parks.push(cur);
            } else if (type === 'Street') {
                this.streets.push(cur);
            }
        });        
        return this;
    }

    calcAverage(arr) {
        const total = arr.reduce((acc, cur) => acc + cur, 0);
        return [total, total / arr.length];
    }

    printParksReport() {
        console.log(`----- PARKS REPORT -----`);
        const [totalAge, avgAge] = this.calcAverage(this.parks.map(el => el.age()));
        console.log(`Our ${this.parks.length} parks have an average age of ${avgAge} years.`);
        this.parks.forEach(el => console.log(`${el.name} has a tree density of ${el.treeDensity()} trees per square km.`));
        console.log(`${parks.find(el => el.trees > 1000).name} has more than 1,000 trees.`);
        return this;
    }

    printStreetsReport() {
        console.log(`----- STREETS REPORT -----`);
        const [totalLength, avgLength] = this.calcAverage(this.streets.map(el => el.length));
        console.log(`Our ${this.streets.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`)
        this.streets.forEach(el => console.log(`${el.name}, built in ${el.buildYear}, is a ${el.classifySize()} street.`));
        return this;
    }
}

const parks = [new Park('Green Park', 1956, 0.8, 999),
                new Park('National Park', 1920, 3, 6200),
                new Park('Oak Park', 1973, 0.9, 975)];

const streets = [new Street('Ocean Avenue', 1999, 2.1, 4),
                    new Street('Evergreen Street', 2008, 0.6, 2),
                    new Street('4th Street', 2015, 1),
                    new Street('Sunset Boulevard', 1982, 4.2, 5)];

new TownAdmin().addTownElements([...parks, ...streets]).printParksReport().printStreetsReport();
