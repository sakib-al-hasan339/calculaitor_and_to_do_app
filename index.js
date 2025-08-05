
// CALCULAITER
//event function

function clickFunction(num){
  let calInput = document.getElementById('calInput').value +=num
}
// CALCULAITIONFUNCTION
function calculateFunction(){
  let result = eval(document.getElementById('calInput').value)
  document.getElementById('calInput').value = result


  
}
// RESETfUNCTION
function clearFunction(){
  document.getElementById('calInput').value =''
}
// DELETEFUNCTION
function deleteFunction(){
  let calDelete = document.getElementById('calInput')
  calDelete.value = calDelete.value.slice(0,-1)
}


// new projecte



let itemsul = document.getElementById('items')
let removeFrchild = document.querySelector('.FirstChild')
let addInput = document.getElementById('addInput')
let addButton = document.getElementById('addButton')

addButton.addEventListener('click',function(){

removeFrchild.remove()




  let createLi = document.createElement('li')
  let createDiv = document.createElement('div')
  let createnewDiv = document.createElement('div')
  let createDeleteButton = document.createElement('button')
  let createPtag = document.createElement('p')

let imageDiv = document.createElement('div')
createnewDiv.style.display = 'flex'
createnewDiv.style.gap = '10px'
createnewDiv.style.justifyContent = 'center'
createnewDiv.style.alignItems = 'center'






// image

let result = addInput.value
let mainResult = result.slice(0,2).toUpperCase()
imageDiv.append(mainResult)
createnewDiv.append(imageDiv)




// value

  createDeleteButton.textContent = 'Delete'
  createPtag.textContent = addInput.value
// className
createDiv.classList.add('nameMaintenDiv')
imageDiv.classList.add('imageDiv')
// appned

createnewDiv.append(createPtag)
createDiv.append(createnewDiv)
  createDiv.append(createDeleteButton)
  createLi.append(createDiv)
  itemsul.append(createLi)




  createDeleteButton.addEventListener('click', function() {
        createLi.remove(); 
    });

  addInput.value = ''

})
