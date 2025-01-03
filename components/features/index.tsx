import React from "react";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { FaBolt, FaChartLine } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonFive } from "./skeletons/fifth";

export const Features = () => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-5xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Transforming IT Solutions for Tomorrow</Heading>
        <Subheading>
          Experience our comprehensive IT management, web marketing, SEO booster, and cloud computing services that drive your business forward.
        </Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
          <Card className="lg:col-span-2">
            <CardTitle>Boost Your Online Presence</CardTitle>
            <CardDescription>
              With our AI-powered platform, Our web marketing and SEO booster services help you reach your target audience and increase your online visibility.
            </CardDescription>
            <CardSkeletonContainer>
              <SkeletonOne />
            </CardSkeletonContainer>
          </Card>
          <Card>
            <CardSkeletonContainer className="max-w-[16rem] mx-auto">
              <SkeletonTwo />
            </CardSkeletonContainer>
            <CardTitle>Efficient Cloud Solutions</CardTitle>
            <CardDescription>
            Leverage the power of cloud computing to streamline your business operations and enhance scalability.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonThree />
            </CardSkeletonContainer>
            <CardTitle>IT Management Services You Can Trust</CardTitle>
            <CardDescription>
            Streamline your operations with our expert IT management solutions designed for efficiency and growth.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer
              showGradient={false}
              className="max-w-[16rem] mx-auto"
            >
              <SkeletonFour />
            </CardSkeletonContainer>
            <CardTitle>Easy Collaboration</CardTitle>
            <CardDescription>
              Proactive can integrate with Zapier, Slack and every other popular
              integration tools.
            </CardDescription>
          </Card>
          <Card>
            {/* <CardSkeletonContainer>
              <SkeletonFive />
            </CardSkeletonContainer> */}
            <CardTitle>Know your audience</CardTitle>
            <CardDescription>
              Based on your audience, create funnels and drive more traffic.
            </CardDescription>
          </Card>
        </div>
      </Container>
    </GradientContainer>
  );
};
