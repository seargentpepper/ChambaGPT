/**
 * utils.js
 * Funciones de ayuda genéricas y utilidades para separar manipulaciones
 * complejas del flujo de la aplicación principal.
 */

const Utils = {
    /**
     * Copia un texto al portapapeles y notifica al usuario.
     * @param {string} text - El texto a copiar
     * @param {string} successMessage - El mensaje que se mostrará en alert si tiene éxito
     */
    copyToClipboard: (text, successMessage) => {
        if (!navigator.clipboard) {
            // Fallback para navegadores antiguos (si fuera necesario), aunque moderno funciona.
            console.error("Clipboard API no soportada");
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            alert(successMessage || "¡COPIADO!");
        }).catch(err => {
            console.error("Fallo al copiar: ", err);
        });
    }
};
