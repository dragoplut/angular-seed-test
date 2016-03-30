'use strict';

angular.module('myApp.services')

    .factory('MdArr', ['$q',
        function ($q) {

            /** Var's for multi dimensional array */

            var mdArr = [
                {id: 1, parentId: 0, title: 'Ukraine'}
            ];

            var level1 = [
                {title: 'Kiev'},
                {title: 'Odessa'},
                {title: 'Dnipropetrovsk'},
                {title: 'Lviv'},
                {title: 'Harkiv'},
                {title: 'Vinnytca'},
                {title: 'Zhitomyr'}
            ];

            var level2 = ['Main Book Shop', 'Book On Sofa', 'Ukrainian Books', 'ReadMe Shop', 'Root Of B', 'Knowledge On The Shelve'];

            var level3 = [];

            function lvl3Init(){
                for (var i = 1; i <= 50; i++){
                    level3.push('Book' + i);
                }
            }
            lvl3Init();

            var trueFalseSwitch = function (){
                return (Math.random() > 0.5);
            };

            /** Populate mdArr level1 */

            for (var i = 0; i < level1.length; i++){
                var rndm = (Math.random() * (999 - 9)) + 9;
                mdArr.push({
                    id: 10 + i,
                    parentId: 1,
                    title: level1[i].title,
                    visitors: rndm,
                    privateWriters: trueFalseSwitch()
                });
            }

            /** Populate mdArr level2 */

            for (var i =  0; i < level1.length; i++){
                for (var j = 0; j < level2.length; j++){
                    var rndm = (Math.random() * (999 - 9)) + 9;
                    mdArr.push({
                        id: 100 + ((i * level1.length) + j),
                        parentId: 10 + i,
                        title: level2[j],
                        events: {sale: trueFalseSwitch(), amount: rndm}
                    });
                }
            }

            /** Populate mdArr level3 */

            for (var i =  0; i < level1.length; i++){
                for (var j = 0; j < level2.length; j++){
                    for (var k =0; k < level3.length; k++){
                        var rndm = (Math.random() * (999 - 9)) + 9;
                        mdArr.push({
                            id: 1000 + k,
                            parentId: 100 + ((i * level1.length) + j),
                            title: level3[k],
                            available: trueFalseSwitch(),
                            price: rndm
                        });
                    }
                }
            }

            /**
             * Returns reversed array of item parents. Used to build "buttons block".
             * @param item
             * @returns {Array}
             */
            var getParents = function (item) {
                var stop = false;
                var parents = [];

                while (!stop){
                    if (item.parentId == 0){
                        stop = true;
                        break;
                    }

                    for (var i = 0; i < mdArr.length; i++){
                        if (mdArr[i].id == item.parentId){
                            parents.push(mdArr[i]);
                            item = mdArr[i];
                            break;
                        }
                    }
                }

                return parents.reverse();
            };

            var getMdArrGroup = function (id) {
                console.info('getMdArrGroup');
                var defer = $q.defer();

                var group = [];
                for (var i = 0; i < mdArr.length; i++){
                    if (mdArr[i].id == id){
                        group = mdArr[i];
                        break;
                    }
                }

                defer.resolve(group);

                return defer.promise;
            };

            var getMdArrGroups = function (parentId) {
                console.info('getMdArrGroups');
                var defer = $q.defer();

                var level = [];
                for (var i = 0; i < mdArr.length; i++){
                    if (mdArr[i].parentId == parentId){
                        level.push(mdArr[i]);
                    }
                }

                defer.resolve(level);

                return defer.promise;
            };


            return {
                getMdArrGroup: getMdArrGroup,
                getMdArrGroups: getMdArrGroups,
                getParents: getParents
            };
        }
    ]);