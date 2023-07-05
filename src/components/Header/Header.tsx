import { LinkButton } from '../LinkButton/LinkButton';
import { StyledHeader } from './header.styles';
import { Logo } from '../Logo/Logo';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUserData, selectIsAuth, selectUserData } from '../../store/slices/user-slice';
import { Profile } from '../Profile/Profile';
import { Button } from '../Button/Button';

export const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const { username, avatar } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(removeUserData());
  };

  return (
    <StyledHeader>
      <Logo />
      {isAuth ? (
        <div className={'auth-btns'}>
          <Profile author={{ username, image: avatar }} to={'/profile'} />
          <Button onClick={onLogout} bordered>
            Log out
          </Button>
        </div>
      ) : (
        <div className="btns">
          <LinkButton to={'sign-in-page'} label={'Sign in'} />
          <LinkButton to={'sign-up-page'} label={'Sign up'} success />
        </div>
      )}
    </StyledHeader>
  );
};