import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BuilderCat from "./BuilderCat/BuilderCat";
import TechnicCat from "./TechnicCat/TechnicCat";
import CharacterCat from "./CharacterCat/CharacterCat";

const SubCategory = () => {
  return (
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold mb-10">LEGO Categories</h1>
      <Tabs>
        <TabList>
          <Tab>Lego Builder</Tab>
          <Tab>Lego Technic</Tab>
          <Tab>Lego Character</Tab>
        </TabList>

        <TabPanel>
          <BuilderCat/>
        </TabPanel>
        <TabPanel>
          <TechnicCat/>
        </TabPanel>
        <TabPanel>
          <CharacterCat/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategory;
