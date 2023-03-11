import { useContext } from 'react';
import { GlobalAppState } from '../../core/shareObject/globalAppState';
import { Theme } from '../../core/theme/types';
import { UserIdentity } from '@brj/core/shareObject/types';

export const useShareObject = () => {
  const { getContext } = useContext(GlobalAppState);

  const getTheme = (): Theme | undefined => getContext().theme;

  const getUserIdentity = (): UserIdentity => ({ isLoggedIn: false });

  const isLoggedIn = () => getUserIdentity().isLoggedIn;

  return { getContext, getTheme, getUserIdentity, isLoggedIn };
};
