import React, { FC, ReactNode, SVGProps } from 'react';

export type EllipsisMenuProps = {
  backgroundColor?: string;
  children: ReactNode;
  actionItems: ActionItem[];
  visibilty: boolean;
  ellipsisRef?: React.MutableRefObject<any>;
  onOutsideClick: () => void;
};

export type ActionItem = {
  Icon: FC<SVGProps<SVGElement>>;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
