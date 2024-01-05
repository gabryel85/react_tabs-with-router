import {
  FC, ReactElement, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactElement<any, any>
};
const PrivateRoute: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<string | null>('');

  const navigation = useNavigate();

  useEffect(() => {
    const us: string | null = localStorage.getItem('user');

    setUser(us);
  }, []);

  if (!user) {
    navigation('/login');
  }

  return children;
};

export default PrivateRoute;
