import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Button/ButtonGroup")),
  {
    name: "ButtonGroup",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Button/Button")),
  {
    name: "Button",
    inputs: [
      { name: "color", type: "text" },
      { name: "appearance", type: "text" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Badge/Badge")),
  {
    name: "Badge",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/BreadCrumb/Breadcrumb")),
  {
    name: "Breadcrumb",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Carousel/Carousel")),
  {
    name: "Carousel",
  }
);
