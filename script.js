let bouttonMenu = document.getElementsByClassName("bx-menu")[0];
const blockMenu = document.querySelector("header nav");
const listMenu = document.querySelectorAll("header nav ul li a");
const nextBoutton = document.querySelector(".next-icon");
const aboutDefilement = document.querySelector(".hero  .hero-content")
const previewBoutton = document.querySelector(".preview-icon");
const precedent = document.querySelector(".precedent");
const suivant = document.querySelector(".suivant")
const itemAbout = document.querySelector(".itemAbout");
const serviceMobileIcon = document.querySelector(".titreIcon")
// const showVisibility = document.querySelector(".showVisibility")
const itemShow = document.querySelectorAll(".item-show")



bouttonMenu.addEventListener("click", function ToggleMenu() {
    
    blockMenu.classList.toggle("active")
    if (blockMenu.classList.contains("active")) {
        bouttonMenu.classList.remove('bx-menu')
        bouttonMenu.classList.add('bx-x')
    } else {
        bouttonMenu.classList.remove("bx-x");
        bouttonMenu.classList.add("bx-menu")
    }
})


listMenu.forEach((item)=>{
        item.addEventListener("click",()=>{
        bouttonMenu.classList.remove("bx-x");
        bouttonMenu.classList.add("bx-menu")
        blockMenu.classList.remove("active");
    })
})

function getItemAboutWidth() { //pour mettre à jour la 
                               //largeur du itemabout à chaque au cas 
                               // de changment de la taille de l'écran                         
    return itemAbout.offsetWidth
} 

nextBoutton.addEventListener("click", ()=>{
    aboutDefilement.scrollBy({left:getItemAboutWidth()})
    
})

previewBoutton.addEventListener("click", ()=>{
    aboutDefilement.scrollBy({left:-getItemAboutWidth()})
})


suivant.addEventListener("click", ()=> {
    aboutDefilement.scrollBy({left:getItemAboutWidth()})
})


precedent.addEventListener("click", ()=> {
    aboutDefilement.scrollBy({left:-getItemAboutWidth()})
} )




itemShow.forEach((oneService)=>{

    const contenu = oneService.querySelector(".item")
    const bouton = oneService.querySelector(".bx-chevron-down")
    const iconMobile = oneService.querySelector(".showVisibility")
    let readMoreText = oneService.querySelector(".readMore")
    readMoreText.textContent="En savoir plus"



    bouton.addEventListener("click", ()=>{

        contenu.classList.toggle("show")
        bouton.classList.toggle("show")
        iconMobile.classList.toggle("drop")


        if (bouton.classList.contains("show")) {
        
            readMoreText.textContent="Voir moins"
            
        } else {
            
           readMoreText.textContent="En savoir plus"
        }

        })


} )
       


