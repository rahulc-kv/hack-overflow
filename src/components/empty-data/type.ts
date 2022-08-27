import { FC, SVGProps } from 'react';

export type EmptyDataProps = {
  styleConfig?: {
    wrapperStyle?: string;
    imageStyle?: string;
    titleStyle?: string;
    primaryDescriptionStyle?: string;
    secondaryDescriptionStyle?: string;
  };
  contentConfig: {
    title: string;
    highlightedImage: string;
    showPrimaryButton?: boolean;
    showSecondaryButton?: boolean;
    showPrimaryDescription: boolean;
    showSecondaryDescription?: boolean;
    primaryDescription?: string;
    secondaryDescription?: string;
    primaryButtonConfig?: ButtonConfig;
    secondaryButtonConfig?: ButtonConfig;
  };
};

type ButtonConfig = {
  buttonHandler?: () => void;
  buttonLabel?: string;
  icon?: FC<SVGProps<SVGElement>>;
  customClass?: string;
  iconClass?: string;
  showLabelInSmallScreen?: boolean;
};
