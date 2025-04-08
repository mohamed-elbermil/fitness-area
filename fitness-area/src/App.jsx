import Header from "./assets/components/Header";
import Bubble from "./assets/components/Bubble";
import MainContent from "./assets/components/MainContent";
import TabSwitcher from "./assets/components/TabSwitcher";
import Video from "./assets/components/Video";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Bubble></Bubble>
      <TabSwitcher></TabSwitcher>
      <MainContent></MainContent>
      <Video></Video>
    </>
  );
}

export default App;
