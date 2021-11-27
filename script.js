$(function(){
    const konyvek=[];
    let apivegpont = "http://localhost:3000/konyveim";
    //listázzuk ki csak a regényeket
    let szuro = "?tipus=regény";
    //apivegpont += szuro;

    //készítsünk egy gombot, amire ha rákattintunk, be tudjuk rendezni ár szerint növekvőre
    $("#rendez").on("click",()=>{
        let asc = "?_sort=ar&_order=asc";
        apivegpont += asc;
        sajatAjax.getAjax(apivegpont,konyvek,kiir);
    })

    const sajatAjax = new SajatAjax();

    //Új adat felviteléhez gomb
    $("#ujadat").on("click",()=>{
        let ujAdat = {
            "cim":$("#ujadatcim").val(),
            "szerzo":$("#ujadatszerzo").val(),
            "tipus":$("#ujadattipus").val(),
            "ar":Number($("#ujadatar").val()),
        }
        sajatAjax.postAjax(apivegpont,ujAdat);
    })

    //adat törlése
    $("#torles").on("click",()=>{
        let id = $("#torlesid").val();
        sajatAjax.deleteAjax(apivegpont,id);
    })

    //adat módosítása
    $("#modosit").on("click",()=>{
        let id = $("#modositid").val();
        let ujAdat = {
            "id":id,
            "cim":$("#modositcim").val(),
            "szerzo":$("#modositszerzo").val(),
            "tipus":$("#modosittipus").val(),
            "ar":$("#modositar").val(),
        }
        sajatAjax.putAjax(apivegpont,ujAdat,ujAdat.id);
    })

    function option(tomb){
        let szuloelem=$("#tipus");
        let txt="";
        tomb.forEach(elem=>{
            txt += '<option value="' + elem.tipus + '">' + elem.tipus + '</option>'
        })
        szuloelem.html(txt);
    }

    $("#szures").on("click",()=>{
        let szures = "?tipus=" + $("option").val();
        apivegpont += szures;
        //console.log(szures);
        sajatAjax.getAjax(apivegpont,konyvek,kiir);
    })

    function kiir(tomb){
        let szuloelem=$(".megjelenit");
        let txt="";
        tomb.forEach(elem=>{
            txt += "<h2>" + elem.cim + "</h2>";
            txt += "<h3>" + elem.szerzo + "</h3>";
            txt += "<p>" + elem.tipus + "</p>";
            txt += "<span>" + elem.ar + "</span>";
        });
        szuloelem.html(txt);
    }

    sajatAjax.getAjax(apivegpont,konyvek,kiir);
    sajatAjax.getAjax(apivegpont,konyvek,option);
});