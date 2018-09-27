'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TownElement = function TownElement(name, buildYear) {
    _classCallCheck(this, TownElement);

    this.name = name;
    this.buildYear = buildYear;
};

var Street = function (_TownElement) {
    _inherits(Street, _TownElement);

    function Street(name, buildYear, length) {
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

        _this.length = length;
        _this.size = size;
        return _this;
    }

    _createClass(Street, [{
        key: 'classifySize',
        value: function classifySize() {
            var classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            return classification.get(this.size);
        }
    }]);

    return Street;
}(TownElement);

var Park = function (_TownElement2) {
    _inherits(Park, _TownElement2);

    function Park(name, buildYear, area, trees) {
        _classCallCheck(this, Park);

        var _this2 = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

        _this2.area = area; // Km2
        _this2.trees = trees;
        return _this2;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            return this.trees / this.area;
        }
    }, {
        key: 'age',
        value: function age() {
            return new Date().getFullYear() - this.buildYear;
        }
    }]);

    return Park;
}(TownElement);

var TownAdmin = function () {
    function TownAdmin() {
        _classCallCheck(this, TownAdmin);

        this.parks = [];
        this.streets = [];
    }

    _createClass(TownAdmin, [{
        key: 'addTownElements',
        value: function addTownElements(newEls) {
            var _this3 = this;

            newEls.forEach(function (cur) {
                var type = cur.constructor.name;
                if (type === 'Park') {
                    _this3.parks.push(cur);
                } else if (type === 'Street') {
                    _this3.streets.push(cur);
                }
            });
            return this;
        }
    }, {
        key: 'calcAverage',
        value: function calcAverage(arr) {
            var total = arr.reduce(function (acc, cur) {
                return acc + cur;
            }, 0);
            return [total, total / arr.length];
        }
    }, {
        key: 'printParksReport',
        value: function printParksReport() {
            console.log('----- PARKS REPORT -----');

            var _calcAverage = this.calcAverage(this.parks.map(function (el) {
                return el.age();
            })),
                _calcAverage2 = _slicedToArray(_calcAverage, 2),
                totalAge = _calcAverage2[0],
                avgAge = _calcAverage2[1];

            console.log('Our ' + this.parks.length + ' parks have an average age of ' + avgAge + ' years.');
            this.parks.forEach(function (el) {
                return console.log(el.name + ' has a tree density of ' + el.treeDensity() + ' trees per square km.');
            });
            console.log(parks.find(function (el) {
                return el.trees > 1000;
            }).name + ' has more than 1,000 trees.');
            return this;
        }
    }, {
        key: 'printStreetsReport',
        value: function printStreetsReport() {
            console.log('----- STREETS REPORT -----');

            var _calcAverage3 = this.calcAverage(this.streets.map(function (el) {
                return el.length;
            })),
                _calcAverage4 = _slicedToArray(_calcAverage3, 2),
                totalLength = _calcAverage4[0],
                avgLength = _calcAverage4[1];

            console.log('Our ' + this.streets.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + avgLength + ' km.');
            this.streets.forEach(function (el) {
                return console.log(el.name + ', built in ' + el.buildYear + ', is a ' + el.classifySize() + ' street.');
            });
            return this;
        }
    }]);

    return TownAdmin;
}();

var parks = [new Park('Green Park', 1956, 0.8, 999), new Park('National Park', 1920, 3, 6200), new Park('Oak Park', 1973, 0.9, 975)];

var streets = [new Street('Ocean Avenue', 1999, 2.1, 4), new Street('Evergreen Street', 2008, 0.6, 2), new Street('4th Street', 2015, 1), new Street('Sunset Boulevard', 1982, 4.2, 5)];

new TownAdmin().addTownElements([].concat(parks, streets)).printParksReport().printStreetsReport();
