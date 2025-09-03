import {
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"300px"} width={"300px"}>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
