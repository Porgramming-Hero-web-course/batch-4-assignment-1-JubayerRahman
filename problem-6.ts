{
    interface Profile {
    name: string,
    age: number,
    email: string
}

function updateProfile(profile:Profile, updateProfile:Partial<Profile>): Profile {
    return {...profile, ...updateProfile}
}

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { name: "ohee" }));
}