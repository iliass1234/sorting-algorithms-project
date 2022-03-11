let body = document.body;
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
    meta3.setAttribute('content' , 'width=device-width, inial-scale=1.0');

        document.head.append(meta1, meta2, meta3)
        
}

appendHeadTagElements();

function appendBodyElements()
{
    let header = document.createElement('header');
    header.setAttribute('id', 'header');

    
}

appendBodyElements()




