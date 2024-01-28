import { Status } from "@prisma/client";
import { badgePropDefs } from "@radix-ui/themes";

export const statusColor: Record<
  Status,
  (typeof badgePropDefs.color.values)[number]
> = {
  OPEN: "cyan",
  CLOSE: "green",
  IN_PROGRESS: "blue",
};
