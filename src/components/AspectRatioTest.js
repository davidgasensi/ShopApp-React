import { AspectRatio, Image } from "@chakra-ui/react";
import React from "react";

function AspectRatioTest() {
  return (
    <React.Fragment>
      <AspectRatio maxW="200px" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>

      <AspectRatio maxW="200px" ratio={4 / 3}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>

    </React.Fragment>
  );
}

export default AspectRatioTest;
