import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
// import "./App.css";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import GroupList from "./components/GroupList";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo"];
  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };
  // const handleSelectButton = () => {
  //   setShowAlert(!showAlert);
  // };
  // const [showAlert, setShowAlert] = useState(false);
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, rem in! Quidem minus porro, pariatur natus illum perferendis! Repudiandae amet eveniet consectetur facere! Dignissimos, possimus. Cum saepe fugiat sit magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum temporibus officiis accusantium repellat delectus similique suscipit non ullam culpa, accusamus nobis placeat, minima beatae debitis reiciendis praesentium libero est eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sed id tenetur deleniti quam esse quod accusamus in exercitationem tempora. Nisi adipisci unde cumque saepe ullam neque minus, ipsa ex";
  const [expand, setExpand] = useState(true);

  return (
    <>
      <ExpandableText
        para={text}
        expand={expand}
        handleClick={() => {
          setExpand(!expand);
        }}
      ></ExpandableText>
      {/* <Alert showAlert={showAlert} onSelect={handleSelectButton}>
        Hello <span>World!</span>
      </Alert>
      <Button
        btnType="btn btn-success"
        text="show alert"
        onSelect={handleSelectButton}
      ></Button>
      <GroupList
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      /> */}
    </>
  );
}

export default App;
