import { UserIdentity } from '../shareObject/types';

export type OrganisationResponse = {
  slug: string;
  name: string;
  default: boolean;
  adminAccess: boolean;
  description?: string;
};

export type CasResponse = {
  organisations: OrganisationResponse[];
  identity?: UserIdentity & { requireOtp?: boolean };
};

export type CasLoginResponse = {
  isLoggedIn: boolean;
  errorMessage?: string;
  identityId: string;
  requireOtp: boolean;
  fullName: string;
  avatarUrl: string;
};

export type CasVerifyOAuthResponse = {
  ok: boolean;
};

export type CasState = {
  success: boolean;
  selectedOrganisation?: string;
  organisations: OrganisationResponse[];
};

export enum UserStatus {
  none = 0,
  offline = 1,
  online = 2,
  away = 3,
  dnd = 4,
  blocked = 5,
  busy = 6,
}
