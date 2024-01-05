import {
  FC, ReactElement, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

const PrivateRoute: FC<Props> = ({ children }): ReactElement | null => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const us: string | null = localStorage.getItem('user');

    setUser(us);
  }, []);

  if (!user) {
    navigate('/login');

    return null;
  }

  return children;
};

export default PrivateRoute;
