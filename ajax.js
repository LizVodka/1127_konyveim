class SajatAjax {
    constructor(){

    }

    getAjax(apivegpont, tomb, myCallback){
        tomb.splice(0,tomb.length);
        $.ajax({
            url: apivegpont, 
            type:"GET",
            success: function(result){
            result.forEach(element => {
                tomb.push(element);
            });
            myCallback(tomb);
        }});
    };

    postAjax(apivegpont,ujAdat){
        $.ajax({
            url: apivegpont, 
            type:"POST",
            data: ujAdat,
            success: function(result){
                console.log("sikerült");
            }
        })
    };
    
    deleteAjax(apivegpont,id){
        $.ajax({
            url: apivegpont+"/"+id, 
            type:"DELETE",
            success: function(result){
                console.log("sikerült");
            }
        })
    };

    putAjax(apivegpont,ujadat,id){
        $.ajax({
            url: apivegpont+"/"+id, 
            type:"PUT",
            data:ujadat,
            success: function(result){
                console.log("sikerült");
            }
        })
    };
}

