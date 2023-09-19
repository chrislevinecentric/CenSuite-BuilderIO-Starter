import { faker } from "@faker-js/faker/locale/en";
export function mockTreeData(options) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;

  const data = [];
  const mock = (list, parentValue, layer = 0) => {
    const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value = parentValue
        ? parentValue + "-" + (index + 1)
        : index + 1 + "";
      const children = [];
      const label = Array.isArray(labels) ? labels[layer] : labels;

      let row = {
        label:
          typeof label === "function"
            ? label(layer, value, faker)
            : label + " " + value,
        value,
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value),
        };
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data);

  return data;
}
export const mockAsyncData = (sort = true) => {
  const createNode = () => {
    const hasChildren = Math.random() > 0.5;
    const label = (hasChildren ? "Folder" : "File") + " " + faker.word.noun(5);

    return {
      label,
      value: Math.random() * 1e18,
      children: hasChildren ? [] : null,
    };
  };

  const getNodes = (length) => {
    const list = [];
    for (let i = 0; i < length; i++) {
      list.push(createNode());
    }
    return sort
      ? list.sort((a, b) => (b.children ? 1 : 0) - (a.children ? 1 : 0))
      : list;
  };

  const fetchNodes = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(getNodes(Math.random() * 10)), 500);
    });
  };

  return [getNodes, fetchNodes];
};
