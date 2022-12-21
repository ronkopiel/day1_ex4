function handleClick() {
    console.log('Elements Clicked');
    ContactMe.style.color = 'red';
    PlacesILove.style.color = 'green';
}

function delayHandleClick() {
    setTimeout(handleClick, 3000);
}
function toggleDarkMode() {
        let flag = document.getElementById("DarkMode").value;
        if (flag == 'OFF' ) {
            document.getElementById("DarkMode").value = 'ON';
            document.body.setAttribute('class', 'dark-mode');
            return;
        }
        else {
            document.getElementById("DarkMode").value = 'OFF';
            document.body.setAttribute('class', 'light-mode');
        }
}