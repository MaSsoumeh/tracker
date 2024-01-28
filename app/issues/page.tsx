import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from "../components/Button";
import Table from "../components/Table";
import { statusColor } from "../utils";

const IssuePage = async () => {
  const issues = await prisma?.issue.findMany();

  return (
    <div>
      <div className="mb-4">
        <Link href="/issues/new">
          <Button icon={IoAddCircleOutline}>New Issue</Button>
        </Link>
      </div>

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
