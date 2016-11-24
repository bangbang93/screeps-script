'use strict';
const RoleMiner = require('./role.miner');
const RoleUpgrader = require('./role.upgrader');
const ModuleCleanup = require('./module.clearnup');

exports.loop = function () {
  ModuleCleanup();
  let creeps = Object.keys(Game.creeps);
  creeps.forEach((creep)=>{
    creep = Game.creeps[creep];
    if (creep.memory['role'] == 'miner'){
      RoleMiner.run(creep)
    }
    if (creep.memory['role'] == 'upgrader'){
      RoleUpgrader.run(creep);
    }
  });
  // if (Game.spawns['home'].energy > 200){
  //   Game.spawns['home'].createCreep([WORK, MOVE, CARRY], 'upgrader' + Math.random(), {role: 'upgrader'});
  // }
};

