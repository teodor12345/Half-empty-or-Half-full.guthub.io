const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const precentage = document.getElementById('precentage')
const remained = document.getElementById('remained')



updateBigCup()


smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', ()=>highlightCups(idx))

    
})

function highlightCups(idx){

if(smallCups[idx].classList.contains('full')&& !smallCups
[idx].nextElementSibling.classList.contains('fill')){
   
    idx--
}




    smallCups.forEach((cup, idx2)=>{
        if(idx2 <=idx){

            cup.classList.add('full')

        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCpus = document.querySelectorAll('.cup-small.full').length
    const tottalCups = smallCups.length
    

    if (fullCpus===0){
        precentage.style.visibility ='hidden'
        precentage.style.height = 0
    }else{
        precentage.style.visibility ='visible'
        precentage.style.height =  `${fullCpus / tottalCups * 330}px`
        precentage.innerText = `${fullCpus / tottalCups * 100 }%`
    }

    if(fullCpus===tottalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0

    } else{
        remained.style.visibility = 'visible'
        liters.innerText = `${ 2-(250 * fullCpus / 1000)}L`
    }

}