import { UserIdentity } from '../shareObject/types';

export interface OrganisationResponse {
  slug: string;
  name: string;
  default: boolean;
  adminAccess: boolean;
  description?: string;
}

export interface CasResponse {
  organisations: OrganisationResponse[];
  identity?: UserIdentity & { requireOtp?: boolean };
}

export interface CasLoginResponse {
  isLoggedIn: boolean;
  errorMessage?: string;
  identityId: string;
  requireOtp: boolean;
  fullName: string;
  avatarUrl: string;
}

export interface CasVerifyOAuthResponse {
  ok: boolean;
}

export interface CasState {
  success: boolean;
  selectedOrganisation?: string;
  organisations: OrganisationResponse[];
}

export enum UserStatus {
  none = 0,
  offline = 1,
  online = 2,
  away = 3,
  dnd = 4,
  blocked = 5,
  busy = 6,
}
