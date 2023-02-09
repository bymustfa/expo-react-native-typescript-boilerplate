import React, { FC, useState } from "react";
import { IInputProps } from "./Input.type";
import TextInput from "../Elements/TextInput";
import Box from "../Elements/Box";
import { theme } from "../../../utils/theme/theme";
import Text from "../Elements/Text";

const { colors, borderRadius } = theme;
const Input: FC<IInputProps> = ({
  leftIcon,
  rightIcon,
  label = "",
  mb = 2,
  width = "100%",
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const inputWidth =
    leftIcon && rightIcon ? "80%" : leftIcon || rightIcon ? "90%" : "100%";

  const multiline = !!(props.numberOfLines && props.numberOfLines > 1);

  const inputHeight =
    multiline && props.numberOfLines ? (props.numberOfLines * 45) / 2 : 45;

  const disabled = props.editable === false;

  return (
    <Box mb={mb} width={width}>
      {label && label.trim().length > 0 && (
        <Text
          fontSize={12}
          fontWeight="600"
          mb={1}
          color={focused ? colors.dark : colors.gray}
        >
          {label} {required && <Text color={colors.danger}>*</Text>}
        </Text>
      )}

      <Box
        borderWidth={1}
        borderColor={focused ? colors.dark : colors.gray}
        flexDirection="row"
        width="100%"
        height={inputHeight}
        borderRadius={borderRadius.md}
        bg={colors.white}
      >
        {leftIcon && (
          <Box
            width="10%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            {leftIcon}
          </Box>
        )}

        <TextInput
          width={inputWidth}
          height="100%"
          px={2}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          multiline={multiline}
          color={disabled ? colors.gray : colors.dark}
          {...props}
        />

        {rightIcon && (
          <Box
            width="10%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            {rightIcon}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Input;
