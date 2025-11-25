# Usa la imagen oficial de Caddy con la última versión estable
FROM python:3.11-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /srv

# Copia el archivo de configuración de Caddy
#COPY Caddyfile /etc/caddy/Caddyfile

# Copia todos los archivos del proyecto al directorio de trabajo
# Esto incluye HTML, CSS, JS, imágenes, etc.
COPY . .

# Expone el puerto 8000
EXPOSE 8000

# Comando para iniciar Caddy
CMD ["python", "-m", "http.server"]
