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
    
    header.setAttribute('id', 'header');
    header.setAttribute('style','width: 100%; height: 60px; background-color: red; display:flex;')
    div1.setAttribute('id', 'toggles');
    div2.setAttribute('id' ,'sort-types')

    header.append(div1,div2);
    document.body.appendChild(header);
    
}
appendBodyElements()





