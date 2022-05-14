
window.onload = function(){
    const panels = document.querySelectorAll('.panel')
    panels.forEach(node=>{
        node.addEventListener('click',()=>{
            panels.forEach(node=>{
                node.classList.remove('active')
            })
            node.classList.add('active')
        })
    })
}
    