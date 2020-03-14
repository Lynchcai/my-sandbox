
let sandboxes_info
window
  .fetch('sandbox-menu/sandboxes.json')
  .then(function(u) { return u.json(); })
  .then(function(json) { sandboxes_info = json; })


const check_json = ()=>{
    setTimeout(
        ()=>{
            if (sandboxes_info == null) {
                check_json()
                console.error("Json information not loaded, retry in 100ms..");
            }
            console.log(sandboxes_info);
        }
    ), 500
}
check_json()