var React = require("react")

function default_client_render(props,elemid,param){
  React.render(React.createElement(this,props),document.getElementById(elemid))
}

window.reaxt_render = function(module,submodule,props,param){
  module = require("./../../components/"+module)
  submodule = (submodule) ? module[submodule] :module
  submodule.reaxt_client_render = submodule.reaxt_client_render || default_client_render
  return function(elemid){ 
    submodule.reaxt_client_render(props,elemid,param)
  }
}
