const body = document.body;
body.style.margin = '0'

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
function appendBodyElements()
{
    let header = document.createElement('header')
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    
    
    div1.setAttribute('id', 'toggles');
    div2.setAttribute('id' ,'sort-types')

    div1.style = 'padding: 0px 10px; display:flex; flex: 1 1 200px; align-items: center; background-color: green; height: 100%; min-width: 200px; max-width: 600px;';
    div2.style = 'display:flex; flex: 1 1 200px; align-items: center; background-color: red; height: 100%; min-width: 200px; max-width: 600px;';
    header.setAttribute('id', 'header');
    header.style = 'width: 100%; height: 60px; background-color: blue; display:flex;  align-items: center; justify-content:center;';

    header.append(div1,div2);
    document.body.appendChild(header);
    
}
appendBodyElements()
function advanceTogglesDiv()
{
    let toggles = document.querySelector('#toggles');
    toggles.style.backgroundColor = 'yellow';


    let randomArrayBtn = document.createElement('button')
    randomArrayBtn.setAttribute('id', 'random-btn')
    randomArrayBtn.innerText = 'randomize'

    let toggleInputTitle = document.createElement('span')
    toggleInputTitle.innerText = 'array length:'

    let toggleInput = document.createElement('input')
    toggleInput.setAttribute('type', 'range')
    toggles.append(toggleInputTitle, toggleInput, randomArrayBtn)
}
advanceTogglesDiv()


