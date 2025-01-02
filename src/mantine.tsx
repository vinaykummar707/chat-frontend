import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  ScrollArea,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CloseSquare, Like } from "solar-icon-set";

export function NavbarSection() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </AppShell.Header> */}
      <AppShell.Navbar p="md">
        <AppShell.Section>
          <ActionIcon onClick={toggle}>
            <CloseSquare />
          </ActionIcon>
        </AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          60 links in a scrollable section
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Section>
        <AppShell.Section>
          Navbar footer – always at the bottom
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <ActionIcon onClick={toggle}>
          <Like />
        </ActionIcon>
      </AppShell.Main>
    </AppShell>
  );
}
