import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";

function App() {
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요"
        value=""
        errorMsg="이메일을 확인해주세요"
        isError={false}
        iconPath=""
        iconAlt="delete"
        onChange={() => {}}
        onClick={() => {}}
      />
      <br />
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="email"
        placeholder="주소를 입력하세요"
        value=""
        errorMsg="주소를 확인해주세요"
        isError={false}
        iconPath=""
        iconAlt="delete"
        onChange={() => {}}
        onClick={() => {}}
      />
    </>
  );
}

export default App;
