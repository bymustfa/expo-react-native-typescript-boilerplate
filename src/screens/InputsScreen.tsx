import React, { FC, useState } from "react";
import { TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Box, Input, ScrollView } from "components/base";
import { theme } from "../utils/theme/theme";

const InputsScreen: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <ScrollView>
      <Input label="Demo Label" />

      <Input placeholder="Demo placeholder" />

      <Input
        editable={false}
        value="Aaaa"
        label="Demo Label Disabled"
        placeholder="Demo placeholder"
      />

      <Input
        label="Default Value"
        placeholder="Demo placeholder"
        value="Demo value 123"
      />

      <Input
        numberOfLines={3}
        required
        label="Multiline"
        placeholder="Demo placeholder"
      />

      <Input
        numberOfLines={3}
        placeholder="Demo placeholder"
        leftIcon={
          <Box
            height="100%"
            alignItems="center"
            justifyContent="flex-start"
            pt={2}
          >
            <Feather color={theme.colors.primary} name="edit" size={22} />
          </Box>
        }
        rightIcon={
          <Box
            height="100%"
            alignItems="center"
            justifyContent="flex-end"
            pb={2}
          >
            <Feather color={theme.colors.danger} name="trash-2" size={22} />
          </Box>
        }
      />

      <Input
        required
        label="Password"
        placeholder="Enter password"
        secureTextEntry={!showPassword}
        rightIcon={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? "eye-off" : "eye"} size={22} />
          </TouchableOpacity>
        }
      />

      <Input
        placeholder="Demo placeholder"
        leftIcon={<Feather name="eye" size={22} />}
        rightIcon={<Feather name="eye" size={22} />}
      />

      <Input
        label="Demo Label"
        placeholder="Demo placeholder"
        leftIcon={<Feather name="eye" size={22} />}
      />

      <Input
        placeholder="Demo placeholder"
        leftIcon={<Feather name="eye" size={22} />}
      />

      <Input
        label="Demo Label"
        placeholder="Demo placeholder"
        rightIcon={<Feather name="eye" size={22} />}
      />

      <Input
        mb={10}
        placeholder="Demo placeholder"
        rightIcon={<Feather name="eye" size={22} />}
      />
    </ScrollView>
  );
};

export default InputsScreen;
