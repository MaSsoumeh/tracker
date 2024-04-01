import Skeleton from "@/app/components/Skeleton";
import { Box } from "@radix-ui/themes";

const NewIssueLoading = () => {
  return (
    <Box className="max-w-lg space-y-2">
      <Skeleton />
      <Skeleton height="20rem" />
      <Skeleton width="8rem" />
    </Box>
  );
};

export default NewIssueLoading;
