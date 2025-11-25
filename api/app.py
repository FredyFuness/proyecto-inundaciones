from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"status": "API de monitoreo de inundaciones activa"}

@app.route("/prediccion", methods=["POST"])
def prediccion():
    datos = request.json
    nivel_agua = datos.get("nivel_agua")
    lluvia = datos.get("lluvia")  # mm
    caudal = datos.get("caudal")  # m³/s

    # Lógica simple de ejemplo (luego podemos mejorarla)
    riesgo = "Bajo"
    
    if nivel_agua > 1.5 or lluvia > 50 or caudal > 100:
        riesgo = "Medio"
    if nivel_agua > 3 or lluvia > 80 or caudal > 180:
        riesgo = "Alto"

    return {
        "nivel_agua": nivel_agua,
        "lluvia": lluvia,
        "caudal": caudal,
        "riesgo": riesgo
    }

if __name__ == "__main__":
    app.run(debug=True)
    