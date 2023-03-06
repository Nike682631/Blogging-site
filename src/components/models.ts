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

export interface BlogRegisterModel{
  title: '',
  description: '',
  author: '',
  tags: [],
  comments: []
}