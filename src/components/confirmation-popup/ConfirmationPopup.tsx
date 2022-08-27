import React, { FC } from 'react';

import { CloseIcon } from '@assets/icons';
import Button from '@components/button/Button';
import PopUp from '../modal/SideModal';
import COLORS from '@constants/colors';

type ModalProps = {
  buttonOneText: string;
  buttonTwoText: string;
  visibility: boolean;
  message: string;
  onButtonOneClick: () => void;
  onButtonTwoClick: () => void;
  onCloseButtonClick: () => void;
  title: string;
  disabled?: boolean;
  testId?: string;
};

const ConfirmationPopup: FC<ModalProps> = ({
  title = '',
  message = '',
  buttonOneText = '',
  buttonTwoText = '',
  visibility = false,
  onButtonOneClick,
  onButtonTwoClick,
  onCloseButtonClick,
  disabled = false,
  testId = 'confirmationPopup'
}) => {
  const onCloseIconClick = () => {
    onCloseButtonClick();
  };

  return (
    <PopUp isOpen={visibility} handleClose={onCloseButtonClick} testId={testId}>
      <div
        className={`flex justify-center items-center self-center
                    w-full h-full bg-transparent
                     ${
                       visibility
                         ? 'animate-zoom-to-front'
                         : 'animate-zoom-to-back'
                     }`}
        onClick={e => e.stopPropagation()}>
        <div className="flex relative flex-col p-3 max-w-md bg-white rounded-xl">
          <div className="flex absolute top-3 right-3 justify-center items-center w-7 h-7 bg-whiteSmoke rounded-full">
            <Button
              onClick={onCloseIconClick}
              iconStroke={COLORS.DAVY_GREY}
              Icon={CloseIcon}
            />
          </div>
          <p className="px-10 mt-8 text-base font-medium text-center text-blackGreen">
            {title}
          </p>
          <p className="px-10 mt-2 text-sm text-center text-davyGrey">
            {message}
          </p>
          <div className="flex justify-center mt-6 w-full bg-whiteSmoke rounded-xl">
            <Button
              className="my-4 mx-1.5 font-bold text-white bg-secondaryColor rounded-md"
              onClick={onButtonOneClick}
              label={buttonOneText}
              labelClass="py-1.5 px-4 text-sm"
            />
            <Button
              className="my-4 mx-1.5 font-bold text-white bg-primaryColor rounded-md"
              onClick={onButtonTwoClick}
              label={buttonTwoText}
              labelClass="py-1.5 px-4 text-sm"
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default ConfirmationPopup;
