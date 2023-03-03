
# Pasos para probar la aplicacion

1) Acceder a cada carpeta y ejecutar ``` npm install ``` para instalar cada una de sus dependencias.
2) Para ejecutar el Backend ejecute el comando: ```npm run start:dev```.
3) Para ejecutar el frontend ejecute: ```npm run dev```
4) Puede probar los endpoints para crear y obtener el vehiculo cuya velocidad exceda con las siguientes urls:
   1) El post (creacion): ```http://localhost:3000/vehicle```
   2) El Get para obtener el vehiculo con la velocidad excedida: ```http://localhost:3000/vehicle/``` despues de ```vehicle``` esta recibe un parametro, el cual consiste en la velocidad que desea validar. 