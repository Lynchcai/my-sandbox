let sandboxes_info
let sandboxes_container = document.querySelector('.sandboxes_container')
window
  .fetch('sandbox-menu/sandboxes.json')
  .then(function(u) { return u.json(); })
  .then(function(json) { sandboxes_info = json; })

const check_json = ()=>{
    setTimeout(
        ()=>{
            if (sandboxes_info == null) {
                check_json()
                console.error("Json information not loaded, retry in 500ms..");
            }
            else{
                for (let i = 0; i < sandboxes_info.length; i++) {
                    // Image
                    const img = document.createElement('img')
                    img.setAttribute('src', sandboxes_info[i].sandbox_img_url)
                    
                    // Set number of sandbox
                    let num = i + 1
                    if (num < 10) {
                        num = `0${num}`
                    }

                    // Sandbox Container
                    const sandbox = document.createElement('a')
                    sandbox.setAttribute('href', `../sandbox-${num}/index.html`)
                    sandbox.classList.add('sandbox_container')
                    sandboxes_info[num]

                    // AppendChild
                    sandboxes_container.appendChild(sandbox)
                    sandbox.appendChild(img)
                }
            }
        }, 500
    )
}
check_json()