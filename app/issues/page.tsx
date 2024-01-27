import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import Icon from "@/app/components/Icon";
import Button from "../components/Button";
const IssuePage = () => {
  return (
    <div>
      <Link href="/issues/new">
        <Button icon={IoAddCircleOutline}>New Issue </Button>
      </Link>
    </div>
  );
};

export default IssuePage;
