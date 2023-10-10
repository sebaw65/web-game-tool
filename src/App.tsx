import { Scene } from "./Scene";
import { GUI } from "./Scene/GUI";
import { SiteWrapper } from "./styled";

const App = () => {
  return (
    <SiteWrapper>
      <Scene />
      <GUI />
    </SiteWrapper>
  );
};

export default App;
