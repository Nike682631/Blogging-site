export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface userRegisterModel{
  last_name: string,
  first_name: string,
  email: string,
  password: string
}

export interface userLoginModel{
  email: string,
  password: string
}
