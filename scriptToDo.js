// var l = document.createElement('label')
// var myValue = document.createTextNode('CT Project')
// l.appendChild(myValue)
// document.querySelector('label').appendChild(l);

var ul = document.getElementById('list');
var li;
//var liAll;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItem);

function addItem(){
    //console.log('Add button was clicked')
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item == '') {
        alert('Please enter your target');
        return false;
    }
    else{
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        //label.setAttribute('for', 'item');
        
        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.hasChildNodes[0]);
        //li.className = 'visual';
        setTimeout(() => {
            li.className = 'visual';
        }, 1.5);
        input.value = '';
    }
}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) { //children[0] refers to the box in which tick would be visible
            ul.removeChild(li[index])
        }    
    }
    
}

function removeAllItem() {
    liAll = ul.children
    for (let index = 0; index < liAll.length; index++) {
        // const elementAll = liAll[index];
        while (liAll[index].children[0]) { //children[0] refers to the box in which tick would be visible
            ul.removeChild(liAll[index])
        }
    }
}