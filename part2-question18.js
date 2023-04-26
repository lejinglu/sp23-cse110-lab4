function seetime() { 
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(seetime,1000);