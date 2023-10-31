import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
import CenForm from "./components/Form/Form";
// Self contained components
import CenTable from "./components/Table/Table";
CenForm;
CenTable;

// Simple components
Builder.registerComponent(
  dynamic(() => import("./components/Button/Button")),
  {
    name: "Button",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Click me",
      },
      {
        name: "color",
        type: "string",
        defaultValue: "red",
        enum: ["red", "orange", "yellow", "green", "cyan", "blue", "violet"],
      },
      {
        name: "appearance",
        type: "string",
        defaultValue: "primary",
        enum: ["primary", "ghost", "link", "subtle", "default"],
      },
      {
        name: "loading",
        type: "boolean",
      },
      {
        name: "block",
        type: "boolean",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Badge/Badge")),
  {
    name: "Badge",
    inputs: [
      { name: "content", type: "string" },
      {
        name: "color",
        type: "string",
        defaultValue: "red",
        enum: ["red", "orange", "yellow", "green", "cyan", "blue", "violet"],
      },
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
      { name: "text", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/CheckPicker/Checkpicker")),
  {
    name: "Checkpicker",
    inputs: [
      { name: "label", type: "string" },
      { name: "size", type: "string" },
      { name: "sticky", type: "boolean" },
      {
        name: "data",
        type: "list",
        defaultValue: [
          "Eugenia",
          "Bryan",
          "Linda",
          "Nancy",
          "Lloyd",
          "Alice",
          "Julia",
          "Albert",
          "Louisa",
          "Lester",
          "Lola",
          "Lydia",
          "Hal",
          "Hannah",
          "Harriet",
          "Hattie",
          "Hazel",
          "Hilda",
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/DatePicker/Datepicker")),
  {
    name: "Datepicker",
    inputs: [
      { name: "disabled", type: "boolean" },
      { name: "readOnly", type: "boolean" },
      { name: "format", type: "string" },
      { name: "oneTap", type: "boolean" },
      { name: "placeholder", type: "string" },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("./components/RadioTile/RadioTile")),
  {
    name: "RadioTileGroup",
    inputs: [
      {
        name: "inline",
        type: "boolean",
      },
      {
        name: "tiles",
        type: "list",
        subFields: [
          {
            name: "checked",
            type: "boolean",
          },
          {
            name: "label",
            type: "string",
          },
          {
            name: "value",
            type: "string",
          },
          {
            name: "text",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
          {
            name: "imagealt",
            type: "string",
          },
          {
            name: "imagesizewidth",
            type: "number",
            defaultValue: "50",
          },
        ],
        defaultValue: [],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Carousel/Carousel")),
  {
    name: "Carousel",
    inputs: [
      {
        name: "autoplay",
        type: "boolean",
      },
      {
        name: "shape",
        type: "string",
        defaultValue: "dot",
        enum: ["dot", "bar"],
      },
      {
        name: "placement",
        type: "string",
        defaultValue: "bottom",
        enum: ["top", "bottom", "left", "right"],
      },
      {
        name: "slides",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          },
        ],
        defaultValue: [],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Button/ButtonGroup")),
  {
    name: "Button Group",
    inputs: [
      {
        name: "justified",
        type: "boolean",
      },
      {
        name: "vertical",
        type: "boolean",
      },
      {
        name: "size",
        type: "string",
        defaultValue: "md",
        enum: ["xs", "sm", "md", "lg"],
      },
      {
        name: "buttons",
        type: "list",
        subFields: [
          {
            name: "text",
            type: "string",
            defaultValue: "Click me",
          },
          {
            name: "color",
            type: "string",
            defaultValue: "red",
            enum: [
              "red",
              "orange",
              "yellow",
              "green",
              "cyan",
              "blue",
              "violet",
            ],
          },
          {
            name: "appearance",
            type: "string",
            defaultValue: "primary",
            enum: ["primary", "ghost", "link", "subtle", "default"],
          },
          {
            name: "loading",
            type: "boolean",
          },
          {
            name: "block",
            type: "boolean",
          },
        ],
        defaultValue: [],
      },
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
    inputs: [
      {
        name: "bodyCopy",
        type: "string",
        defaultValue: "Click me",
      },
      {
        name: "drawerTitle",
        type: "string",
        defaultValue: "Hello World!",
      },
      {
        name: "placement",
        type: "string",
        defaultValue: "right",
        enum: ["top", "bottom", "right", "left"],
      },
      {
        name: "size",
        type: "string",
        defaultValue: "lg",
        enum: ["full", "lg", "md", "xs"],
      },
      {
        name: "autoFocus",
        type: "boolean",
      },
      {
        name: "text",
        type: "string",
        defaultValue: "Click me",
      },
      {
        name: "color",
        type: "string",
        defaultValue: "red",
        enum: ["red", "orange", "yellow", "green", "cyan", "blue", "violet"],
      },
      {
        name: "appearance",
        type: "string",
        defaultValue: "primary",
        enum: ["primary", "ghost", "link", "subtle", "default"],
      },
      {
        name: "loading",
        type: "boolean",
      },
      {
        name: "block",
        type: "boolean",
      },
    ],
  }
);
// Builder.registerComponent(
//   dynamic(() => import("./components/Dropdown/Dropdown")),
//   {
//     name: "Dropdown",
//   }
// );

Builder.registerComponent(CenForm, {
  name: "CenForm",
  inputs: [
    {
      name: "inputs",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
        },
        {
          name: "formControlName",
          type: "string",
        },
        {
          name: "HelpText",
          type: "string",
        },
        {
          name: "placeholder",
          type: "string",
        },
      ],
      defaultValue: [
        {
          label: "input",
          content: [],
        },
      ],
    },
  ],
});
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
    inputs: [
      {
        name: "type",
        type: "string",
        defaultValue: "info",
        enum: ["info", "success", "warning", "error"],
      },
      { name: "showIcon", type: "boolean" },
      { name: "full", type: "boolean" },
      { name: "closable", type: "boolean" },
      { name: "headerText", type: "string" },
      { name: "Message", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Modal/Modal")),
  {
    name: "Modal",
    inputs: [
      { name: "modalTitle", type: "string" },
      {
        name: "backdrop",
        type: "string",
        defaultValue: "true",
        enum: ["static", "true", "false"],
      },
      { name: "overflow", type: "boolean" },
      {
        name: "color",
        type: "string",
        defaultValue: "red",
        enum: ["red", "orange", "yellow", "green", "cyan", "blue", "violet"],
      },
      {
        name: "appearance",
        type: "string",
        defaultValue: "primary",
        enum: ["primary", "ghost", "link", "subtle", "default"],
      },
      { name: "text", type: "string" },
    ],
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
    inputs: [
      { name: "trigger", type: "string" },
      { name: "text", type: "string" },
      { name: "buttonText", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Toggle/Toggle")),
  {
    name: "Toggle",
    inputs: [{ name: "checkecText", type: "string" }],
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
Builder.registerComponent(CenTable, {
  name: "CenTable",
  inputs: [
    {
      name: "virtualized",
      type: "boolean",
    },
    {
      name: "fillHeight",
      type: "boolean",
    },
    {
      name: "bordered",
      type: "boolean",
    },
    {
      name: "autoHeight",
      type: "boolean",
    },
    {
      name: "showHeader",
      type: "boolean",
      defaultValue: "showHeader"
    },
    {
      name: "hover",
      type: "boolean",
      defaultValue: ""
    },
    {
      name: "wordWrap",
      type: "string",
      defaultValue: "false",
      enum: ["break-all", "break-word", "keep-all"],
    },
  ],
});
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
    inputs: [
      {
        name: "blocks",
        type: "boolean",
      },
      {
        name: "searchable",
        type: "boolean",
      },
      {
        name: "appearance",
        type: "string",
        enum: ["default", "subtle"],
        defaultValue: 'default'
      },
      {
        name: "size",
        type: "string",
        defaultValue: "md",
        enum: ["xs", "sm", "md", "lg"],
      },
      {
        name: "placement",
        type: "string",
        enum: [
          'bottomStart',
          'bottomEnd',
          'topStart',
          'topEnd',
          'leftStart',
          'leftEnd',
          'rightStart',
          'rightEnd',
          'auto',
          'autoVerticalStart',
          'autoVerticalEnd',
          'autoHorizontalStart',
          'autoHorizontalEnd',
        ],        
        defaultValue: 'bottomStart'
      },
    ]
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Rate/Rate")),
  {
    name: "Rate",
    inputs: [
      {
        name: "defaultValue",
        type: "number",
        defaultValue: "4",
      },
      { name: "vertical", type: "boolean" },
      { name: "character", type: "string" },
      {
        name: "size",
        type: "string",
        defaultValue: "md",
        enum: ["xs", "sm", "md", "lg"],
      },
      {
        name: "color",
        type: "string",
        defaultValue: "red",
        enum: ["red", "orange", "yellow", "green", "cyan", "blue", "violet"],
      },
    ],
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
    inputs: [
      {
        name: "type",
        type: "string",
        defaultValue: "LINE",
        enum: ["LINE", "Circle"],
      },
      { name: "percent", type: "number" },
      { name: "vertical", type: "boolean" },
      { name: "strokeColor", type: "string" },
      { name: "strokeWidth", type: "number" },
      {
        name: "status",
        type: "string",
        defaultValue: "red",
        enum: ["success", "fail", "active"],
      },
    ],
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
    inputs: [{ name: "activePage", type: "string" }],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Notification/Notification")),
  {
    name: "Notification",
    inputs: [
      {
        name: "type",
        type: "string",
        defaultValue: "info",
        enum: ["info", "success", "warning", "error"],
      },
      { name: "closable", type: "boolean" },
      { name: "headerText", type: "string" },
      { name: "Message", type: "string" },
    ],
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