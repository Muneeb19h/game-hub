import bullsEye from "../assets/bulls-eye.png";
import thumbsUp from "../assets/thumbs-up.png";
import meh from "../assets/meh.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh" },
    4: { src: thumbsUp, alt: "Recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return <Image {...emojiMap[rating]} boxSize={"20px"} marginTop={1}></Image>;
};

export default Emoji;
