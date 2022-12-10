# Sobre la aplicación

Esta app es un ejemplo sencillo del uso del hook useState + useEffect con React y CSS Modules
Las herramientas usadas son:

- React
- CSS Modules
- Chrome DevTools
- Hooks de React: useState y useEffect

## Instalación

```bash
npm install
```

## Uso

```bash
npm start
```

Y luego abrir [http://localhost:3000](http://localhost:3000) para ver la app en su navegador de preferencia.

## Licencia [MIT](https://choosealicense.com/licenses/mit/)

## ¿Qué es useEffect?  

El hook useEffect nos permite ejecutar código cuando se renderiza el componente o cuando cambia el estado de las variables que se pasan como segundo parámetro.

## ¿Cómo usar useEffect?  

```javascript
useEffect(() => {
  // Código a ejecutar
}, [variable1, variable2, ...]);
```

## ¿ En qué casos se usa useEffect?  

Cuando queremos ejecutar código cuando se renderiza el componente o cuando cambia el estado de las variables que se pasan como segundo parámetro.

## ¿Qué es CSS Modules?  

CSS Modules es una forma de usar CSS que evita que los estilos se mezclen entre sí. Cada componente tiene sus propios estilos y no afectan a otros componentes.

## ¿Cómo usar CSS Modules?  

```javascript
import styles from './styles.module.css';

<div className={styles.container}>
  <h1 className={styles.title}>Hola Mundo</h1>
</div>
```

## ¿En qué casos se usa CSS Modules?

Cuando queremos usar CSS pero evitando que los estilos se mezclen entre sí. Cada componente tiene sus propios estilos y no afectan a otros componentes.
