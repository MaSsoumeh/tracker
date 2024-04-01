import Button from "@/app/components/Button";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

const IssueActions = () => {
  return (
    <div className="mb-4">
      <Link href="/issues/new">
        <Button icon={IoAddCircleOutline}>New Issue</Button>
      </Link>
    </div>
  );
};

export default IssueActions;
