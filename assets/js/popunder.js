window.popunder.addEventListener('mousedown', function() {
        // should create a pop-under
        window.postMessage(1, document.location)
        window.postMessage(2, document.location)
    });

    window.popupblocker.addEventListener('mousedown', function() {
        // should open 10 popups! very annoying!
        for(var i=0; i<10; i++){
            window.postMessage(1, document.location);
        }
    });

    window.addEventListener("message", function(a) {
        if(a.data==1) {
            // open a new, sample popup
            window.open("about:blank","_blank", "width=638,height=750,left=642,top=22,status=0,location=0,toolbar=0,menubar=0,resizable=1,scrollbars=1");   
        } 
        if(a.data==2) {
            // open a new tab and close it again. places focus back on original frame, transforming the popup into its final form.
            tab = window.open("about:blank","_blank");   
            setTimeout(function() {
                tab.close();
            },100)
        } 
    });
