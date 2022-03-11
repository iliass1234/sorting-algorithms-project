const body = document.body;
body.style = 'margin:0; font-family: monospace;'

function appendHeadTagElements()
{
    let meta1 = document.createElement('meta');
    let meta2 = document.createElement('meta');
    let meta3 = document.createElement('meta');

    let title = document.createElement('title');

    title.innerText= 'sorting'

    meta1.setAttribute('charset' , 'UTF-8');
    meta2.setAttribute('http-equiv' , 'X-UA-compatible')
    meta2.setAttribute('content' , 'IE=edge')
    meta3.setAttribute('name' , 'viewport')
    meta3.setAttribute('content' , 'width=device-width, initial-scale=1.0');

        document.head.append(meta1, meta2, meta3)
        
}
appendHeadTagElements();
function appendHeaderElements()
{
    let header = document.createElement('header')
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    
    
    div1.setAttribute('id', 'toggles');
    div2.setAttribute('id' ,'sort-types')

    div1.style = 'padding: 0px 10px; display:flex; flex: 1 1 200px; align-items: center; background-color: transparent; height: 100%; min-width: 200px; max-width: 600px;';
    div2.style = 'display:flex; flex: 1 1 200px; align-items: center; background-color: transparent; height: 100%; min-width: 200px; max-width: 600px;';
    header.setAttribute('id', 'header');
    header.style = 'width: 100%; height: 60px; background-color: #333; display:flex; align-items: center; justify-content:center;';

    header.append(div1,div2);
    document.body.appendChild(header);
}
appendHeaderElements();
function advanceTogglesDiv()
{
    let toggles = document.querySelector('#toggles');
    let sortSection = document.querySelector('#sort-types')

    let randomArrayBtn = document.createElement('button')
    randomArrayBtn.setAttribute('id', 'new-array-btn')
    randomArrayBtn.innerText = 'newArray'
    randomArrayBtn.style = 'color: white; background-color: #4455ff; border: none; padding: 7px;'

    let toggleInputTitle = document.createElement('span')
    toggleInputTitle.innerText = 'array length:'
    toggleInputTitle.style = 'color: white; font-size: 14px;'

    let toggleInput = document.createElement('input')
    toggleInput.setAttribute('type', 'range');
    toggleInput.setAttribute('min', '1');
    toggles.append(toggleInputTitle, toggleInput, randomArrayBtn)
}
advanceTogglesDiv();

function advaneSortTypesDiv(){
    let sortSection = document.querySelector('#sort-types');
    let sorts = ['Bubble','Selection','heap','quick','merge']

    sorts.forEach(sortName =>{  
        let sort = document.createElement('p');
        sort.setAttribute('id',`${sortName}-sort`)
        sort.style = 'flex: 1 1 20px;font-size: 17px; background-color: transparent; border: none; padding: 10px;color: white;'
        sort.innerText = `${sortName}Sort`
        sortSection.append(sort)
    })

}

advaneSortTypesDiv()

function generateArrayScene()
{
    let sceneSection = document.createElement('section');
    sceneSection.setAttribute('id','scene-section');
    sceneSection.style = 'margin-top: 20px; display: flex;justify-content: center; width: 100%;height: fit-content;'

    let scene = document.createElement('div');
    scene.setAttribute('id', 'scene');
    scene.style = 'margin: 0px 5px; display: flex; justify-content:center;gap:2px; flex: 1 1 100px; min-width: 100px; max-width: 1000px; height: 400px; background-color: transparent;';

    sceneSection.appendChild(scene);
    body.appendChild(sceneSection);
}
generateArrayScene()
function generateArrayEntities(num){
    let arrayScene = document.querySelector('#scene');
    arrayScene.innerText = ''


    let array = [];
    let maxHeight = 400;

    
    for (let i = 0; i < num; i++) {
        array.push(Math.floor((Math.random()*100)+1));
    }
    array.forEach(element => {
        // variables to make code more clear ;


        setTimeout(() => {   
            
            
            let normal = element/100;
            let barHeight = normal*maxHeight;
            if (element == 1) { barHeight+=11} 
            else if (element < 20) { barHeight+=10}
            
            
            let holder = document.createElement('div');
            holder.style = ''
            
            let bar = document.createElement('div');
            bar.style = 'background-color: blue; height: 100%;'
            
            let h5 = document.createElement('h5');
            h5.style = 'margin: 0px;'
            h5.textContent = element; 
            
            holder.append(h5, bar);
            holder.style = `display: flex; flex-direction: column; gap: 1px; flex: 1 1 20px; height:${barHeight}px ;max-width: 30px;margin:0px;`;
            arrayScene.appendChild(holder)
            
        }, 0);

    })

}

let rangeToggles = document.querySelector('#toggles > input');
let newArrayBtn = document.querySelector('#new-array-btn');

generateArrayEntities(50);

rangeToggles.onchange  = function(){
        generateArrayEntities(Number(rangeToggles.value))
}
rangeToggles.oninput  = function(){
        generateArrayEntities(Number(rangeToggles.value))
}


newArrayBtn.onclick = function(){generateArrayEntities(Number(rangeToggles.value))}