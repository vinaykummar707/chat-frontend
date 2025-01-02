import {
  ActionIcon,
  AppShell,
  Avatar,
  Group,
  ScrollArea,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Menu } from "lucide-react";
import { CloseCircle } from "solar-icon-set";

export function NavbarSection() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !opened, desktop: opened },
      }}
      padding="md"
    >
      <AppShell.Navbar p="md">
        <AppShell.Section>
          <ActionIcon variant="subtle" size={"lg"} onClick={toggle}>
            <CloseCircle size={24} />
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
        <Group justify="space-between" w={"100%"}>
          <ActionIcon variant="subtle" size={"lg"} onClick={toggle}>
            <Menu size={24} />
          </ActionIcon>
          <Avatar variant="filled" color="violet" size={"md"} radius="xl">
            <Text size="lg">Xl</Text>
          </Avatar>
        </Group>
      </AppShell.Main>
    </AppShell>
  );
}
