const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeClasslist()
        panel.classList.add('active')
    })
})

const removeClasslist = () => {
    panels.forEach(panel => {
        
            panel.classList.remove('active')
        
    })
}