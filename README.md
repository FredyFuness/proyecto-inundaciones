# Monitoreo de inundaciones — prototipo académico

Proyecto de estudiantes de cuarto año de Ingeniería en Sistemas de la Universidad Gerardo Barrios. Explora una aplicación para consultar lecturas de sensores y clasificar un nivel de riesgo a partir de variables hidrológicas.

## Componentes implementados
- API en Python con Flask y Flask-CORS.
- `GET /`: estado de la API.
- `POST /prediccion`: recibe `nivel_agua`, `lluvia` y `caudal` y devuelve una clasificación Bajo, Medio o Alto mediante umbrales fijos.
- Frontend React con Vite y un componente para mostrar una respuesta JSON de sensores.

## Estado de integración
El componente `frontend/src/components/SensorData.jsx` solicita `GET /datos`, pero esa ruta no está implementada en `api/app.py`. Por ello, la lectura de sensores no funciona de extremo a extremo con esta versión del repositorio. Tampoco hay integración de Firebase implementada en los archivos de aplicación revisados.

La ruta llamada `/prediccion` utiliza reglas de ejemplo; no contiene un modelo predictivo entrenado ni un sistema operativo de alertas.

## Ejecutar la API
Desde la raíz, dentro de un entorno virtual activado:
```bash
python -m pip install flask flask-cors
python api/app.py
```
La API se inicia normalmente en `http://127.0.0.1:5000`.

Ejemplo de cuerpo JSON para `POST /prediccion`:
```json
{"nivel_agua": 2, "lluvia": 30, "caudal": 80}
```
Con las reglas actuales, este ejemplo devuelve riesgo `Medio`.

## Ejecutar el frontend
En otra terminal:
```bash
cd frontend
npm ci
npm run dev
```
La pantalla de sensores necesita implementar la ruta faltante o adaptar la consulta a una fuente existente.

## Próximos pasos
Conectar una fuente de medición, validar entradas y unidades, calibrar umbrales con datos y especialistas, y comprobar la integración completa. Este prototipo académico no debe utilizarse para tomar decisiones de emergencia.
