
// Made with PenguinBuilder 2.6
// use PenguinBuilder at "https://chickencuber.github.io/PenguinBuilder/"
(function(Scratch) {
  const blocks = [];
  const vars = {};
  const menus = {};

  

  class Extension {
    getInfo() {
      return {
        "id": "python",
        "name": "python",
        "color1": "#ffba24",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
blocks.push({
  opcode: "python_Block_python-block",
  blockType: Scratch.BlockType.COMMAND,
  text: "run python [input1]",
  arguments: {
      "input1": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: ``
    },

  },
  disableMonitor: true
});
Extension.prototype["python_Block_python-block"] = function(args, util) {
  const localVars = {};
    return ;
};


blocks.push({
  opcode: "python_Block_python-reporter",
  blockType: Scratch.BlockType.REPORTER,
  text: "run python [input2]",
  arguments: {
      "input2": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: ``
    },

  },
  disableMonitor: true
});
Extension.prototype["python_Block_python-reporter"] = function(args, util) {
  const localVars = {};
    return ;
};


blocks.push({
  opcode: "python_Block_python-boolean",
  blockType: Scratch.BlockType.BOOLEAN,
  text: "run python [input3]",
  arguments: {
      "input3": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: ``
    },

  },
  disableMonitor: true
});
Extension.prototype["python_Block_python-boolean"] = function(args, util) {
  const localVars = {};
    return ;
};



  Scratch.extensions.register(new Extension());
})(Scratch);
