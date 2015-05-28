'use strict';

var AVLTree = require('binary-search-tree').AVLTree;

module.exports = {
    contentContainer: function(angular) {
        angular.module('fsCms').service('contentContainer', [function () {
            var self = this,
                tree = new AVLTree({
                    unique: true,
                    compareKeys: function(a, b) {
                        return a.compare(b);
                    }
                }),
                ItemNumber = function(number) {
                    var itNum = this,
                        copy = function() {
                            return new ItemNumber(itNum.asString());
                        },
                        asString = function () {
                            var s = '';
                            for (var n in itNum.itemNumber) {
                                if (n !== 'last') {
                                    s = s + itNum.itemNumber[n];
                                    if (itNum.length() > 1 && n !== itNum.itemNumber.last) {
                                        s = s + '.';
                                    }
                                }
                            }
                            return s;
                        },
                        numberArray = number.split('.');

                    itNum.itemNumber = {};
                    itNum.asString = asString;

                    for (var n in numberArray) {
                        itNum.itemNumber[n + ''] = parseInt(numberArray[n]);
                    }
                    itNum.itemNumber.last = (numberArray.length - 1) + '';

                    itNum.newNumber = {
                        after: function() {
                            var newNumber = copy();
                            newNumber.itemNumber[newNumber.itemNumber.last]++;
                            return newNumber;
                        },
                        child: function() {
                            var newNumber = copy();
                            var last = (parseInt(itNum.itemNumber.last) + 1);
                            newNumber.itemNumber[last] = '0';
                            newNumber.itemNumber.last = last;
                            return newNumber;
                        }
                    };

                    itNum.action = {
                        down: function() {
                            var nextNumber = copy();
                            nextNumber.itemNumber[nextNumber.itemNumber.last]++;
                            var next = tree.search(nextNumber)[0];
                            if (next) {
                                self.current = nextNumber;
                                return true;
                            }
                        },
                        up: function() {
                            var nextNumber = copy();
                            if (nextNumber.itemNumber[nextNumber.itemNumber.last] > 0) {
                                nextNumber.itemNumber[nextNumber.itemNumber.last]--;
                                self.current = nextNumber;
                                return true;
                            }
                        },
                        left: function() {
                            var nextNumber = copy();
                            if (nextNumber.length() > 1) {
                                nextNumber.deleteLast();
                                self.current = nextNumber
                                return true;
                            }
                        },
                        right: function() {
                            var item = tree.search(self.current)[0];
                            if (item.children) {
                                self.current = new ItemNumber(item.children[0].itemNumber);
                                return true;
                            }
                        }
                    };

                    itNum.deleteLast = function() {
                        delete itNum.itemNumber[itNum.itemNumber.last];
                        itNum.itemNumber.last = parseInt(itNum.itemNumber.last) - 1;
                        numberArray.pop();
                    };

                    itNum.nextChapterFirstNumber = function() {
                        var number = copy(),
                            length = Object.keys(number).length,
                            beforeLast = length > 1 ? length - 2 : length;
                        if (length > 1) {
                            delete number.itemNumber[number.itemNumber.last];
                            number.itemNumber[beforeLast]++;
                            delete number.itemNumber[beforeLast];
                        } else {
                            number.itemNumber[number.itemNumber.last]++;
                        }
                        return number;
                    };

                    itNum.compare = function(otherNumber) {
                        return itNum.asString().localeCompare(otherNumber.asString());
                    };

                    itNum.length = function() {
                        return numberArray.length;
                    }
                },
                topLevel = function() {
                    var result = [],
                        num = 0,
                        item = tree.search(new ItemNumber(num + ''))[0];
                    while(item) {
                        result.push(item);
                        num++;
                        item = tree.search(new ItemNumber(num + ''))[0];
                    }
                    return result;
                },
                insert = function(doc) {
                    console.log('inserting to tree... ' + doc.itemNumber);
                    tree.insert(new ItemNumber(doc.itemNumber), doc);
                    for (var c in doc.children) {
                        doc.children[c].parent = doc;
                        insert(doc.children[c]);
                    }
                },
                init = function(doc) {
                    self.current = new ItemNumber(doc[0].itemNumber);
                    for (var d in doc) {
                        insert(doc[d]);
                    }
                };

            self.init = function(doc) {
                init(doc, self);
            };

            self.currentItem = function() {
                return tree.search(self.current)[0];
            };

            self.topLevel = topLevel;

            self.action = function(action) {
                return self.current.action[action] ? self.current.action[action]() : false;
            };
        }]);
    }
};