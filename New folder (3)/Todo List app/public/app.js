var removeSVG = '<svg class=fill enable-background="new 0 0 1000 1000"version=1.1 viewBox="0 0 1000 1000"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata><g><path class=fill d="M167.2,316v607.6c0,36.7,29.7,66.4,66.4,66.4h534.8c36.7,0,66.4-29.7,66.4-66.4V316H167.2L167.2,316z M348.5,866.3h-59.8V434.7h59.8V866.3L348.5,866.3z M469.2,866.3h-59.8V434.7h59.8V866.3L469.2,866.3z M590.4,866.3h-59.8V434.7h59.8V866.3L590.4,866.3z M711.1,866.3h-59.8V434.7h59.8V866.3L711.1,866.3z M827.4,132.2H720.6V76.4c0-36.7-29.7-66.4-66.4-66.4H364.1c-36.7,0-66.4,29.7-66.4,66.4v55.8H172.5c-36.7,0-66.5,29.7-66.5,66.4v54.3h787.9v-54.3C893.9,162,864.2,132.2,827.4,132.2L827.4,132.2z M660.2,132.6H357.4V71.7h302.8V132.6L660.2,132.6z"/></g></svg>';
var completeSVG = '<svg class=fill enable-background="new 0 0 1000 1000"version=1.1 viewBox="0 0 1000 1000"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><metadata>Svg Vector Icons : http://www.onlinewebfonts.com/icon</metadata><g><path d="M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10z M500,914.6c-228.6,0-414.6-186-414.6-414.6S271.4,85.4,500,85.4c228.6,0,414.6,186,414.6,414.6S728.6,914.6,500,914.6z"/><path d=M673.7,309L405.6,631.2L266.4,501.9c-15.3-14.2-39.1-13.3-53.3,2c-14.2,15.3-13.3,39.1,2,53.3l168.4,156.4c7,6.5,16.2,10.1,25.7,10.1c0.8,0,1.6,0,2.4-0.1c10.3-0.7,19.9-5.6,26.6-13.5l293.6-352.8c13.3-16,11.1-39.8-4.9-53.1C710.8,290.8,687.1,293,673.7,309z /></g></svg>';



document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if(value) {addItemTodo(value);
        document.getElementById('item').value = '';
    }

});
    
function removeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}

function completeItem(){
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text) {
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    complete.addEventListener('click', completeItem);

buttons.appendChild(remove);
buttons.appendChild(complete);
item.appendChild(buttons); 

list.insertBefore(item, list.childNodes[0]);

}

// complete.addEventListener('click', completeItem);

