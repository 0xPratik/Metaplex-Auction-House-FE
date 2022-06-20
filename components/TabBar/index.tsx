import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
} from "@chakra-ui/react";

const TabItem = [
  {
    tabName: "Tab 1",
    tabComponent: <p>one!</p>,
  },
  {
    tabName: "Tab 2",
    tabComponent: <p>Two!</p>,
  },
];

function index() {
  return (
    <Box w="100%" my={4}>
      <Tabs variant="soft-rounded" colorScheme="purple" align="center">
        <TabList>
          {TabItem.map((item, index) => {
            return (
              <Tab key={index} ml={2}>
                {item.tabName}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          {TabItem.map((item, index) => {
            return <TabPanel key={index}>{item.tabComponent}</TabPanel>;
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default index;
