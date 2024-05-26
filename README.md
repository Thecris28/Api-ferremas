<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion


🚧 🚧 API Desarrollada con [Nest](https://github.com/nestjs/nest) framework + TypeScript 🚧 🚧

## Lista de operaciones que se pueden realizar 
* Productos
  * Crear un productos 
  * Listar productos
  * Listar producto por Id
  * Listar productos por categoria
  * Eliminar un producto
* Usuarios
  * Registrarse 
  * Login
* Categorias
  * Consultar categorias
  * Crear una nuva categoria
  * Listar categorias
* Pedidos
  * Realizar un pedido
  * Consultar un pedido
  * Actualizar estado de un pedido



## Requerimientos

* Nodejs 20.x.x ó superior.   [Instalar Nodejs]()
```console
node --version
```
* Instalar NestJS 
```
npm i -g @nestjs/cli
```

## Paso a paso para iniciar Api

* Clonar repositorio

```bash
git clone https://github.com/Thecris28/Api-ferremas.git
```
* Ingresar a la carpeta del proyecto
```bash
cd Api-ferremas
```
* Instalar dependencias
```bash
npm install
```


* ### Iniciar app
```bash
# watch mode
npm run start:dev
```


* ### Ejecutar peticion http

```ruby
# Para generar datos en la api
localhost:3000/api/seed
```

### Primero para interactuar con los endpoints en necesario registrarse a traves de : 

* Metodo : `Post`

* ``` localhost:3000/api/auth/register  ``` 

### Datos para registrarse : 
    email 
    password 
    nombre


### Despues inicia sesion a traves de 

* Metodo : `POST`
* ``` localhost:3000/api/auth/login ```

### Datos para iniciar sesion 
    email
    password

#### Se regresara un token que debe ser enviado para poder consultar los endpoint que se listan a continuacion :
> [!IMPORTANT]
> Utilizar Beaber Token 

### Para consultar por los productos
* Metodo : `GET`

* ``` localhost:3000/api/productos ```

### Para crear un producto
* Metodo : `POST`

* ``` localhost:3000/api/productos ```
* Cuerpo de ejemplo
  ```json
  marca: "Bauker",
  codigo: "Bkr-2",
  nombre: "taladro",
  categoriaId: 1,
  precio: 50000,
  stock: 5,
  ```
  

### Buscar un solo producto
* Metodo : `GET`
* ```localhost:3000/api/productos/idProducto```


### Buscar todos los productos de una categoria
* Metodo : `GET`
* ```localhost:3000/api/productos/categorias/idCategoria```



## Api categorias
### Para consultar por las categorias

* Metodo : `GET`
* ```localhost:3000/api/categorias```


