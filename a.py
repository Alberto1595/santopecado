import qrcode

def generar_qr(enlace, nombre_archivo):
    # Configuración del QR
    qr = qrcode.QRCode(
        version=1, # Tamaño del QR (1 es el más pequeño)
        error_correction=qrcode.constants.ERROR_CORRECT_H, # Nivel de recuperación de errores alto
        box_size=10, # Tamaño de cada cuadro del QR
        border=4,    # Grosor del borde blanco
    )

    # Agregar la información
    qr.add_data(enlace)
    qr.make(fit=True)

    # Crear la imagen (puedes cambiar los colores aquí)
    img = qr.make_image(fill_color="black", back_color="white")

    # Guardar el archivo
    img.save(nombre_archivo)
    print(f"✅ ¡Código QR generado con éxito como: {nombre_archivo}!")

# --- USO DEL SCRIPT ---
mi_url = "https://santopecado.vercel.app/"
nombre_salida = "qr_santo_pecado.png"

generar_qr(mi_url, nombre_salida)