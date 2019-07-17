const esCorreoElectronico = correoElectronico => /\S+@\S+/.test(correoElectronico);
 
const correosParaProbar = ["foo@bar.baz", "HolaMundo@ejemplo.com", "ejemplo@asd.com", "mark@facebook.com", "pedro@gmail.com", "asd", "123"];
correosParaProbar.forEach(correo => {
    console.log("¿El correo %s es válido? %s", correo, esCorreoElectronico(correo));
});