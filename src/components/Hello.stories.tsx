/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Hello, { HelloProps } from "./Hello";

export default {
  title: "components|basic/Hello", // 스토리 북에 보여질 그룹과 경로를 표시
  component: Hello, // 어떤 컴포넌트를 문서화할지 결정
  // Controls Addons
  argTypes: {
    name: { control: "text" },
    big: { control: "boolean" },
    onHello: { action: "clicked hello..." },
    onBye: { action: "clicked bye..." },
  },
  // 부제목
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
  },
};

export const standard = (args: HelloProps) => <Hello {...args} />;
export const big = (args: HelloProps) => <Hello {...args} />;

standard.args = {
  name: "Standard",
};

big.args = {
  name: "Big",
  big: true,
};
