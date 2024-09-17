# Ssr. Frontend Developer Challenge (NextJS)


## Run proyect in local:

```bash
  npm install 
```
Luego    

```bash
  npm run dev 
```
    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

# Challenge description

Este trabajo práctico tiene como objetivo principal conocer las mejores prácticas del candidato. Se solicita tomarse el tiempo de leer bien la consigna y entregar el mejor desarrollo posible. **Todo componente agregado será considerado como un Plus.**

## 🤔 Antes de arrancar, debes tener en cuenta:
- Se espera que la persona sea **creativa** 🎨.
- Programe de forma **componentizada y ordenada** 🏗️.
- Respete los **requests** que pedimos 🤓.
- Aplicá validaciones, por ejemplo, que no se muestren las tres secciones de episodios hasta no seleccionar el personaje de la sección #1 y de la sección #2 ☑️.
- La API a utilizar puede ser **REST API o GraphQL**, es indiferente para nosotros 😇.
- Se espera que no sea un trabajo de más de **8 horas** como mucho ⏰.

## 🎯 Objetivo:
<aside>
💡 **Obligatorio**: Recordá abrir un repositorio público (puede ser Github, Gitlab, Bitbucket…).  
**Nice to Have**: Deseable que el proyecto esté deployado en un servidor (gratuito).  
**Nice to Have**: Deseable que el proyecto tenga testings.
</aside>

Se utilizará la API de **Rick and Morty**: ["https://rickandmortyapi.com/"](https://rickandmortyapi.com/) cumpliendo con los siguientes objetivos:

1. Obtener un listado de personajes, listándolos de forma paginada, en dos secciones: **Character #1** y **Character #2**.
2. Cada personaje debe mostrarse como una **"Card"** con su status y su especie.
3. Debajo de estos dos listados, habrá tres secciones:
   - **Character #1 - Only Episodes** → Aquí deben listarse únicamente los episodios en donde aparece solo el Personaje seleccionado en la sección **Character #1**.
   - **Character #1 & Character #2 - Shared Episodes** → Aquí deben listarse los episodios donde aparecen los personajes seleccionados en las secciones **Character #1** y **Character #2**.
   - **Character #2 - Only Episodes** → Aquí deben listarse únicamente los episodios en donde aparece solo el Personaje seleccionado en la sección **Character #2**.

![image](https://github.com/user-attachments/assets/c4808f4f-0e99-458f-b71a-927ecfe909b3)


---

## Criterio de Evaluación:

Este test será evaluado de la siguiente manera:

- **Funcionalidad**: ¿La aplicación cumple con todo lo requerido?
- **Code Quality**: ¿El código está bien estructurado, limpio y es escalable?
- **UI/UX**: ¿El frontend es intuitivo y visualmente tiene una buena UX?
- **Creatividad**: ¿Hay algún componente, feature o cuestión que destaque por sobre la consigna?
- **Testing**: ¿Los test unitarios del frontend están desarrollados para probar la funcionalidad?
