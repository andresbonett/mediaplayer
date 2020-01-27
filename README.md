#### Atributos etiqueta <script></script>
````
  <script async src='' > // carga archivo de manera asincrona, despues se detiene el codigo para su ejecucion 
  <script defer src='' > // carga archivo de manera asincrona, el codigo se ejecuta cuando termine de cargar el html
````
#### scope o ambito de una variable o funcion
  global scope = var 
  function scope = arguments
  block scope = let, const
  module scope = archivo js con atributo module


#### Exportar variable o funcion
  export default <Nombre>
  export default MediaPlayer;

#### Importar y exportar variables o funciones
  import function from './archivo.js'
  import { variable } from './archivo.js'
  import function, { var } from './archivo.js'

#### Clousure