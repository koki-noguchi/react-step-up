import { PrimarryButton } from "./components/atoms/button/PrimarryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/atoms/molecules/SearchInput";

export default function App() {
  return (
    <>
      <PrimarryButton>test</PrimarryButton>
      <SecondaryButton>test2</SecondaryButton>
      <SearchInput></SearchInput>
    </>
  );
}
