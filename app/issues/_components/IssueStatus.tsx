import { statusColor } from "@/app/utils";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}
const IssueStatus = ({ status }: Props) => {
  return <Badge color={statusColor[status]}>{status}</Badge>;
};

export default IssueStatus;
