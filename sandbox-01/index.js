// Re usable part start here:
const $lc_before_after_container = document.querySelector('.lc_before_after_container')
const $lc_before_after_bar = $lc_before_after_container.querySelector('.lc_before_after_bar')
const $lc_before_after_img = $lc_before_after_container.querySelectorAll('.lc_before_after_img')

// Drag & Drop

// STEP 3 : USER move up -> Stop MouseUp & MouseMove EventListener
const bar_mouseup = (_event)=>{
    window.addEventListener(
        'mouseup', 
        bar_mouseup_function
    )
}
const bar_mouseup_function = (_event)=>{

    
    window.removeEventListener('mouseup', bar_mouseup_function)
    document.removeEventListener('mousemove', bar_mousemove_function)
}

// STEP 2 : USER move mouse -> Activate movement of the bar -> Activate MouseUp EventListener
const bar_mousemove = ()=>{
    bar_mouseup()
    document.addEventListener('mousemove', bar_mousemove_function)
}

// STEP 2.5 : Activate Movement of the bar & changing clip-path of img
const bar_mousemove_function = (_event)=>{
    const bounding = $lc_before_after_container.getBoundingClientRect()
    const cursorX = _event.clientX
    let cut_pos = (cursorX - bounding.x)-($lc_before_after_bar.offsetWidth/2)
    // if (cursorX < bounding.x) {
    //     cut_pos = 0 - $lc_before_after_bar.offsetWidth/2
    // }
    // else if(cursorX > (bounding.x + bounding.width)){
    //     cut_pos = bounding.width - $lc_before_after_bar.offsetWidth/2
    // }
    $lc_before_after_bar.style.transform = `translateX(${cut_pos}px)`
    $lc_before_after_img[0].style.clipPath = `polygon(0 0, ${cut_pos}px 0, ${cut_pos}px 100%, 0% 100%)`
    $lc_before_after_img[1].style.clipPath = `polygon(100% 0, ${cut_pos}px 0, ${cut_pos}px 100%, 100% 100%)`
}


// STEP 1 : USER press down his mouse on $bar
$lc_before_after_bar.addEventListener('mousedown', bar_mousemove)

// Re usable part end here