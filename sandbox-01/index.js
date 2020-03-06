const $container = document.querySelector('.container')
const $bar = $container.querySelector('.bar')
const $img = $container.querySelectorAll('.img')

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
    const bounding = $container.getBoundingClientRect()
    const cursorX = _event.clientX
    const cut_pos = (cursorX - bounding.x)-($bar.offsetWidth/2)
    $bar.style.transform = `translateX(${cut_pos}px)`
    $img[0].style.clipPath = `polygon(0 0, ${cut_pos}px 0, ${cut_pos}px 100%, 0% 100%)`
    $img[1].style.clipPath = `polygon(100% 0, ${cut_pos}px 0, ${cut_pos}px 100%, 100% 100%)`
}


// STEP 1 : USER press down his mouse on $bar
$bar.addEventListener('mousedown', bar_mousemove)



