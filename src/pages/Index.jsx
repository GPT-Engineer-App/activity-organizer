import { useState } from "react";
import { Box, Button, Input, List, ListItem, Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No input",
        description: "Please enter a todo item.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Todo App
      </Text>
      <Box my={4} display="flex">
        <Input placeholder="Add a todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <IconButton colorScheme="blue" aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} />
      </Box>
      <List spacing={3} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center" p={2} boxShadow="md">
            <Text>{todo}</Text>
            <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
