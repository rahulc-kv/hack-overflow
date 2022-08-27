import React from 'react';

const getNodes = (str: string) =>
  new DOMParser().parseFromString(str, 'text/html').body.childNodes;

//  Function converts the string into corresponding JSX. Wrap the translate content inside the StringToTsx
//  and pass it as domstring. Tailwind styles cannot be passed.

const createJSX = nodeArray => {
  return nodeArray.map(node => {
    const attributeObj = {};
    const { attributes, localName, childNodes, nodeValue } = node;
    attributeObj['key'] = `${localName}_${nodeValue}`;
    if (attributes) {
      Array.from(attributes).forEach(
        (attribute: { name: string; nodeValue: string }) => {
          if (attribute.name === 'style') {
            const styleAttributes = attribute.nodeValue.split(';');
            const styleObj = {};
            styleAttributes.forEach(attr => {
              const [key, value] = attr.split(':');
              styleObj[key] = value;
            });
            attributeObj[attribute.name] = styleObj;
          } else {
            attributeObj[attribute.name] = attribute.nodeValue;
          }
        }
      );
    }
    return localName
      ? React.createElement(
          localName,
          attributeObj,
          childNodes && Array.isArray(Array.from(childNodes))
            ? createJSX(Array.from(childNodes))
            : []
        )
      : nodeValue;
  });
};
interface StringToTSXProps {
  domString: string;
}
export const StringToTSX = ({ domString }: StringToTSXProps) => {
  return createJSX(Array.from(getNodes(domString)));
};
