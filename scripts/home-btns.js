window.addEventListener('click', (ev)=>{
    // console.log(ev.target);
    if(ev.target.dataset.togBtn != null){
        // console.log(ev.target.classList);
        ev.target.classList.forEach(c =>{
            // console.log(c);
            if(c.match("off")){
                // console.log(`found you! (${c})`);
                let togOnOff = c.replace('off','on');
                // console.log(`'${c}'\t→\t '${togOnOff}'`);
                ev.target.classList.toggle(togOnOff);
                ev.target.classList.toggle(c);
            } else if(c.match("on")){
                // console.log(`found you! (${c})`);
                let togOnOff = c.replace('on','off');
                // console.log(`'${c}'\t→\t '${togOnOff}'`);
                ev.target.classList.toggle(togOnOff);
                ev.target.classList.toggle(c);
            }
        });
    }
})