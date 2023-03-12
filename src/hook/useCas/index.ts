import { OrganisationResponse } from '../../core/cas/types';
import { useShareObject } from '../useShareObject';

export const useCas = () => {
  const { setContext } = useShareObject();

  const cas = {
    success: false,
    organisations: [],
    selectedOrganisation: undefined,
  };

  const getOrganisations = (): OrganisationResponse[] => cas.organisations;

  const setOrganisation = (code: string) => {
    // TODO
  };

  const getContextOrganisation = () =>
    getOrganisations().find((organisation) => organisation.slug === cas.selectedOrganisation);

  const logout = () => setContext({ identity: undefined });

  return { getOrganisations, setOrganisation, getContextOrganisation, logout };
};
