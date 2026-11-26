
# Autenticación JWT con Passport en NestJS

## 1. Introducción

En este proyecto se implementó un sistema de autenticación utilizando JWT (JSON Web Token) y Passport en NestJS.

JWT permite generar tokens que se utilizan para identificar y autorizar a un usuario al acceder a rutas protegidas.

## 2. Registro de usuarios

Se creó el endpoint:

`POST /auth/register`

Este endpoint recibe los datos de un usuario, como correo electrónico, contraseña y nombre.

Se utilizaron DTOs y validaciones para comprobar que los datos enviados sean correctos.

## 3. Inicio de sesión

Se creó el endpoint:

`POST /auth/login`

Este endpoint genera un token JWT utilizando los datos recibidos.

El token contiene información como el correo electrónico y el identificador del usuario.

## 4. Configuración de JWT

Se configuró JwtModule en el módulo de autenticación.

El token tiene un tiempo de expiración de 60 segundos.

## 5. Estrategia JWT

Se creó el archivo `jwt.strategy.ts`.

Esta estrategia permite:

- Extraer el token desde el encabezado Authorization.
- Verificar la firma del token.
- Comprobar que el token no haya expirado.
- Obtener los datos del usuario desde el payload.

## 6. Guard de autenticación

Se creó el archivo `jwt-auth.guard.ts`.

El guard utiliza Passport para proteger las rutas que requieren autenticación.

## 7. Protección de rutas

Se protegió el controlador de usuarios utilizando `JwtAuthGuard`.

Para acceder a las rutas de usuarios, se debe enviar un token válido en el encabezado:

`Authorization: Bearer <token>`

## 8. Pruebas realizadas

Se realizaron las siguientes pruebas:

- Registro de usuario.
- Validación de datos incorrectos.
- Inicio de sesión y generación de token.
- Acceso a usuarios sin token, obteniendo respuesta 401 Unauthorized.
- Acceso a usuarios con token válido, obteniendo respuesta 200 OK.

## 9. Conclusión

Se implementó la autenticación mediante JWT y Passport en NestJS, permitiendo proteger rutas y controlar el acceso mediante tokens.
