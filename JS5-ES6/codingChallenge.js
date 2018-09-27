/*Town
    -structure for different els
    -print els reports 
    -Average age of parks
    -Name of park with more than 1000 trees
    -Total and average length of streets
    -Size classification of streets

Townelement
    -properties name and build year

Street
    -extends Townelement
    -properties: length

Park 
    -extends Townelement
    -properties: area, trees
    -calcTreeDensity
    */

class TownElement {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Street extends TownElement {
    constructor(name, buildYear, length) {
        super(name, buildYear);
        this.length = length;
    }

    sizeClass() {
        if (this.length >= 4) {
            return 'huge';
        } else if (this.length >= 2) {
            return 'big';
        } else if (this.length >= 1) {
            return 'normal';
        } else if (this.length >= 0.5) {
            return 'small';
        } else {
            return 'tiny';
        }
    }
}

class Park extends TownElement {
    constructor(name, buildYear, area, trees) {
        super(name, buildYear);
        this.area = area;
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
    constructor(parks = [], streets = []) {
        this.townElements = new Map([[1, parks], [2, streets]]);
    }

    addTownElements(...newEls) {
        newEls.forEach(cur => {
            if (typeof(cur) === 'Park') {
                this.townElements[1].push(cur);
            } else if (typeof(cur) === 'Street') {
                this.townElements[2].push(cur);
            }
        })
    }

    calcParksAverageAge() {
        const parks = this.townElements.get(1);
        const agesTotal = parks.reduce((ages, cur) => ages + cur.age(), 0);
        return [parks.length, agesTotal/parks.length];
    }

    findParkThousandTrees() {
        return this.townElements.get(1).find(el => el.trees > 1000);
    }

    calcStreetsAverageLength() {
        const streets = this.townElements.get(2);
        const totalLength = streets.reduce((lengths, cur) => lengths + cur.length, 0);
        return [streets.length, totalLength, totalLength/streets.length];
    }

    printReport() {
        console.log(`----- PARKS REPORT -----`);
        const [parks, averageAge] = this.calcParksAverageAge();
        console.log(`Our ${parks} parks have an average age of ${averageAge} years.`);
        this.townElements.get(1).forEach(el => console.log(`${el.name} has a tree density of ${el.treeDensity()} trees per square km.`));
        console.log(`${this.findParkThousandTrees().name} has more than 1,000 trees.`);

        console.log(`----- STREETS REPORT -----`);
        const [streets, totalLength, averageLength] = this.calcStreetsAverageLength();
        console.log(`Our ${streets} streets have a total length of ${totalLength} km, with an average of ${averageLength} km.`)
        this.townElements.get(2).forEach(el => console.log(`${el.name}, built in ${el.buildYear}, is a ${el.sizeClass()} street.`))
    }
}

//parks
const greenPark = new Park('Green Park', 1956, 0.8, 999);
const nationalPark = new Park('National Park', 1920, 3, 6200);
const oakPark = new Park('Oak Park', 1973, 0.9, 975);

//streets
const oceanAvenue = new Street('Ocean Avenue', 1999, 2.1);
const evergreenStreet = new Street('Evergreen Street', 2008, 0.6);
const fourthStreet = new Street('4th Street', 2015, 1);
const sunsetBoulervard = new Street('Sunset Boulevard', 1982, 4.2);

const parks = [greenPark, nationalPark, oakPark];
const streets = [oceanAvenue, evergreenStreet, fourthStreet, sunsetBoulervard];
new TownAdmin(parks, streets).printReport();
