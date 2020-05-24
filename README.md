# Fybo

Fybo es una aplicación de moda creada por los estudiantes de 2º de DAW José Carlos, Pau y Alexey.

## Instalación

Clona el proyecto.

```bash
git clone https://github.com/alexeyrudd/fypo.git
```

Instala paquetes.

```bash
npm install
```

## Uso

Con la App Expo utiliza el código QR generado.

## DOCUMENTACIÓN API

# Documentación API FYPO

```
http://34.225.64.4:8000/api/outfits/
```
## Ver todos los outfits

Devuelve un json con todos los outfits.
**URL:** /
**Método:** GET
**Parámetros URL:** en blanco
**Cuerpo petición:** en blanco

## Crear un outfit

Devuelve un json con outfit creado
**URL:** /
**Método:** POST
**Parámetros URL:** no hay
**Cuerpo petición:** vacío

## Ver un outfit

Devuelve un json con un outfit.
**URL:** /:id
**Método:** GET
**Parámetros URL:** id=[string]
**Cuerpo petición:** en blanco

## Modificar un outfit

Devuelve un json con outfit modificado
**URL:** /:id
**Método:** PUT
**Parámetros URL:** id=[string]
**Cuerpo petición:** un json con uno o varios campos existentes en el objeto outfit (id, body_type,
photo_url, create_date)

## Eliminar un outfit

Devuelve un json con outfit modificado
**URL:** /:id
**Método:** DELETE
**Parámetros URL:** id=[string]
**Cuerpo petición:** vacío
