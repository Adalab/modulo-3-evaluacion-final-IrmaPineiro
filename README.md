# Rick and Morty Web App

## Descripción del proyecto

Este proyecto consiste en una página web interactiva sobre la serie **Rick and Morty** desarrollada con **React**. Permite consultar un listado de personajes obtenidos de la [Rick and Morty API](https://rickandmortyapi.com/documentation/#get-all-characters) y filtrarlos por nombre y especie. También proporciona información detallada de cada personaje mediante rutas dinámicas.

## Funcionalidades principales

- **Listado de personajes**: Muestra la foto, el nombre y la especie de cada personaje.
- **Filtros**:
  - Filtrar por nombre: Permite buscar personajes escribiendo parte de su nombre.
  - Filtrar por especie: Permite seleccionar entre "Alien" o "Human".
- **Detalle de personajes**: Muestra información ampliada de cada personaje, como su planeta de origen, estado (vivo o muerto) y número de episodios en los que aparece.
- **Manejo de rutas**: Uso de **React Router DOM** para navegar entre el listado y el detalle de personajes.
- **Mejoras visuales**:
  - Diseño responsivo.
  - Representación del estado y especie con iconos.
  - Uso de grid para el diseño del listado de personajes.

## Ejercicios realizados

Se han implementado los siguientes puntos del enunciado:

1. Listado de personajes.
2. Filtrado por nombre.
3. División en componentes: `Filters`, `CharacterList`, `CharacterCard`, `CharacterDetail`.
4. Pantalla de detalle de personajes.
5. Detalles de calidad.
6. Mejoras visuales como el diseño responsive y uso de iconos.
7. Filtros adicionales por especie.

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:
   ```
   git clone https://github.com/usuario/repo-rick-and-morty.git
   ```

## Tecnologías utilizadas

- **React**: Librería principal para la construcción de la aplicación.
- **React Router DOM**: Navegación entre diferentes vistas.
- **SCSS**: Estilización moderna y estructurada.
- **PropTypes**: Tipado de las propiedades en los componentes.
- **Rick and Morty API**: Fuente de datos sobre los personajes.

## Estructura de la aplicación

### Componentes principales

1. **App**: Componente raíz que gestiona el estado global.
2. **Header**: Encabezado con el logo de la serie.
3. **Filters**: Componente para filtrar los personajes.
4. **CharacterList**: Lista de personajes filtrados.
5. **CharacterCard**: Representa una tarjeta con los detalles básicos de un personaje.
6. **CharacterDetail**: Muestra información detallada de un personaje seleccionado.
7. **Footer**: Pie de página con el logo.

## Estilos

Los estilos se implementaron usando **SCSS**, lo cual permite modularidad y un diseño responsive adaptado a diferentes tamaños de pantalla.

## Demo

Puedes probar la aplicación publicada en GitHub Pages: [Rick and Morty Web App](https://usuario.github.io/repo-rick-and-morty)

## Recursos utilizados

- **Rick and Morty API**: Fuente de datos para los personajes.
- **Logo oficial de la serie**: Descargado desde Wikipedia.
