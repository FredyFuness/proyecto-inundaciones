import { useEffect, useState } from "react";

function SensorData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/datos")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📡 Datos del Sensor</h2>

      {!data ? (
        <p style={styles.loading}>Cargando datos...</p>
      ) : (
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Lectura Actual</h3>
          <pre style={styles.dataBox}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  loading: {
    fontSize: "1.2rem",
    opacity: 0.7,
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    textAlign: "left",
    backdropFilter: "blur(5px)",
  },
  cardTitle: {
    marginTop: 0,
    fontSize: "1.3rem",
    marginBottom: "10px",
  },
  dataBox: {
    background: "rgba(0,0,0,0.25)",
    padding: "15px",
    borderRadius: "10px",
    overflowX: "auto",
  },
};

export default SensorData;
