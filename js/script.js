let thickness = 10

for (let i=1; i<6; i++){
    const p = document.createElement('p');
    document.body.append(p);
    p.style.listStyleType = 'none';
    
    p.style.fontSize = `${thickness}px`;
    thickness += 7;

    const hue = 140+(10*i);
    p.style.background = `hsl(${hue}, 80%, 65%)`;
    console.log(hue);
    p.innerText = 'Rad ' + i;

    p.style.padding = '5px';
    p.style.textAlign = 'center';
    p.style.fontWeight = 'bold';
    p.style.color = 'rgb(110 110 247';
}

const container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.border = 'solid black 2px';
document.body.append(container);

const array = ['ett', 'två', 'tre','fyra', 'fem', 'sex','sju', 'åtta', 'nio', 'tio'];

for (let i=0; i<=2; i++){
    const ol = document.createElement('ol')
    container.append(ol);
    ol.style.display = 'flex';
    ol.style.flexDirection = 'column';
    ol.style.background = '#a8a8f0';
    ol.style.padding = '15px';
    ol.style.margin = '40px 0px 40px 0px';
    ol.style.width = '75px';

if (i == 0){
        for (let i=0; i<10; i++){
            const li = document.createElement('li');
            ol.append(li);
            li.style.listStyleType = 'none';
            li.style.display = 'flex';
            li.style.background = 'black';
            li.style.color = 'white';
            li.innerText = i;

            if ((i % 2) == 1){
            li.style.color = 'black';
            li.style.background = 'white';
            }
            if (i == 4){
                li.style.background = '#a8a8f0';
            }
        }
}
else if(i == 1){
    for (let i=9; i>=0; i--){
        const li = document.createElement('li');
        ol.append(li);
        li.style.listStyleType = 'none';
        li.style.textAlign = 'center';
        li.style.background = 'black';
        li.style.color = 'white';

        li.innerText = i;
        if((i % 2) == 1){
            li.style.color = 'black';
            li.style.background = 'white';
        }
        if (i == 8){
            li.style.background = '#a8a8f0';
        }
    }
}
else if (i == 2){
    for (let i=0; i<10; i++){
        const li = document.createElement('li');
        ol.append(li);
        li.style.listStyleType = 'none';
        li.style.textAlign = 'right';
        li.style.background = 'black';
        li.style.color = 'white';
    
        li.innerText = array[i];
        if ((i % 2) == 1){
            li.style.color = 'black';
            li.style.background = 'white';
            if(i == 5){
                li.style.background = '#a8a8f0';
            }
        }
    }
}
}



