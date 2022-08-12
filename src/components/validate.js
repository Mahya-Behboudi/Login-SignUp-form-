export const validate = data => {
    const erorrs = {};
    // validate name input
    if(!data.name.trim()) {
        erorrs.name ="name required";
    }else {
        delete erorrs.name;
    }
    // validate Email
    if(!data.email) {
        erorrs.email="Email required"

    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        erorrs.email = "Email is not vali";
    }else {
        delete erorrs.email;
    }
    // validate password 
    if(!data.password) {
        erorrs.password = "password required"
    }else if(data.password.length < 6) {
        erorrs.password = "password need to be 6 character or more";
    }else {
        delete erorrs.password
    }
    // validate confirm password
    if(!data.confirmPassword ) {
        erorrs.confirmPassword= "confirm password";
    }else if(data.confirmPassword !== data.password) {
      erorrs.confirmPassword ="the password is not match";
    }else {
        delete erorrs.confirmPassword;
    }
    // validate chekbox
    if(!data.isAccepted) {
        erorrs.isAccepted = "Accept our regulations!"
    }else {
        delete erorrs.isAccepted
    }
    return erorrs;
}