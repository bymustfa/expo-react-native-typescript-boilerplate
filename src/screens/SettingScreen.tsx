import React, { FC, useEffect, useState } from "react";
import { Text, ScrollView, ToggleButton } from "components/base";

import { Button } from "components/base";
import { getUserPreferences } from "utils/storage";
import type { IUserPreferences } from "utils/storage/storage.types";

import { Box } from "components/base";
import { theme } from "utils/theme/theme";

const { colors } = theme;

const SettingScreen: FC = () => {
  const [userPreferences, setUserPreferences] = useState<IUserPreferences>();

  const [toggle, setToggle] = useState(false);

  const getSettings = async () => {
    const datas = await getUserPreferences();
    setUserPreferences(datas);
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <ScrollView flex={1}>
      <Box bg={colors.white}>
        <Text
          bg={colors.light}
          color={colors.gray}
          fontWeight="bold"
          fontSize={12}
          px={2}
          py={1}
        >
          PREFERENCE
        </Text>

        {Array.from({ length: 10 }).map((_, index) => (
          <Box
            key={index}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            p={2}
          >
            <Text>Dark Mode {index % 2 === 0 ? "Yeap" : "Nope"}</Text>
            <ToggleButton status={index % 2 === 0} />
          </Box>
        ))}
      </Box>

      <ToggleButton status={toggle} onChange={() => setToggle(!toggle)} />
    </ScrollView>
  );
};

export default SettingScreen;
