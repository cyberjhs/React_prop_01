import Container from "./Container";
function App() {
  const colors = [
    {
      color_name: "#FF6663",
      color_id: "PINK"
    },
    {
      color_name: "#333333",
      color_id: "GRAY"
    },
    {
      color_name: "#000000",
      color_id: "BLACK"
    },
    {
      color_name: "#38BB14",
      color_id: "GREEN"
    },
    {
      color_name: "#C90B0B",
      color_id: "RED"
    },
    {
      color_name: "#FF8000",
      color_id: "ORANGE"
    },
    {
      color_name: "#FFF500",
      color_id: "YELLOW"
    },
    {
      color_name: "#CCCCCC",
      color_id: "LIGHT GRAY"
    },
    {
      color_name: "#7E41A2",
      color_id: "PURPLE"
    },
    {
      color_name: "#C14911",
      color_id: "BROWN"
    }
];
  return (
    <div className="cardMain">
    {
      colors.map((e,idx) => {
        return(
          <Container key={idx} color_id={e.color_id} color_name={e.color_name}/>
        )
        
      })
    }
    </div>
  );
}

export default App;