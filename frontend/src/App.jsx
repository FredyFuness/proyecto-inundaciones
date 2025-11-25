import SensorData from "./components/SensorData";

function App() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.mainTitle}>🌧 Sistema de Monitoreo de Inundaciones</h1>
      <SensorData />
    </div>
  );
}

const styles = {
  wrapper: {
    textAlign: "center",
    padding: "20px",
  },
  mainTitle: {
    marginTop: "20px",
    fontSize: "2.8rem",
  },
};

export default App;
