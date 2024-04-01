import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import delay from "delay";
import Table from "../components/Table";
import { statusColor } from "../utils";
import IssueActions from "./new/IssueActions";

const IssuePage = async () => {
  const issues = await prisma?.issue.findMany();

  await delay(5000);

  return (
    <div>
      <IssueActions />

      <Table
        columns={[
          {
            field: "title",
            headerName: "Issue",
            renderCell: ({ row }) => (
              <div className="flex-column space-y-2">
                <div>{row.title}</div>
                <div className="block lg:hidden">
                  <Badge color={statusColor[row?.status as Status]}>
                    {row?.status}
                  </Badge>
                </div>
              </div>
            ),
          },
          {
            field: "status",
            headerName: "Status",
            renderCell: ({ row }) => (
              <Badge color={statusColor[row?.status as Status]}>
                {row?.status}
              </Badge>
            ),
          },
          {
            field: "createdAt",
            headerName: "Created",
            renderCell: ({ row }) => row.createdAt.toDateString(),
          },
        ]}
        rows={issues}
      />
    </div>
  );
};

export default IssuePage;
export const dynamic = "force-dynamic";
