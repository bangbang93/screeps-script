/**
 * Created by bangbang93 on 2016/11/24.
 */
'use strict';
module.exports = function () {
    Object.keys(Memory.creeps).forEach((name)=> {
      if(!Game.creeps[name]) {
        delete Memory.creeps[name];
        console.log('Clearing non-existing creep memory:', name);
      }
    });
};