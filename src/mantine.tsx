import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Group,
  NavLink,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
  Card,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Activity, Fingerprint, Gauge, Menu, X } from "lucide-react";
import { useState } from "react";
import { Moon, Sun } from "solar-icon-set";

export function NavbarSection() {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const [active, setActive] = useState(0);
  const data = [
    {
      icon: Gauge,
      label: "Dashboard",
      description: "Item with description",
    },
    {
      icon: Fingerprint,
      label: "Security",
    },
    { icon: Activity, label: "Activity" },
  ];

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon size="1rem" />}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <AppShell
      navbar={{
        width: 260,
        breakpoint: "md",
        collapsed: { mobile: !opened, desktop: opened },
      }}
      padding="sm"
    >
      <AppShell.Navbar
        bg={computedColorScheme === "light" ? "gray.1" : "dark.8"}
        p="md"
      >
        <AppShell.Section
          component={Group}
          justify="space-between"
          align="center"
        >
          <Text fw={600} size={"xl"}>
            Bluebot
          </Text>
          <ActionIcon
            hiddenFrom="md"
            variant="light"
            size={"lg"}
            onClick={toggle}
          >
            <X size={24} />
          </ActionIcon>
        </AppShell.Section>
        <AppShell.Section my={"md"}>
          {items}
          <Text mt={"md"} size="sm" color="dimmed">
            Recents
          </Text>
          <ScrollArea.Autosize mah={600} mx="auto">
            {Array(60)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  radius={"md"}
                  key={index}
                  h={40}
                  mt="sm"
                  animate={false}
                />
              ))}
          </ScrollArea.Autosize>
        </AppShell.Section>
        {/* <AppShell.Section>
          Navbar footer – always at the bottom
        </AppShell.Section> */}
      </AppShell.Navbar>
      <AppShell.Main component={Stack}>
        <Group justify="space-between" w={"100%"}>
          <Group>
            <ActionIcon
              variant="light"
              color="gray"
              size={"lg"}
              onClick={toggle}
            >
              <Menu size={18} />
            </ActionIcon>
            <Text hiddenFrom="lg" fw={600} size={"xl"}>
              Bluebot
            </Text>
          </Group>
          <Group>
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="transparent"
              color="gray"
              size="xl"
              aria-label="Toggle color scheme"
            >
              {computedColorScheme === "light" ? (
                <Moon size={24} />
              ) : (
                <Sun size={24} />
              )}
            </ActionIcon>
            <Avatar
              src={"https://api.multiavatar.com/girl.svg"}
              variant="filled"
              color="violet"
              size={"md"}
              radius="xl"
            ></Avatar>
          </Group>
        </Group>

        <Box flex={1} p={"md"}></Box>
        <Box
          w={{ base: 300, sm: 500, lg: 550 }}
          pb={{ base: "xs", sm: "md", lg: "xl" }}
          c="#fff"
          ta="center"
          mx="auto"
        >
          <Card
            bg={computedColorScheme === "light" ? "gray.1" : "dark.6"}
            p={"md"}
          >
            prompt area
          </Card>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
