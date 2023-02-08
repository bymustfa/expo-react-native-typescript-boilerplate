import React, { FC } from "react";
import { Box, Button, Text } from "../components/base";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeScreen: FC = () => {
  return (
    <ScrollView>
      <Box p={2}>
        <Box>
          <Text color="red">Home Screen</Text>
        </Box>

        <Button
          text="Demo"
          mb={10}
          size="xl"
          leftIcon={<Feather name="menu" size={24} />}
          rightIcon={<Feather name="menu" size={24} />}
        />

        <Button
          mb={10}
          size="xl"
          leftIcon={<Feather color="white" name="menu" size={24} />}
        />
        <Button text="Demo" mb={10} size="lg" variant="secondary" />
        <Button text="Demo" mb={10} variant="danger" />
        <Button text="Demo" mb={10} variant="dark" />
        <Button text="Demo" mb={10} size="sm" variant="success" />
        <Button text="Demo" mb={10} variant="warning" />
        <Button text="Demo" mb={10} variant="info" />
        <Button text="Demo" mb={10} variant="light" />
        <Button
          text="Demo"
          leftIcon={<Feather name="menu" size={24} />}
          rightIcon={<Feather name="menu" size={24} />}
          mb={10}
          size="sm"
          variant="link"
        />
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
