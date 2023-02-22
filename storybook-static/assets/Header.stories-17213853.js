var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as s}from"./Button-6ed49614.js";import"./index-02f1340d.js";import{H as n}from"./Header-8b5f9ae6.js";import"./index-50ee27ec.js";import"./iframe-a1c973c0.js";const y={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}},"logged-out":{startLoc:{col:17,line:14},endLoc:{col:47,line:14},startBody:{col:17,line:14},endBody:{col:47,line:14}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),l=t.bind({});l.args={user:{name:"Jane Doe"}};const d=t.bind({});d.args={};const L=["LoggedIn","LoggedOut"];export{l as LoggedIn,d as LoggedOut,L as __namedExportsOrder,y as default};
//# sourceMappingURL=Header.stories-17213853.js.map
