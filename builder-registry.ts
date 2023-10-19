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
      { name: "text", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Badge/Badge")),
  {
    name: "Badge",
    inputs: [
      { name: "content", type: "string" },
      { name: "text", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/BreadCrumb/Breadcrumb")),
  {
    name: "Breadcrumb",
    inputs: [
      { name: "separator", type: "text" },
      { name: "text", type: "text" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Carousel/Carousel")),
  {
    name: "Carousel",
    inputs: [
      { name: "placement", type: "text" },
      { name: "shape", type: "text" },
      { name: "autoplay", type: "text" },
      { name: "activeIndex", type: "text" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Cascader/Cascader")),
  {
    name: "Cascader",
    inputs: [
      { name: "content", type: "text" },
      { name: "text", type: "text" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Checkbox/Checkbox")),
  {
    name: "Checkbox",
    inputs: [
      { name: "disabled", type: "boolean" },
      { name: "checked", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/CheckPicker/Checkpicker")),
  {
    name: "Checkpicker",
    inputs: [
      { name: "disabled", type: "boolean" },
      { name: "checked", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/DatePicker/Datepicker")),
  {
    name: "Datepicker",
    inputs: [
      { name: "disabled", type: "boolean" },
      { name: "checked", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/DateRangePicker/DateRangePicker")),
  {
    name: "DateRangePicker",
    inputs: [
      { name: "format", type: "string" },
      { name: "defaultCalendarValue", type: "object" },
      { name: "placeholder", type: "text" },
      { name: "showOneCalendar", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Drawer/Drawer")),
  {
    name: "Drawer",
    inputs: [{ name: "placement", type: "string" }],
  }
);
// Builder.registerComponent(
//   dynamic(() => import("./components/Dropdown/Dropdown")),
//   {
//     name: "Dropdown",
//   }
// );

Builder.registerComponent(
  dynamic(() => import("./components/Form/Form")),
  {
    name: "Form",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Input/Input")),
  {
    name: "Input",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Loader/Loader")),
  {
    name: "Loader",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Message/Message")),
  {
    name: "Message",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Modal/Modal")),
  {
    name: "Modal",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Uploader/Uploader")),
  {
    name: "Uploader",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/TreePicker/Tree{icker")),
  {
    name: "TreePicker",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ToolTip/Tooltip")),
  {
    name: "Tooltip",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Toggle/Toggle")),
  {
    name: "Toggle",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Timeline/Timeline")),
  {
    name: "Timeline",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/TagPicker/TagPicker")),
  {
    name: "TagPicker",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/TagInput/TagInput")),
  {
    name: "TagInput",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Table/Table")),
  {
    name: "Table",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Slider/Slider")),
  {
    name: "Slider",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SelectPicker/SelectPicker")),
  {
    name: "SelectPicker",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Rate/Rate")),
  {
    name: "Rate",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/RadioTile/RadioTile")),
  {
    name: "RadioTile",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Radio/Radio")),
  {
    name: "Radio",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ProgressBar/Progressbar")),
  {
    name: "Progressbar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Panel/Panel")),
  {
    name: "Panel",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Pagination/Pagination")),
  {
    name: "Pagination",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Notification/Notification")),
  {
    name: "Notification",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/NavBar/Navbar")),
  {
    name: "Navbar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/navbar")),
  {
    name: "Navbar",
  }
);

// Builder.registerComponent(
//   dynamic(() => import("./components/Dropdown/Dropdown")),
//   {
//     name: "CenDropdown",
//   }
// );

Builder.registerComponent(
  dynamic(() => import("./components/Overlay/Overlay")),
  {
    name: "CenOverlay",
  }
);
