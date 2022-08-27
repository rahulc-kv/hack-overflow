import { useState, useRef } from 'react';

export default function useShowEllipsisMenu() {
  const ref = useRef(null);
  const [menuVisible, setMenuVisible] = useState<string>('none');

  const displayMenu = (id: string) => {
    id === menuVisible || id === 'none'
      ? setMenuVisible('none')
      : setMenuVisible(id);
  };

  const onOutsideClick = () => displayMenu('none');

  return { menuVisible, setMenuVisible, displayMenu, ref, onOutsideClick };
}
