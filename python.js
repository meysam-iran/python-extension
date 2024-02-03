
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
        "color1": "#25519738",
        "blocks": blocks,
        "menus": menus,
      }
    }
  }
  
blocks.push({
  opcode: "run-python",
  blockType: Scratch.BlockType.REPORTER,
  text: "run [input] in python",
  arguments: {
      "input": {
      type: Scratch.ArgumentType.STRING,
      defaultValue: ``
    },

  },
  disableMonitor: false
});
Extension.prototype["run-python"] = function(args, util) {
  const localVars = {};
  input = args.input
  import {PythonShell} from 'python-shell'
    return PythonShell.runString(
      input
    ) ;
};



  Scratch.extensions.register(new Extension());
})(Scratch);
