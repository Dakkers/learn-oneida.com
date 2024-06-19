import type { Meta, StoryFn } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Box } from "../Box";
import { useState } from "react";

export default {
  title: "Components/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export const Basic: StoryFn<typeof Drawer> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger>
        Click Me
      </Drawer.Trigger>

      <Box>
        Drawer content
      </Box>
    </Drawer>
  );
}
