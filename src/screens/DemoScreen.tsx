import React, { FC } from "react";
import { Box, Text } from "../components/base";

const DemoScreen: FC = () => {
  return (
    <Box p={2}>
      <Box>
        <Text color="red">Demo Screen</Text>
      </Box>
    </Box>
  );
};

export default DemoScreen;
