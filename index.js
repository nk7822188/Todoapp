let user = [];
let flag ;
function toggle() {
    var blur = document.querySelector(".row");
    blur.classList.toggle("active");
    var popup = document.querySelector("#popup");
    popup.classList.toggle("active");
}
function toggles(val) {
    if( val !== false)
    {
        let ele = Number(val.parentNode.parentNode.id);
        let blur = document.querySelector(".row");
        blur.classList.toggle("active");
        let popup = document.querySelector("#popupAdditem");
        popup.classList.toggle("active");
        flag = ele;
    }
    else
    {
        let blur = document.querySelector(".row");
        blur.classList.toggle("active");
        let popup = document.querySelector("#popupAdditem");
        popup.classList.toggle("active");
    }
}
function add()
{
    const head = document.querySelector('#head').value;
    if(head !== "")
    {
        let todo = 
        {
            title : head,
            id : Date.now()
        }
        user.push(todo);
        console.log(user);
        const empty = document.querySelector('.noTodo');
        empty.style.display = 'none';
    }
    else
    {
        window.alert("Enter Value");
    }
    toggle();
    cards();
}
function cards()
{
    let val = document.createElement('div');
    let card = document.querySelector('.card');
    val.setAttribute('class' , 'parts');
    for(let index =0; index < user.length; index++)
    {
        let fun = user[index];
        val.setAttribute('id' , fun.id);
        val.innerHTML = `<p class="head-para"> ${fun.title} </p>
                         <hr class="hr">
                         <div class="subTitle-div"></div>
                         <br>
                         <div class="button-div">
                         <button onclick="deleteCard(this)"><i class="fas fa-trash-alt" id="trash"></i></button>
                         <button onclick="toggles(this)"><i class="fas fa-plus-circle" id="plus"></i></button>
                         </div>`;
        card.appendChild(val);
    }
}
function addSubTitle(sub_title)
{
    let neer = document.querySelector('#subTitle').value;
    let card = document.querySelector('.card').children;
    for(let index = 0; index < user.length; index++)
    {
        let root1 = card[index];
        let root = root1.children[2];
        let val = user[index];
        if(val.id === flag)
        {
            if(neer !== "")
            {
                let outer = document.createElement('div');
                outer.setAttribute('class' , 'outer');
                outer.setAttribute('id' , flag+1);
                outer.innerHTML=`<p class="s-h-p">${neer}</p>
                                <p class="mark-done" onclick="markDone(this)">Mark Done</p>`;
                root.appendChild(outer);
            }
            else
            {
                window.alert("Enter some Value");
            }
            break;
        }
    }
    toggles(false);
}
function deleteCard(th)
{
    let temp = th.parentNode.parentNode;
    
    const thl = Number(th.parentNode.parentNode.id);
    
    for(let index = 0; index < user.length; index++)
    {
        let val = user[index];
        if(val.id === thl)
        {
            user.splice(index , 1);
            break;
        }
    }
    temp.remove(temp);
    if(user.length == 0)
    {
      const empty = document.querySelector('.noTodo');
      empty.style.display = 'block';
    }
}
function markDone(mark)
{
    let val = mark.parentNode;
    let done = mark.parentNode.children[0];
    let done1 = mark.parentNode.children[1];
    const ID = Number(val.id) - 1;
    for(let index = 0; index < user.length; index++)
    {
        let val = user[index];
        if(val.id === ID)
        {
            done1.style.display = 'none';
            done.style.color = 'orangered';
            done.style.textDecoration = 'line-through';
            done.style.textDecorationColor = 'orangered';
            break;
        }
    }
}