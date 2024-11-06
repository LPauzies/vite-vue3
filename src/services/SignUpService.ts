type User = {
    name: string;
    lastname: string;
    age: number;
    gender: Gender;
}

enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

class SignUpService {
    submit(user: User) {
        console.log(user)
    }
}

export {
    Gender,
    SignUpService
};
export type { User };
