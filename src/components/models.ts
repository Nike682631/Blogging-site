export interface UserRegisterModel{
  last_name: string,
  first_name: string,
  email: string,
  password: string
}

export interface UserLoginModel{
  email: string,
  password: string
}

export interface BlogModel{
  title: string,
  description:string,
  author: string,
  tags: Array<String>,
  comments: Array<String>
}

export interface RouteProps {
  id: string;
}