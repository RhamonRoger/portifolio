/*informações do candidato;
idade , experiência em anos;
nível de educação, possui certificado;*/
let idade = 28;
let experienciaAnos = 5;
let niveldeEducacao ="superior";
let possuiCertificado = false;

/*Critérios de elegibilidade;
idade mínima, número míninmo de anos de experiência;
nível mínimo de educação , obrigatoriedade ou não de
certificado*/
let idadeMinima = 25;
let numeroMinimoAnos = 3;
let nivelMinimoEducacao = "superior";
let certificadoObrigatorio = false;
let Elegivel =
 idade >= idadeMinima && experienciaAnos >= numeroMinimoAnos &&
 (niveldeEducacao === nivelMinimoEducacao || possuiCertificado) &&
 (certificadoObrigatorio || possuiCertificado);
 console.log ("Eligibilidade ok ?"+ Elegivel);