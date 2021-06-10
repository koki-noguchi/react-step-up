import { PrimarryButton } from "./components/atoms/button/PrimarryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "test",
  image:
    "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  email: "12345@example.com",
  phone: "12345678910",
  company: {
    name: "カイブ式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <>
      <PrimarryButton>test</PrimarryButton>
      <SecondaryButton>test2</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </>
  );
}
