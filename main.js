let value = document.getElementById('value');
let btns = document.querySelectorAll('.btn');
let count = 0;
btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click', (e)=>{
        console.log(e);
        const btnStlyes = e.currentTarget.classList;
        if (btnStlyes.contains('btn-increase')) {
            count++;
        }
        else if (btnStlyes.contains('btn-decrease')) {
            count--;
        }else{
            count = 0;
        }
        value.textContent =count;
        if (count>0) {
            value.style.color = 'midnightblue';
        }else if(count<0){
            value.style.color = 'green';
        }else{
            value.style.color = 'yellow';
        }
    })

})