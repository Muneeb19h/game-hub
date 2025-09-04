import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          placeholder="Search here....."
          borderRadius={20}
          variant={"filled"}
        ></Input>
      </InputGroup>
    </>
  );
};

export default SearchInput;
