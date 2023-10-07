<?php
// Para verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Exemplo de envio de e-mail 
    $destinatario = "samuelmascarenhascontato@gmail.com";
    $assunto = "Nova mensagem do formulário de contato - Meu Portfolio";
    $conteudo = "Nome: $nome\n";
    $conteudo .= "E-mail: $email\n";
    $conteudo .= "Mensagem:\n$mensagem";

    // função mail() para enviar o e-mail 
    mail($destinatario, $assunto, $conteudo);

    // Retorna de volta para a página de origem 
    header("Location: index.html?enviado=sim");

} else {
    // Se o formulário não foi enviado, retorna para a página de origem
    header("Location: index.html");
}
?>
