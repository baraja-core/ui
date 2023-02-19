export type UserLoggedIdentity = {
  identityId: string;
  isOAuthOk?: boolean;
  username: string;
  avatarUrl?: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  onlineStatus: OnlineStatus;
  statusMessage?: string;
  usingMobileDevice?: boolean;
  organisationId: number;
  organisationName: string;
  organisationPersonalNumber?: string;
  organisationRole?: string;
  organisationParentUser?: number;
};

export type UserIdentity =
  | ({ isLoggedIn: true } & UserLoggedIdentity)
  | ({ isLoggedIn: false } & Partial<UserLoggedIdentity>);

export enum OnlineStatus {
  Online = 'online',
  Offline = 'offline',
  OutOfOffice = 'outOfOffice',
  Away = 'away',
  DoNotDisturb = 'doNotDisturb',
  InCall = 'inCall',
}

export enum OAuthStatus {
  Ok = 'ok',
  NotOk = 'notOk',
  Waiting = 'waiting',
}
