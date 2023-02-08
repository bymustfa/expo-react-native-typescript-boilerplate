import React, { FC } from "react";
import { Box, Text, ScrollView } from "../components/base";

const DemoScreen: FC = () => {
  return (
    <ScrollView>
      <Box>
        <Text color="red">Demo Screen</Text>
      </Box>
    </ScrollView>
  );
};

export default DemoScreen;
