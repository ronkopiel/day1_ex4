function handleClick() {
    console.log('Elements Clicked');
    ContactMe.style.color = 'red';
    PlacesILove.style.color = 'green';
}

function delayHandleClick() {
    setTimeout(handleClick, 3000);
}
delayHandleClick();