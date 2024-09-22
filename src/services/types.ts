/* Auth */
export interface IAuthSignUpRequest {
  email: string
  username: string
  password: string
}

export interface IAuthSignUpResponse {
  message: string
}

export interface IAuthVerifyRequest {
  activationCode: string
}

export interface IAuthVerifyResponse {
  jwt: string
}

export interface IAuthLoginRequest {
  email: string
  password: string
}

export interface IAuthLoginResponse {
  jwt: string
}

/* Tweet */
export interface IAddTweetRequest {
  text: string
  file: FileList
}

export interface IAddTweetResponse {
  text: string
}

/* Profile */
export interface IChangeInfoRequest {
  username: string
  bio: string
  location: string
  website: string
  birthDate: string
}

export interface ISearchQueryData {
  username: string
  page: number
  size: number
}
