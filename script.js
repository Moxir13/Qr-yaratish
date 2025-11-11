const btn=document.getElementById("btn");
const qr=document.getElementById("qr");
const input=document.getElementById("input");
const colorInput=document.getElementById("qr-color");
const bgInput=document.getElementById("qr-bg");



btn.addEventListener("click",()=>{
  
    if(input.value.trim().lenght<0){
        alert("link kiritin");
    }else{
        qr.innerHTML="";
        const qrcode = new QRCode(document.getElementById("qr"), {
            text: input.value,
            width: 200,
            height: 200,
            colorDark : bgInput.value,
            colorLight : colorInput.value,
            correctLevel : QRCode.CorrectLevel.H
          
    });
}
});