import Skeleton from "@/app/components/Skeleton";
import { Box, Card, Flex } from "@radix-ui/themes";

const ViewIssueLoading = () => {
  return (
    <Box>
      <Skeleton className="max-w-xl" />
      <Flex gap="3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="5rem" />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default ViewIssueLoading;
