import logo from './logo.svg';
import './App.css';
import Counter from './useState/useState';
import UseStateWithPreviousState from './useState/useStateWithPreviousState';
import UseStateWithObject from './useState/useStateWithObject';
import Employee from './class component/Employee';
import School from './props/School';
import StClass from './State in Class Component/StClass';
import Fruits from './Destructuring/Fruits';
import ListRendering from './ListRendering/ListRendering';
import UseStateWithArray from './useState/useStateWithArray';
import PassingPropsAsMethods from './props/PassingPropsAsMethods';
import ConditionalRendering from './ConditionalRendering/conditionalRendering';
import Styling from './Styling React Components/Styling';
import StyleComponentTwo from './Styling React Components/StyleComponentTwo';
import CSSModuleComponent from './Styling React Components/CSSModuleComponent';
import MemoParent from './Memo/MemoParent';
import PureParentComponent from './PureComponent/PureParentComponent';
import FormComponent from './Forms/FormComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ErrorComponent from './ErrorBoundary/ErrorComponent';

function App() {
  return (
    <div className="App">

      {/* <Counter/>
     <UseStateWithPreviousState/>
     <UseStateWithObject/>
     <Employee/> */}

      {/* <School />
      
      <ListRendering/>
      
      <StClass/>

      <Fruits/>

      
      */}

      {/* <UseStateWithArray/> */}

      {/* <PassingPropsAsMethods /> */}

      {/* <ConditionalRendering/> */}

      {/* <Styling isValid={true}/>
     <StyleComponentTwo/> */}
      {/* <CSSModuleComponent/> */}
      {/* <MemoParent /> 
      */}

      {/* <PureParentComponent /> */}

      {/* <FormComponent/> */}
      <ErrorBoundary><ErrorComponent /></ErrorBoundary>



    </div>
  );
}

export default App;
