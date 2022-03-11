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
    header.style = 'width: 100%; height: 60px; background-color: #333; display:flex;  align-items: center; justify-content:center;';

    header.append(div1,div2);
    document.body.appendChild(header);
}
appendHeaderElements();
function advanceTogglesDiv()
{
    let toggles = document.querySelector('#toggles');
    let sortSection = document.querySelector('#sort-types')

    let randomArrayBtn = document.createElement('button')
    randomArrayBtn.setAttribute('id', 'random-btn')
    randomArrayBtn.innerText = 'randomize'
    randomArrayBtn.style = 'color: white; background-color: #4455ff; border: none; padding: 7px;'

    let toggleInputTitle = document.createElement('span')
    toggleInputTitle.innerText = 'array length:'
    toggleInputTitle.style = 'color: white; font-size: 14px;'

    let toggleInput = document.createElement('input')
    toggleInput.setAttribute('type', 'range')
    toggles.append(toggleInputTitle, toggleInput, randomArrayBtn)
}
advanceTogglesDiv();

function generateArrayScene()
{
    let sceneSection = document.createElement('section');
    sceneSection.setAttribute('id','scene-section');
    sceneSection.style = 'margin-top: 20px; display: flex;justify-content: center; width: 100%;height: fit-content;'

    let scene = document.createElement('div');
    scene.setAttribute('id', 'scene');
    scene.style = 'margin: 0px 5px; display: flex; justify-content:center;gap:2px; flex: 1 1 100px; min-width: 100px; max-width: 2000px; height: 400px; background-color: black;';

    sceneSection.appendChild(scene);
    body.appendChild(sceneSection);
}
generateArrayScene()
function generateArrayEntities(num){
    let arrayScene = document.querySelector('#scene');
    let array = [];
    let maxHeight = 400;


    for (let i = 0; i < num; i++) {
        array.push((Math.random()*100));
    }
    array.forEach(element => {
        // variables to make code more clear ;

        let createdDiv = document.createElement('div');
        let normal = element/100;
        let divHeight = normal*maxHeight;

        createdDiv.style = `background-color: blue; flex: 1 1 20px; height:${divHeight}px ;max-width: 30px;`;
        arrayScene.appendChild(createdDiv)


    })

}

generateArrayEntities(16)
