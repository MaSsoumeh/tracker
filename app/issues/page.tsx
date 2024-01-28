import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import Button from "../components/Button";
import Table from "../components/Table";
import { Badge } from "@radix-ui/themes";

const IssuePage = async () => {
  const issues = await prisma?.issue.findMany();

  return (
    <div>
      <Link href="/issues/new">
        <Button icon={IoAddCircleOutline}>New Issue </Button>
        <Table
          columns={[
            { field: "title", headerName: "Issue" },
            {
              field: "status",
              headerName: "Status",
              renderCell: ({ row }) => (
                <Badge color="orange">{row.status}</Badge>
              ),
            },
            {
              field: "createdAt",
              headerName: "CreatedAt",
              renderCell: ({ row }) => row.createdAt.toDateString(),
            },
          ]}
          rows={issues}
        />
      </Link>
    </div>
  );
};

export default IssuePage;
