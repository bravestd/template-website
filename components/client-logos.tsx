import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={130}>
        <Image
          src="/assets/trustby/google.svg"
          width={130}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={200}>
        <Image
          src="/assets/trustby/exodus-wallet.svg"
          width={200}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={140}>
        <Image
          src="/assets/trustby/github.png"
          width={140}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={170}>
        <Image
          src="/assets/trustby/facebook.svg"
          width={170}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustby/meta.svg"
          width={150}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={130}>
        <Image
          src="/assets/trustby/yandex.svg"
          width={130}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={140}>
        <Image
          src="/assets/trustby/github.png"
          width={140}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={130}>
        <Image
          src="/assets/trustby/google.svg"
          width={130}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={130}>
        <Image
          src="/assets/trustby/yandex.svg"
          width={130}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={170}>
        <Image
          src="/assets/trustby/facebook.svg"
          width={170}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustby/meta.svg"
          width={150}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={200}>
        <Image
          src="/assets/trustby/exodus-wallet.svg"
          width={200}
          height={50}
          alt="Example"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
