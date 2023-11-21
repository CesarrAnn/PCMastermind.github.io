document.addEventListener('DOMContentLoaded', function() {
    const analizarBtn = document.getElementById('analizarBtn');
    analizarBtn.addEventListener('click', function() {
        // Obteneniendo los valores de las especificaciones y el presupuesto
        const presupuesto = parseFloat(document.getElementById('presupuesto').value);
        const preferencias = document.getElementById('preferencias').value;
        const cpu = document.getElementById('cpuSelect').value;
        const tarjeta = document.getElementById('tgSelect').value;
        const ram = document.getElementById('ramSelect').value;

        const almacenamiento = document.getElementById('alSelect').value;

        // Inicializando las recomendaciones
        let recommendations = "Recomendaciones: <br>";

        // Lógica para determinar las recomendaciones basadas en las especificaciones
        if( presupuesto < 200) {
            recommendations += "-No hay suficiente presupuesto. <br>"   
        }
        if (cpu == "ADM Rysen 3" && presupuesto > 900 ) {
            recommendations += "- Actualizar su CPU a una versión más reciente como el AMD Ryzen 5. <br> ";
        }
        if (cpu == "Intel core i5" && presupuesto > 900 ) {
            recommendations += "- Actualizar su CPU a una versión más reciente de Intel Core i7 o AMD Ryzen 7. <br> ";
        }
        if (cpu == "Intel core i5" && presupuesto < 900 ) {
            recommendations += "- Puede actualizar su CPU a una versión más reciente de Intel Core i7 o AMD Ryzen 7 pero no hay suficiente presupuesto. <br> ";
        }
        if (tarjeta == "NVIDIA 3070" && presupuesto > 1000){
            recommendations += "- Actualizar su tarjeta grafica a una version mas reciente como el NVIDIA RTX 3090 . <br> ";
        }
        if (ram == "8gb" && presupuesto > 300){
            recommendations += "- Actualizar su RAM a una capacidad mas alta como el de 16gb (recomendado) . <br> ";
        }
        if (ram == "16gb" && presupuesto > 500){
            recommendations += "- Actualizar su RAM a una capacidad mas alta como el de 32gb  . <br> ";
        }
        if (ram == "128gb" && presupuesto > 300){
            recommendations += "- Actualizar su almacenamiento a una capacidad mas alta como el de 256gb (recomendado) . <br> ";
        }
        if( cpu == "Intel core i7" && presupuesto < 1000) {
            recommendations += "-Puede mejorar su cpu al Intel core i9 pero no hay suficiente presupuesto. <br>"
        }
        if( cpu == "Intel core i7" && presupuesto > 1400) {
            recommendations += "-Puede mejorar su cpu al Intel core i9.<br>"
        }

        // Mostrando las recomendaciones en el elemento con el id "recommendations"
        const recommendationsDiv = document.getElementById('recommendations');
        recommendationsDiv.innerHTML = recommendations;
    });
});
