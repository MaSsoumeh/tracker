import { Table as RadixTable } from "@radix-ui/themes";
import classNames from "classnames";
import Skeleton from "../components/Skeleton";
import IssueActions from "./new/IssueActions";

const LoadingIssuePage = () => {
  const columnHeaders = ["Issue", "Status", "Created"];
  const rows = [1, 2, 3, 4, 5];

  return (
    <div>
      <IssueActions />

      <RadixTable.Root variant="surface">
        <RadixTable.Header>
          <RadixTable.Row>
            {columnHeaders.map((header, index) => (
              <RadixTable.ColumnHeaderCell
                key={header}
                className={classNames({
                  "table-cell": index === 0,
                  "hidden lg:table-cell": index !== 0,
                })}
              >
                {header}
              </RadixTable.ColumnHeaderCell>
            ))}
          </RadixTable.Row>
        </RadixTable.Header>
        <RadixTable.Body>
          {rows?.map((row, index) => (
            <RadixTable.Row key={index}>
              {columnHeaders.map((col, idx) => (
                <RadixTable.Cell
                  key={col}
                  className={classNames({
                    "table-cell": idx === 0,
                    "hidden lg:table-cell": idx !== 0,
                  })}
                >
                  <Skeleton />
                </RadixTable.Cell>
              ))}
            </RadixTable.Row>
          ))}
        </RadixTable.Body>
      </RadixTable.Root>
    </div>
  );
};

export default LoadingIssuePage;
