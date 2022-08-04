console.log("hello ");

const toolbox = {
    'kind': 'flyoutToolbox',
    'contents': [
      {
        'kind': 'block',
        'type': 'math_number'            
      }
    ]
  }

  var workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    scrollbars: false,
  });      

  document.querySelector('#test').addEventListener('click', function(event){
    execute(event, workspace);
  })

  function execute(event, workspace) {      
    var code = "5 * " + Blockly.JavaScript.workspaceToCode(workspace);
    var resultContent = document.getElementById("result");
    resultContent.innerHTML = eval(code);      
  }   