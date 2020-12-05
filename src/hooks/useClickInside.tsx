import { useState, useEffect, useRef } from 'react';

interface UseClickInside {
  ref: React.RefObject<HTMLDivElement>;
  clickInside: boolean;
  setClickInside: React.Dispatch<React.SetStateAction<boolean>>;
}

const useClickInside = (initial: boolean): UseClickInside => {
  const [clickInside, setClickInside] = useState(initial);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickInside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setClickInside(false);
    } else {
      setClickInside(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickInside, true);
    return () => {
      document.removeEventListener('click', handleClickInside, true);
    };
  });

  return { ref, clickInside, setClickInside };
};

export default useClickInside;
