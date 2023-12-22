<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém o texto enviado pelo formulário
    $texto = $_POST["texto"];

    // Verifica se o texto não está vazio antes de salvar
    if (!empty($texto)) {
        // Caminho do arquivo onde o texto será salvo
        $caminhoArquivo = "textos_salvos.txt";

        // Abre o arquivo para escrita
        $arquivo = fopen($caminhoArquivo, "a");

        // Escreve o texto no arquivo
        fwrite($arquivo, $texto . "\n");

        // Fecha o arquivo
        fclose($arquivo);

        echo "Texto salvo com sucesso!";
    } else {
        echo "Por favor, digite algum texto antes de salvar.";
    }
}
?>