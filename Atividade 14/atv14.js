function pesquisa(){
    if(document.forms.formulario1.elements.r1.checked){
        alert("Volte sempre à está página!");
        return
    }
    alert("Que bom que você voltou a visitar esta página!!");

}
function validarDados() {
    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
       return false;
    }

    if (document.forms.formulario1.elements.idMensagem.value == "" || document.forms.formulario1.elements.idMensagem.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 50 caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }
    if(!(document.forms.formulario1.elements.r1.checked || document.forms.formulario1.r2.checked)){
        alert("Preencha a pesquisa!");
        return false;
    }
    pesquisa();
    return true;
}