/**
 * Created by bangbang93 on 2016/11/24.
 */
'use strict';
exports.run = function (creep) {
  if(creep.carry.energy < creep.carryCapacity) {
    let sources = creep.room.find(FIND_SOURCES);
    if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
  }
  else {
    if(creep.transfer(Game.spawns['home'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(Game.spawns['home']);
    }
  }
};