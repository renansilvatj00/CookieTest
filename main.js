console.clear();
$.removeCookie("ck_tst_", null);
sessionStorage.removeItem("ck_tst_")

let addCookie=()=>{
    if($('#password').val() == ''|| $('#login').val() == ''){
        $('.showInfoValidation').text('Fill in all fields.').fadeIn();
        setTimeout(() => {
            $('.showInfoValidation').fadeOut();
        }, 4000);
        return false;
    }
    let content = $('#password').val()+'-'+$('#login').val();
    var encrypted = CryptoJS.AES.encrypt(content, "ioasys");
    $.cookie("ck_tst_", encrypted);
    sessionStorage.setItem("ck_tst_", encrypted)
    $('.form-control-lg').val('');
    return;
}
let removeCookie=()=>{
    $('.showInfo').fadeOut();
    $.removeCookie("ck_tst_", null);
    sessionStorage.removeItem("ck_tst_")
    window.location.reload();
    return;
}
let getCookie=()=>{
    let encrypted = $.cookie("ck_tst_");
    if(encrypted != undefined){

        $('.showInfo').fadeIn();
        var decrypted = CryptoJS.AES.decrypt(encrypted, "ioasys").toString(CryptoJS.enc.Utf8);
        
        $('#login_cookie').text(decrypted.split('-')[1])
        $('#pass_cookie').text(decrypted.split('-')[0])
    }else{
        $('.showInfoValidation').text('No information available.').fadeIn();
        setTimeout(() => {
            $('.showInfoValidation').fadeOut();
        }, 4000);
        return;
    } 
}