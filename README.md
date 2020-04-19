# amberes-angular-test-kcamargo

## Ambiente de trabajo
NodeJs: v12.16.1

npm: v6.13.14

## Login
Creé un servicio para el login, que sería el encargado de comunicarce con la API para autenticarse, agregué un usuario fijo para simular la consulta.

**Credenciales:**

**email**: amberescoin@mail.com

**password**: amberescoin

La contraseña se "encripta" con md5 para una capa de seguridad

## Carousel
Implementé un componente que se encarga de manejarlo, es común para las vistas login y home.

El campo que indica si el precio subió o bajó es random porque no estoy muy familiarizado con cómo se calcula.

## Notas
* Es primera vez que trabajo con angular 9, siempre he trabajado con angular js y es sumamente diferente, verán seguramente muchas cosas "mal hechas" o no con las mejores prácticas, además de que tampoco he trabajado con POO ni TypeScript muy a fondo.

* Traté de estructurar el proyecto de la manera más cómoda para mi, y traté siempre de dejar la lógica pesada para los servicios y no para los controladores o componentes en este caso, los componentes solo le sirven la información a las vistas.

* Utilicé librerias de terceros para agilizar procesos, tales como: 

 ng-bootstrap: módulo que implementa componentes de bootstrap
 
 ng-simple-timer: módulo para el conteo de los 30 segundos para reaizar la actualización de precios.
 
 ts-md5: para crear un hash md5 de la contraseña
 
 * No me dio tiempo de implementar la responsividad, pasé la mayor parte del tiempo aprendiendo a usar el framework
 
