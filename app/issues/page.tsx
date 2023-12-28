import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import Icon from "@/app/components/Icon";
const IssuePage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button>
          <Icon>{IoAddCircleOutline}</Icon> New Issue
        </Button>
      </Link>
    </div>
  );
};

export default IssuePage;
