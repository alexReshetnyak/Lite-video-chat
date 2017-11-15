export class SignUpForm {

      constructor(
        public userName: string,
        public userPassword: string,
        public confirmPassword: string,
      ) {}
}

export class LoginForm {

    constructor(
      public userName: string,
      public userPassword: string,
    ) {}
}
